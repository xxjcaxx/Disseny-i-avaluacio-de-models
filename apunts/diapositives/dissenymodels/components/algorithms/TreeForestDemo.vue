<template>
  <svg viewBox="0 0 280 190" class="viz" role="img" aria-label="Demo d'arbres i random forest">
    <text x="140" y="13" class="caption" text-anchor="middle"></text>
    <circle cx="140" cy="24" r="7" class="input-node" />

    <line x1="140" y1="24" x2="50" y2="44" class="feed" />
    <line x1="140" y1="24" x2="140" y2="44" class="feed" />
    <line x1="140" y1="24" x2="230" y2="44" class="feed" />

    <g class="tree-base">
      <line x1="50" y1="44" x2="34" y2="76" />
      <line x1="50" y1="44" x2="66" y2="76" />
      <line x1="34" y1="76" x2="24" y2="114" />
      <line x1="34" y1="76" x2="44" y2="114" />
      <line x1="66" y1="76" x2="56" y2="114" />
      <line x1="66" y1="76" x2="76" y2="114" />

      <line x1="140" y1="44" x2="124" y2="76" />
      <line x1="140" y1="44" x2="156" y2="76" />
      <line x1="124" y1="76" x2="114" y2="114" />
      <line x1="124" y1="76" x2="134" y2="114" />
      <line x1="156" y1="76" x2="146" y2="114" />
      <line x1="156" y1="76" x2="166" y2="114" />

      <line x1="230" y1="44" x2="214" y2="76" />
      <line x1="230" y1="44" x2="246" y2="76" />
      <line x1="214" y1="76" x2="204" y2="114" />
      <line x1="214" y1="76" x2="224" y2="114" />
      <line x1="246" y1="76" x2="236" y2="114" />
      <line x1="246" y1="76" x2="256" y2="114" />
    </g>

    <g class="path p1">
      <line x1="140" y1="24" x2="50" y2="44" class="step1" />
      <line x1="50" y1="44" x2="34" y2="76" class="step2" />
      <line x1="34" y1="76" x2="24" y2="114" class="step3" />
      <circle cx="50" cy="44" r="6" class="n1" />
      <circle cx="34" cy="76" r="5.5" class="n2" />
      <circle cx="24" cy="114" r="5" class="n3" />
    </g>

    <g class="path p2">
      <line x1="140" y1="24" x2="140" y2="44" class="step1" />
      <line x1="140" y1="44" x2="156" y2="76" class="step2" />
      <line x1="156" y1="76" x2="146" y2="114" class="step3" />
      <circle cx="140" cy="44" r="6" class="n1" />
      <circle cx="156" cy="76" r="5.5" class="n2" />
      <circle cx="146" cy="114" r="5" class="n3" />
    </g>

    <g class="path p3">
      <line x1="140" y1="24" x2="230" y2="44" class="step1" />
      <line x1="230" y1="44" x2="214" y2="76" class="step2" />
      <line x1="214" y1="76" x2="224" y2="114" class="step3" />
      <circle cx="230" cy="44" r="6" class="n1" />
      <circle cx="214" cy="76" r="5.5" class="n2" />
      <circle cx="224" cy="114" r="5" class="n3" />
    </g>

    <g class="nodes">
      <circle cx="50" cy="44" r="6" />
      <circle cx="34" cy="76" r="5.5" />
      <circle cx="66" cy="76" r="5.5" />
      <circle cx="24" cy="114" r="5" />
      <circle cx="44" cy="114" r="5" />
      <circle cx="56" cy="114" r="5" />
      <circle cx="76" cy="114" r="5" />

      <circle cx="140" cy="44" r="6" />
      <circle cx="124" cy="76" r="5.5" />
      <circle cx="156" cy="76" r="5.5" />
      <circle cx="114" cy="114" r="5" />
      <circle cx="134" cy="114" r="5" />
      <circle cx="146" cy="114" r="5" />
      <circle cx="166" cy="114" r="5" />

      <circle cx="230" cy="44" r="6" />
      <circle cx="214" cy="76" r="5.5" />
      <circle cx="246" cy="76" r="5.5" />
      <circle cx="204" cy="114" r="5" />
      <circle cx="224" cy="114" r="5" />
      <circle cx="236" cy="114" r="5" />
      <circle cx="256" cy="114" r="5" />
    </g>
  </svg>
</template>

<style scoped>
.viz {
  width: 100%;
  height: 210px;
}

.caption {
  fill: rgba(255, 255, 255, 0.85);
  font-size: 11px;
}

.input-node {
  fill: #f8fafc;
  stroke: #94a3b8;
  stroke-width: 1.5;
}

.feed {
  stroke: rgba(148, 163, 184, 0.55);
  stroke-width: 1.8;
}

.tree-base line {
  stroke: rgba(147, 197, 253, 0.35);
  stroke-width: 1.8;
}

.nodes circle {
  fill: rgba(96, 165, 250, 0.4);
}

.path line {
  stroke-width: 2.8;
  stroke-dasharray: 120;
  stroke-dashoffset: 120;
}

.path circle {
  fill: rgba(148, 163, 184, 0.5);
}

.p1 line,
.p1 circle { stroke: #22d3ee; }

.p2 line,
.p2 circle { stroke: #fbbf24; }

.p3 line,
.p3 circle { stroke: #fb7185; }

.step1 { animation: draw 3.2s ease-out infinite; }
.step2 { animation: draw 3.2s ease-out 0.4s infinite; }
.step3 { animation: draw 3.2s ease-out 0.8s infinite; }

.n1 { animation: glow 3.2s ease-out 0.15s infinite; }
.n2 { animation: glow 3.2s ease-out 0.55s infinite; }
.n3 { animation: glow 3.2s ease-out 0.95s infinite; }

@keyframes draw {
  0% {
    stroke-dashoffset: 120;
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  45%,
  100% {
    stroke-dashoffset: 0;
    opacity: 1;
  }
}

@keyframes glow {
  0%,
  12% {
    fill: rgba(148, 163, 184, 0.5);
    opacity: 0.7;
  }
  24%,
  75% {
    opacity: 1;
  }
  24% {
    fill: currentColor;
  }
  100% {
    fill: currentColor;
    opacity: 1;
  }
}

.p1 { color: #22d3ee; }
.p2 { color: #fbbf24; }
.p3 { color: #fb7185; }
</style>
