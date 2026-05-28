<template>
  <svg viewBox="0 0 280 190" class="viz" role="img" aria-label="Demo Kernel PCA">
    <path d="M30 120 C80 38, 200 40, 248 120" class="curve" />

    <g class="pts-a">
      <circle cx="64" cy="92" r="4.5" /><circle cx="94" cy="66" r="4.5" /><circle cx="126" cy="54" r="4.5" />
      <circle cx="158" cy="62" r="4.5" />
    </g>
    <g class="pts-b">
      <circle cx="94" cy="128" r="4.5" /><circle cx="126" cy="136" r="4.5" /><circle cx="158" cy="128" r="4.5" />
      <circle cx="190" cy="108" r="4.5" />
    </g>

    <line x1="64" y1="148" x2="216" y2="44" class="proj" />
  </svg>
</template>

<style scoped>
.viz { width: 100%; height: 210px; }
.curve { fill: none; stroke: rgba(255,255,255,.4); stroke-width: 2; stroke-dasharray: 6 4; }
.pts-a circle { fill: #22d3ee; }
.pts-b circle { fill: #fb7185; }
.proj { stroke: #fbbf24; stroke-width: 3; }
</style>
