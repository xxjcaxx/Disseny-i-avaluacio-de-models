<script setup>
const clusters = [
  {
    color: '#22d3ee',
    delay: '1.0s',
    zone: 'a',
    points: [
      { x: 62, y: 76, d: '0.4s' },
      { x: 78, y: 94, d: '0.6s' },
      { x: 98, y: 74, d: '0.8s' },
      { x: 88, y: 106, d: '1.0s' },
    ],
  },
  {
    color: '#f472b6',
    delay: '1.7s',
    zone: 'b',
    points: [
      { x: 176, y: 64, d: '1.1s' },
      { x: 190, y: 86, d: '1.3s' },
      { x: 206, y: 70, d: '1.5s' },
      { x: 218, y: 84, d: '1.7s' },
    ],
  },
  {
    color: '#a3e635',
    delay: '2.4s',
    zone: 'c',
    points: [
      { x: 122, y: 136, d: '1.8s' },
      { x: 140, y: 154, d: '2.0s' },
      { x: 160, y: 132, d: '2.2s' },
      { x: 172, y: 146, d: '2.4s' },
    ],
  },
]
</script>

<template>
  <svg viewBox="0 0 280 190" class="viz" role="img" aria-label="Demo clustering">
    <ellipse cx="82" cy="84" rx="42" ry="28" class="zone a" />
    <ellipse cx="194" cy="76" rx="40" ry="26" class="zone b" />
    <ellipse cx="146" cy="142" rx="46" ry="26" class="zone c" />

    <g v-for="cluster in clusters" :key="cluster.zone">
      <circle
        v-for="(point, index) in cluster.points"
        :key="index"
        :cx="point.x"
        :cy="point.y"
        r="4.5"
        fill="#9ca3af"
        opacity="0.95"
      >
        <animate attributeName="fill" :begin="point.d" dur="0.35s" fill="freeze" :values="`#9ca3af;${cluster.color}`" />
      </circle>
    </g>
  </svg>
</template>

<style scoped>
.viz { width: 100%; height: 210px; }
.zone { fill: transparent; stroke-width: 2; stroke-dasharray: 6 5; opacity: 0; }
.a { stroke: rgba(34,211,238,.9); animation: reveal 0.7s ease-out 1.0s forwards; }
.b { stroke: rgba(244,114,182,.9); animation: reveal 0.7s ease-out 1.7s forwards; }
.c { stroke: rgba(163,230,53,.9); animation: reveal 0.7s ease-out 2.4s forwards; }

@keyframes reveal {
  from {
    opacity: 0;
    transform: scale(0.92);
    transform-origin: center;
  }
  to {
    opacity: 0.85;
    transform: scale(1);
    transform-origin: center;
  }
}
</style>
