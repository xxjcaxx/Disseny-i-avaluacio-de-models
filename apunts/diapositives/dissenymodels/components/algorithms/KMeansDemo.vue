<script setup>
const clusters = [
  {
    color: '#22d3ee',
    center: { x: 84, y: 84 },
    start: { x: 58, y: 56 },
    moveDelay: '1.2s',
    settleDelay: '2.9s',
    points: [
      { x: 52, y: 72, d: '0.4s' },
      { x: 60, y: 84, d: '0.5s' },
      { x: 68, y: 66, d: '0.6s' },
      { x: 72, y: 96, d: '0.7s' },
      { x: 80, y: 74, d: '0.8s' },
      { x: 84, y: 88, d: '0.9s' },
      { x: 92, y: 64, d: '1.0s' },
      { x: 96, y: 92, d: '1.1s' },
      { x: 104, y: 78, d: '1.2s' },
      { x: 110, y: 100, d: '1.3s' },
      { x: 76, y: 112, d: '1.4s' },
      { x: 88, y: 120, d: '1.5s' },
    ],
  },
  {
    color: '#f472b6',
    center: { x: 198, y: 78 },
    start: { x: 228, y: 58 },
    moveDelay: '1.9s',
    settleDelay: '3.6s',
    points: [
      { x: 168, y: 66, d: '1.0s' },
      { x: 176, y: 54, d: '1.1s' },
      { x: 180, y: 78, d: '1.2s' },
      { x: 184, y: 92, d: '1.3s' },
      { x: 192, y: 62, d: '1.4s' },
      { x: 198, y: 84, d: '1.5s' },
      { x: 206, y: 70, d: '1.6s' },
      { x: 210, y: 96, d: '1.7s' },
      { x: 218, y: 76, d: '1.8s' },
      { x: 222, y: 88, d: '1.9s' },
      { x: 186, y: 110, d: '2.0s' },
      { x: 214, y: 112, d: '2.1s' },
    ],
  },
  {
    color: '#a3e635',
    center: { x: 146, y: 144 },
    start: { x: 142, y: 92 },
    moveDelay: '2.6s',
    settleDelay: '4.3s',
    points: [
      { x: 116, y: 130, d: '1.6s' },
      { x: 124, y: 142, d: '1.7s' },
      { x: 130, y: 124, d: '1.8s' },
      { x: 134, y: 152, d: '1.9s' },
      { x: 140, y: 136, d: '2.0s' },
      { x: 146, y: 148, d: '2.1s' },
      { x: 154, y: 126, d: '2.2s' },
      { x: 160, y: 142, d: '2.3s' },
      { x: 168, y: 132, d: '2.4s' },
      { x: 172, y: 154, d: '2.5s' },
      { x: 180, y: 140, d: '2.6s' },
      { x: 156, y: 160, d: '2.7s' },
    ],
  },
]

function parseSeconds(value) {
  return Number.parseFloat(value.replace('s', ''))
}

function formatSeconds(value) {
  return `${value.toFixed(1)}s`
}

function distanceSquared(a, b) {
  const dx = a.x - b.x
  const dy = a.y - b.y
  return dx * dx + dy * dy
}

function getNearestCluster(point, mode = 'center') {
  return clusters.reduce((best, cluster) => {
    const target = mode === 'start' ? cluster.start : cluster.center
    const score = distanceSquared(point, target)

    if (!best || score < best.score) {
      return { color: cluster.color, score }
    }

    return best
  }, null)
}

const preparedClusters = clusters.map((cluster) => {
  const settledAt = formatSeconds(parseSeconds(cluster.settleDelay))

  return {
    ...cluster,
    points: cluster.points.map((point) => ({
      ...point,
      initialColor: getNearestCluster(point, 'start').color,
      finalColor: getNearestCluster(point, 'center').color,
      settleAt: settledAt,
    })),
  }
})
</script>

<template>
  <svg viewBox="0 0 280 190" class="viz" role="img" aria-label="Demo k-means">
    <g v-for="cluster in preparedClusters" :key="cluster.color">
      <circle
        v-for="(point, index) in cluster.points"
        :key="index"
        :cx="point.x"
        :cy="point.y"
        r="4"
        fill="#94a3b8"
        opacity="0.95"
      >
        <animate attributeName="fill" :begin="point.d" dur="0.35s" fill="freeze" :values="`#94a3b8;${point.initialColor}`" />
        <animate attributeName="fill" :begin="point.settleAt" dur="0.55s" fill="freeze" :values="`${point.initialColor};${point.finalColor}`" />
      </circle>
    </g>

    <g v-for="cluster in preparedClusters" :key="`${cluster.color}-centroid`" class="centroids">
      <g :transform="`translate(${cluster.start.x} ${cluster.start.y})`">
        <animateTransform
          attributeName="transform"
          type="translate"
          :begin="cluster.moveDelay"
          dur="1.5s"
          fill="freeze"
          :values="`${cluster.start.x} ${cluster.start.y};${cluster.center.x} ${cluster.center.y}`"
        />
        <circle cx="0" cy="0" r="11" class="centroid-ring" :stroke="cluster.color" />
        <line x1="-5" y1="-5" x2="5" y2="5" class="centroid-cross" :stroke="cluster.color" />
        <line x1="5" y1="-5" x2="-5" y2="5" class="centroid-cross" :stroke="cluster.color" />
      </g>
    </g>
  </svg>
</template>

<style scoped>
.viz {
  width: 100%;
  height: 210px;
}

.centroid-ring {
  fill: rgba(255, 255, 255, 0.06);
  stroke-width: 1.5;
}

.centroid-cross {
  stroke-width: 2.2;
  stroke-linecap: round;
}
</style>
