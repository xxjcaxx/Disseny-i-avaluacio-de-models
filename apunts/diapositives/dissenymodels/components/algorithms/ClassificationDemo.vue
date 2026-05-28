<script setup>
const points = [
  { x: 66, y: 76, d: '1.0s' },
  { x: 86, y: 108, d: '1.2s' },
  { x: 106, y: 86, d: '1.4s' },
  { x: 174, y: 66, d: '1.6s' },
  { x: 194, y: 96, d: '1.8s' },
  { x: 214, y: 78, d: '2.0s' },
  { x: 124, y: 138, d: '2.2s' },
  { x: 150, y: 154, d: '2.4s' },
  { x: 174, y: 136, d: '2.6s' },
]

const boundary = {
  x1: 60,
  y1: 44,
  x2: 220,
  y2: 156,
}

const topColor = '#22d3ee'
const bottomColor = '#f472b6'

function getBoundaryY(x) {
  const t = (x - boundary.x1) / (boundary.x2 - boundary.x1)
  return boundary.y1 + t * (boundary.y2 - boundary.y1)
}

function getPointColor(point) {
  return point.y < getBoundaryY(point.x) ? topColor : bottomColor
}
</script>

<template>
  <svg viewBox="0 0 280 190" class="viz" role="img" aria-label="Demo de classificació">
    <line x1="28" y1="170" x2="262" y2="170" class="axis" />
    <line x1="28" y1="170" x2="28" y2="22" class="axis" />
    <text x="256" y="183" class="axis-label">x</text>
    <text x="16" y="28" class="axis-label">y</text>

    <line
      :x1="boundary.x1"
      :y1="boundary.y1"
      :x2="boundary.x2"
      :y2="boundary.y2"
      class="boundary"
    />

    <circle
      v-for="(point, index) in points"
      :key="index"
      :cx="point.x"
      :cy="point.y"
      r="4.5"
      fill="#9ca3af"
      opacity="0.95"
    >
      <animate attributeName="fill" :begin="point.d" dur="0.35s" fill="freeze" :values="`#9ca3af;${getPointColor(point)}`" />
    </circle>
  </svg>
</template>

<style scoped>
.viz {
  width: 100%;
  height: 210px;
}

.axis {
  stroke: rgba(255, 255, 255, 0.4);
  stroke-width: 1.6;
}

.axis-label {
  fill: rgba(255, 255, 255, 0.7);
  font-size: 10px;
}

.boundary {
  stroke: rgba(255, 255, 255, 0.9);
  stroke-width: 2.4;
  stroke-dasharray: 8 6;
  opacity: 0;
  animation: reveal-boundary 0.7s ease-out 0.9s forwards;
}

@keyframes reveal-boundary {
  from {
    opacity: 0;
    stroke-dashoffset: 24;
  }
  to {
    opacity: 1;
    stroke-dashoffset: 0;
  }
}
</style>
