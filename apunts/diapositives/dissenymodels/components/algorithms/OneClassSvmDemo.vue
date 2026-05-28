<template>
  <svg viewBox="0 0 280 190" class="viz" role="img" aria-label="Demo one-class SVM">
    <path d="M64 100 C70 52, 208 44, 220 96 C226 144, 86 156, 64 100" class="boundary" />

    <g class="inliers">
      <circle cx="92" cy="88" r="4" /><circle cx="112" cy="72" r="4" /><circle cx="128" cy="100" r="4" />
      <circle cx="148" cy="78" r="4" /><circle cx="166" cy="100" r="4" /><circle cx="182" cy="84" r="4" />
      <circle cx="122" cy="122" r="4" /><circle cx="154" cy="122" r="4" />
    </g>

    <g class="outside">
      <circle cx="38" cy="52" r="5" /><circle cx="236" cy="50" r="5" /><circle cx="240" cy="146" r="5" />
    </g>
  </svg>
</template>

<style scoped>
.viz { width: 100%; height: 210px; }
.boundary { fill: rgba(59,130,246,.08); stroke: #60a5fa; stroke-width: 2; stroke-dasharray: 6 5; }
.inliers circle { fill: #22d3ee; }
.outside circle { fill: #fb7185; }
</style>
