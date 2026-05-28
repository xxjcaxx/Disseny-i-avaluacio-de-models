<template>
  <svg viewBox="0 0 280 190" class="viz" role="img" aria-label="Demo kNN">
    <circle cx="140" cy="95" r="40" class="radius" />

    <g class="points-a">
      <circle cx="66" cy="62" r="5" />
      <circle cx="74" cy="92" r="5" />
      <circle cx="82" cy="136" r="5" />
      <circle cx="88" cy="80" r="5" />
      <circle cx="92" cy="58" r="5" />
      <circle cx="96" cy="116" r="5" />
      <circle cx="104" cy="94" r="5" />
      <circle cx="108" cy="132" r="5" />
      <circle cx="114" cy="106" r="5" />
      <circle cx="120" cy="72" r="5" />
      <circle cx="124" cy="146" r="5" />
      <circle cx="128" cy="84" r="5" />
      <circle cx="132" cy="116" r="5" />
    </g>

    <g class="points-b">
      <circle cx="148" cy="52" r="5" />
      <circle cx="152" cy="86" r="5" />
      <circle cx="154" cy="148" r="5" />
      <circle cx="170" cy="74" r="5" />
      <circle cx="172" cy="118" r="5" />
      <circle cx="176" cy="54" r="5" />
      <circle cx="180" cy="142" r="5" />
      <circle cx="184" cy="102" r="5" />
      <circle cx="190" cy="68" r="5" />
      <circle cx="196" cy="124" r="5" />
      <circle cx="204" cy="88" r="5" />
      <circle cx="210" cy="58" r="5" />
      <circle cx="214" cy="112" r="5" />
      <circle cx="158" cy="126" r="5" />
    </g>

    <g class="links">
      <line x1="140" y1="95" x2="120" y2="72" />
      <line x1="140" y1="95" x2="158" y2="126" />
      <line x1="140" y1="95" x2="170" y2="74" />
    </g>

    <circle cx="140" cy="95" r="6" class="query" />
  </svg>
</template>

<style scoped>
.viz {
  width: 100%;
  height: 210px;
}

.radius {
  fill: rgba(59, 130, 246, 0.08);
  stroke: rgba(59, 130, 246, 0.5);
  stroke-dasharray: 6 6;
  animation: radiusPulse 2.2s ease-in-out infinite;
}

.points-a circle { fill: #22d3ee; }
.points-b circle { fill: #f472b6; }

.links line {
  stroke: rgba(255, 255, 255, 0.55);
  stroke-width: 1.5;
  stroke-dasharray: 40;
  stroke-dashoffset: 40;
  animation: linkShow 1.6s ease-out infinite;
}

.query {
  fill: #fbbf24;
  animation: queryPulse 1.4s ease-in-out infinite;
}

@keyframes radiusPulse {
  0%, 100% { r: 32; opacity: 0.6; }
  50% { r: 44; opacity: 1; }
}

@keyframes linkShow {
  0% { stroke-dashoffset: 40; }
  40%, 100% { stroke-dashoffset: 0; }
}

@keyframes queryPulse {
  0%, 100% { r: 5; }
  50% { r: 7; }
}
</style>
