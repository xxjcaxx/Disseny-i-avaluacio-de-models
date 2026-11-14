import numpy as np
import matplotlib.pyplot as plt


def plot_convolutional(board, kernel, result, pooled=None):
    # Creem 4 subgrafs (ax[0] per al tauler, ax[1] per al kernel, ax[2] per al resultat, ax[3] per al pooling)
    if pooled is not None:
        fig, ax = plt.subplots(1, 4, figsize=(20, 5))
    else:
        fig, ax = plt.subplots(1, 3, figsize=(15, 5))

    # 1. Dibuixar el tauler original (ax[0])
    ax[0].imshow(board, cmap='YlOrRd', interpolation='nearest')
    for i in range(board.shape[0]):
        for j in range(board.shape[1]):
            val = board[i, j]
            text = str(int(val))
            ax[0].text(j, i, text, ha='center', va='center', color='black', fontsize=14, weight='bold')
    ax[0].set_xticks([])
    ax[0].set_yticks([])
    ax[0].set_title("Tauler Original (4x4)")

    # 2. Dibuixar el Kernel / Filtre (ax[1])
    ax[1].imshow(kernel, cmap='Blues', interpolation='nearest')
    for i in range(kernel.shape[0]):
        for j in range(kernel.shape[1]):
            val = kernel[i, j]
            text = str(int(val)) if val > 0 else ""
            ax[1].text(j, i, text, ha='center', va='center', color='black', fontsize=14, weight='bold')
    ax[1].set_xticks([])
    ax[1].set_yticks([])
    ax[1].set_title("Kernel / Filtre")

    # 3. Espai per al resultat de la convolució (ax[2])
    ax[2].imshow(result, cmap='Greens', interpolation='nearest')
    for i in range(result.shape[0]):
        for j in range(result.shape[1]):
            val = result[i, j]
            text = str(int(val))
            ax[2].text(j, i, text, ha='center', va='center', color='black', fontsize=14, weight='bold')
    ax[2].set_xticks([])
    ax[2].set_yticks([])
    ax[2].set_title("Sortida")

    # 4. Espai per al resultat del max pooling (ax[3])
    if pooled is not None:
        ax[3].imshow(pooled, cmap='Reds', interpolation='nearest')
        for i in range(pooled.shape[0]):
            for j in range(pooled.shape[1]):
                val = pooled[i, j]
                text = str(int(val))
                ax[3].text(j, i, text, ha='center', va='center', color='black', fontsize=14, weight='bold')
        ax[3].set_xticks([])
        ax[3].set_yticks([])
        ax[3].set_title("Max Pooling")

    plt.tight_layout()
    plt.show()

    
def compute_convolution(board, kernel):
    h_board, w_board = board.shape
    h_kernel, w_kernel = kernel.shape
    
    # Calculem la mida de la sortida (sense padding, la matriu es redueix una mica)
    h_out = h_board - h_kernel + 1
    w_out = w_board - w_kernel + 1
    
    output = np.zeros((h_out, w_out))
    
    # Pas a pas: desplaçant el kernel per tot el tauler
    for i in range(h_out):
        for j in range(w_out):
            # 1. Extreure la submatriu (el "pedaç" del tauler de la mida del kernel)
            patch = board[i:i + h_kernel, j:j + w_kernel]
            
            # 2. Multiplicació element a element i suma total
            output[i, j] = np.sum(patch * kernel)
            
    return output


def apply_padding(board, pad_width=1):
    return np.pad(board, pad_width=pad_width, mode='constant', constant_values=0)

def apply_max_pooling(board, pool_size=2):
    h_board, w_board = board.shape
    h_out = h_board // pool_size
    w_out = w_board // pool_size
    
    output = np.zeros((h_out, w_out))
    
    for i in range(h_out):
        for j in range(w_out):
            patch = board[i*pool_size:(i+1)*pool_size, j*pool_size:(j+1)*pool_size]
            output[i, j] = np.max(patch)
    
    return output