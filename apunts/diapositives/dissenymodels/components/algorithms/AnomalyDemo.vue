<template>
  <svg viewBox="0 0 280 190" class="viz" role="img" aria-label="Demo detecció anomalies">
    <ellipse cx="136" cy="94" rx="88" ry="52" class="normal-zone" />

    <g class="normal">
      <circle cx="86" cy="88" r="4" /><circle cx="102" cy="74" r="4" /><circle cx="118" cy="102" r="4" />
      <circle cx="136" cy="82" r="4" /><circle cx="152" cy="96" r="4" /><circle cx="168" cy="74" r="4" />
      <circle cx="186" cy="98" r="4" /><circle cx="116" cy="122" r="4" /><circle cx="154" cy="124" r="4" />
    </g>

    <g class="outliers">
      <circle cx="36" cy="42" r="5" />
      <circle cx="238" cy="42" r="5" />
      <circle cx="246" cy="150" r="5" />
    </g>
  </svg>
</template>

<style scoped>
.viz { width: 100%; height: 210px; }
.normal-zone { fill: rgba(34,211,238,.07); stroke: rgba(34,211,238,.45); }
.normal circle { fill: #22d3ee; }
.outliers circle { fill: #ef4444; animation: blink 1.2s ease-in-out infinite; }
@keyframes blink { 0%,100% { opacity: .7; } 50% { opacity: 1; } }
</style>
