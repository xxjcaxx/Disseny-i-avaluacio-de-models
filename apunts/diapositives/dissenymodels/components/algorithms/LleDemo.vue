<template>
  <svg viewBox="0 0 280 190" class="viz" role="img" aria-label="Demo LLE">
    <path d="M30 116 C72 72, 110 142, 146 90 C176 52, 214 122, 250 84" class="manifold" />

    <g class="orig">
      <circle cx="50" cy="104" r="4" /><circle cx="82" cy="94" r="4" /><circle cx="114" cy="118" r="4" />
      <circle cx="148" cy="92" r="4" /><circle cx="182" cy="76" r="4" /><circle cx="214" cy="102" r="4" />
    </g>

    <g class="embed">
      <circle cx="64" cy="164" r="3.8" /><circle cx="96" cy="164" r="3.8" /><circle cx="126" cy="164" r="3.8" />
      <circle cx="156" cy="164" r="3.8" /><circle cx="186" cy="164" r="3.8" /><circle cx="216" cy="164" r="3.8" />
    </g>

    <g class="links">
      <line x1="50" y1="104" x2="64" y2="164" />
      <line x1="82" y1="94" x2="96" y2="164" />
      <line x1="114" y1="118" x2="126" y2="164" />
      <line x1="148" y1="92" x2="156" y2="164" />
      <line x1="182" y1="76" x2="186" y2="164" />
      <line x1="214" y1="102" x2="216" y2="164" />
    </g>
  </svg>
</template>

<style scoped>
.viz { width: 100%; height: 210px; }
.manifold { fill: none; stroke: rgba(255,255,255,.45); stroke-width: 2; }
.orig circle { fill: #22d3ee; }
.embed circle { fill: #a3e635; }
.links line { stroke: rgba(251,191,36,.45); stroke-width: 1.2; }
</style>
