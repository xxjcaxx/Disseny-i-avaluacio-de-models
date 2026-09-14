from flask import Flask, request, jsonify
from flask_cors import CORS  # <--- 1. Importa CORS
import numpy as np
import pandas as pd
import joblib

app = Flask(__name__)
CORS(app)                    # <--- 2. Activa CORS per a totes les rutes

# Carreguem el model...
model = joblib.load('hgb_2048_model.pkl')

def extreure_caracteristiques_un_taulell(board_16):
    t = np.array(board_16).reshape(4, 4)
    zeros = np.sum(t == 0)
    max_val = np.max(t)
    match_h = np.sum(t[:, :-1] == t[:, 1:])
    match_v = np.sum(t[:-1, :] == t[1:, :])
    es_cantonada = 1 if (t[0,0] == max_val or t[0,3] == max_val or t[3,0] == max_val or t[3,3] == max_val) else 0
    sumes_files = list(t.sum(axis=1))
    sumes_cols = list(t.sum(axis=0))
    
    features = list(board_16) + [zeros, max_val, match_h, match_v, es_cantonada] + sumes_files + sumes_cols
    return np.array([features])

@app.route('/best_move', methods=['POST'])
def get_best_move():
    data = request.get_json()
    if not data or 'board' not in data:
        return jsonify({'error': 'Falta el camp "board" al JSON'}), 400
    
    board = data['board']
    if len(board) != 16:
        return jsonify({'error': 'El tauler ha de tenir exactament 16 elements'}), 400
    
    try:
        X_in_array = extreure_caracteristiques_un_taulell(board)
        # 2. CONVERTIR A DATAFRAME: Si el model té guardats els noms de les columnes, els fem servir
        if hasattr(model, 'feature_names_in_'):
            X_in = pd.DataFrame(X_in_array, columns=model.feature_names_in_)
        else:
            X_in = X_in_array  # Fallback per si de cas
        prediccio = model.predict(X_in)[0]
        print(f"Predicció per al tauler {board}: {prediccio}")
        return jsonify({'best_move': f"{prediccio}"})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)