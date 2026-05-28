<template>
  <svg viewBox="0 0 280 190" class="viz" role="img" aria-label="Demo SVM">
    <g class="a-points">
      <circle cx="76" cy="58" r="5" />
      <circle cx="94" cy="90" r="5" class="support" />
      <circle cx="86" cy="126" r="5" />
    </g>

    <g class="b-points">
      <circle cx="198" cy="62" r="5" />
      <circle cx="178" cy="94" r="5" class="support" />
      <circle cx="194" cy="128" r="5" />
    </g>

    <line x1="46" y1="150" x2="232" y2="42" class="margin" />
    <line x1="56" y1="164" x2="242" y2="56" class="hyperplane" />
    <line x1="66" y1="178" x2="252" y2="70" class="margin" />
  </svg>
</template>

<style scoped>
.viz {
  width: 100%;
  height: 210px;
}

.a-points circle { fill: #22d3ee; }
.b-points circle { fill: #fb7185; }

.hyperplane {
  stroke: #facc15;
  stroke-width: 3;
  animation: sweep 3s ease-in-out infinite;
}

.margin {
  stroke: rgba(250, 204, 21, 0.55);
  stroke-width: 1.5;
  stroke-dasharray: 7 6;
  animation: sweep 3s ease-in-out infinite;
}

.support {
  stroke: white;
  stroke-width: 2;
  animation: pop 1.6s ease-in-out infinite;
}

@keyframes sweep {
  0%, 100% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
}

@keyframes pop {
  0%, 100% { r: 5; }
  50% { r: 7; }
}
</style>
