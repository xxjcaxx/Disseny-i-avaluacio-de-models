<script setup>
import { computed, ref, watchEffect } from 'vue'
import ClassificationDemo from './algorithms/ClassificationDemo.vue'
import RegressionDemo from './algorithms/RegressionDemo.vue'
import TreeForestDemo from './algorithms/TreeForestDemo.vue'
import KnnDemo from './algorithms/KnnDemo.vue'
import SvmDemo from './algorithms/SvmDemo.vue'
import NeuralNetDemo from './algorithms/NeuralNetDemo.vue'
import ClusteringDemo from './algorithms/ClusteringDemo.vue'
import KMeansDemo from './algorithms/KMeansDemo.vue'
import DbscanDemo from './algorithms/DbscanDemo.vue'
import HcaDemo from './algorithms/HcaDemo.vue'
import AnomalyDemo from './algorithms/AnomalyDemo.vue'
import OneClassSvmDemo from './algorithms/OneClassSvmDemo.vue'
import IsolationForestDemo from './algorithms/IsolationForestDemo.vue'
import PcaDemo from './algorithms/PcaDemo.vue'
import KernelPcaDemo from './algorithms/KernelPcaDemo.vue'
import LleDemo from './algorithms/LleDemo.vue'

const props = defineProps({
  category: {
    type: String,
    default: 'supervised',
  },
})

const supervisedAlgorithms = [
  { key: 'classification', label: 'Classificació', hint: 'Agrupa mostres en classes' },
  { key: 'regression', label: 'Regressió', hint: 'Ajusta una línia als punts' },
  { key: 'tree', label: 'Arbres / Random Forest', hint: 'Divideix en regles i vota' },
  { key: 'knn', label: 'kNN', hint: 'Decideix pels veïns més propers' },
  { key: 'svm', label: 'SVM', hint: 'Separa classes amb marge màxim' },
  { key: 'nn', label: 'Xarxa neuronal', hint: 'Propagació de senyals entre capes' },
]

const unsupervisedAlgorithms = [
  { key: 'clustering', label: 'Clustering', hint: 'Agrupa dades per similitud' },
  { key: 'kmeans', label: 'K-means', hint: 'Actualitza centroides iterativament' },
  { key: 'dbscan', label: 'DBSCAN', hint: 'Troba clústers per densitat local' },
  { key: 'hca', label: 'HCA', hint: 'Construeix un arbre jeràrquic de fusions' },
  { key: 'anomaly', label: 'Detecció anomalies', hint: 'Marca punts atípics respecte al patró' },
  { key: 'oneclasssvm', label: 'One-class SVM', hint: 'Aprén la frontera de la classe normal' },
  { key: 'iforest', label: 'Isolation Forest', hint: 'Aïlla anomalies amb particions aleatòries' },
  { key: 'pca', label: 'PCA', hint: 'Projecta en eixos principals de variància' },
  { key: 'kernelpca', label: 'Kernel PCA', hint: 'Separació no lineal en espai projectat' },
  { key: 'lle', label: 'LLE', hint: 'Manté veïnat local en menor dimensionalitat' },
]

const selected = ref('')

const algorithms = computed(() =>
  props.category === 'unsupervised' ? unsupervisedAlgorithms : supervisedAlgorithms,
)

const componentMap = {
  classification: ClassificationDemo,
  regression: RegressionDemo,
  tree: TreeForestDemo,
  knn: KnnDemo,
  svm: SvmDemo,
  nn: NeuralNetDemo,
  clustering: ClusteringDemo,
  kmeans: KMeansDemo,
  dbscan: DbscanDemo,
  hca: HcaDemo,
  anomaly: AnomalyDemo,
  oneclasssvm: OneClassSvmDemo,
  iforest: IsolationForestDemo,
  pca: PcaDemo,
  kernelpca: KernelPcaDemo,
  lle: LleDemo,
}

watchEffect(() => {
  const available = algorithms.value
  if (!available.length) {
    selected.value = ''
    return
  }

  if (!available.some((item) => item.key === selected.value))
    selected.value = available[0].key
})

const activeComponent = computed(() => componentMap[selected.value])
const activeHint = computed(() => algorithms.value.find((item) => item.key === selected.value)?.hint)
</script>

<template>
  <div class="playground">
    <div class="controls">
      <button
        v-for="algorithm in algorithms"
        :key="algorithm.key"
        class="chip"
        :class="{ active: selected === algorithm.key }"
        @click="selected = algorithm.key"
      >
        {{ algorithm.label }}
      </button>
    </div>

    <p class="hint">{{ activeHint }}</p>

    <div class="viz-card">
      <component :is="activeComponent" />
    </div>
  </div>
</template>

<style scoped>
.playground {
  margin-top: 1rem;
  display: grid;
  gap: 0.75rem;
}

.controls {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.chip {
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.06);
  color: inherit;
  border-radius: 999px;
  padding: 0.3rem 0.75rem;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.chip:hover {
  border-color: rgba(255, 255, 255, 0.5);
}

.chip.active {
  background: rgba(124, 77, 255, 0.35);
  border-color: rgba(167, 139, 250, 0.9);
}

.hint {
  margin: 0;
  opacity: 0.85;
  font-size: 0.85rem;
}

.viz-card {
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 0.75rem;
  padding: 0.6rem;
  background: rgba(0, 0, 0, 0.2);
}
</style>
