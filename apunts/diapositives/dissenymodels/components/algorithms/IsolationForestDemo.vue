<template>
  <svg viewBox="0 0 280 190" class="viz" role="img" aria-label="Demo isolation forest">
    <g class="pts">
      <circle cx="92" cy="82" r="4" /><circle cx="110" cy="70" r="4" /><circle cx="126" cy="94" r="4" />
      <circle cx="144" cy="78" r="4" /><circle cx="162" cy="98" r="4" /><circle cx="176" cy="84" r="4" />
      <circle cx="130" cy="118" r="4" /><circle cx="160" cy="118" r="4" />
      <circle cx="232" cy="38" r="5" class="anomaly" />
    </g>

    <g class="splits">
      <line x1="80" y1="28" x2="80" y2="160" class="s1" />
      <line x1="184" y1="28" x2="184" y2="160" class="s2" />
      <line x1="80" y1="64" x2="184" y2="64" class="s3" />
      <line x1="184" y1="52" x2="252" y2="52" class="s4" />
    </g>
  </svg>
</template>

<style scoped>
.viz { width: 100%; height: 210px; }
.pts circle { fill: #93c5fd; }
.anomaly { fill: #ef4444; }
.splits line {
  stroke: rgba(255,255,255,.45);
  stroke-width: 1.5;
  stroke-dasharray: 160;
  stroke-dashoffset: 160;
  animation: reveal 0.7s ease-out forwards;
}

.splits .s1 { animation-delay: 0.2s; }
.splits .s2 { animation-delay: 0.8s; }
.splits .s3 { animation-delay: 1.4s; }
.splits .s4 { animation-delay: 2s; }

@keyframes reveal {
  from { stroke-dashoffset: 160; }
  to { stroke-dashoffset: 0; }
}
</style>
