<template>
  <svg viewBox="0 0 280 190" class="viz" role="img" aria-label="Demo PCA">
    <line x1="24" y1="166" x2="258" y2="166" class="axis" />
    <line x1="24" y1="166" x2="24" y2="22" class="axis" />

    <g class="pts">
      <circle cx="62" cy="122" r="4" /><circle cx="82" cy="112" r="4" /><circle cx="104" cy="104" r="4" />
      <circle cx="126" cy="92" r="4" /><circle cx="148" cy="84" r="4" /><circle cx="170" cy="76" r="4" />
      <circle cx="192" cy="66" r="4" /><circle cx="214" cy="58" r="4" />
    </g>

    <line x1="50" y1="128" x2="226" y2="52" class="pc1" />
    <line x1="140" y1="146" x2="168" y2="34" class="pc2" />
  </svg>
</template>

<style scoped>
.viz { width: 100%; height: 210px; }
.axis { stroke: rgba(255,255,255,.35); stroke-width: 1.5; }
.pts circle { fill: #a78bfa; }
.pc1 { stroke: #22d3ee; stroke-width: 3; }
.pc2 { stroke: #fbbf24; stroke-width: 2; stroke-dasharray: 6 5; }
</style>
