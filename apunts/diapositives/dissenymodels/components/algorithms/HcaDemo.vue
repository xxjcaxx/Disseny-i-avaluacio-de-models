<script setup>
const points = [
  { x: 24, y: 58, subgroup: '#22d3ee', group: '#8b5cf6', root: '#60a5fa', subgroupStart: 0.10, subgroupEnd: 0.18, groupStart: 0.42, groupEnd: 0.56, rootStart: 0.66, rootEnd: 0.82 },
  { x: 32, y: 70, subgroup: '#22d3ee', group: '#8b5cf6', root: '#60a5fa', subgroupStart: 0.10, subgroupEnd: 0.18, groupStart: 0.42, groupEnd: 0.56, rootStart: 0.66, rootEnd: 0.82 },
  { x: 40, y: 52, subgroup: '#22d3ee', group: '#8b5cf6', root: '#60a5fa', subgroupStart: 0.10, subgroupEnd: 0.18, groupStart: 0.42, groupEnd: 0.56, rootStart: 0.66, rootEnd: 0.82 },
  { x: 46, y: 76, subgroup: '#22d3ee', group: '#8b5cf6', root: '#60a5fa', subgroupStart: 0.10, subgroupEnd: 0.18, groupStart: 0.42, groupEnd: 0.56, rootStart: 0.66, rootEnd: 0.82 },
  { x: 54, y: 62, subgroup: '#22d3ee', group: '#8b5cf6', root: '#60a5fa', subgroupStart: 0.10, subgroupEnd: 0.18, groupStart: 0.42, groupEnd: 0.56, rootStart: 0.66, rootEnd: 0.82 },
  { x: 62, y: 82, subgroup: '#22d3ee', group: '#8b5cf6', root: '#60a5fa', subgroupStart: 0.10, subgroupEnd: 0.18, groupStart: 0.42, groupEnd: 0.56, rootStart: 0.66, rootEnd: 0.82 },
  { x: 68, y: 56, subgroup: '#22d3ee', group: '#8b5cf6', root: '#60a5fa', subgroupStart: 0.10, subgroupEnd: 0.18, groupStart: 0.42, groupEnd: 0.56, rootStart: 0.66, rootEnd: 0.82 },
  { x: 76, y: 74, subgroup: '#22d3ee', group: '#8b5cf6', root: '#60a5fa', subgroupStart: 0.10, subgroupEnd: 0.18, groupStart: 0.42, groupEnd: 0.56, rootStart: 0.66, rootEnd: 0.82 },
  { x: 30, y: 110, subgroup: '#f472b6', group: '#8b5cf6', root: '#60a5fa', subgroupStart: 0.16, subgroupEnd: 0.24, groupStart: 0.42, groupEnd: 0.56, rootStart: 0.66, rootEnd: 0.82 },
  { x: 38, y: 122, subgroup: '#f472b6', group: '#8b5cf6', root: '#60a5fa', subgroupStart: 0.16, subgroupEnd: 0.24, groupStart: 0.42, groupEnd: 0.56, rootStart: 0.66, rootEnd: 0.82 },
  { x: 46, y: 104, subgroup: '#f472b6', group: '#8b5cf6', root: '#60a5fa', subgroupStart: 0.16, subgroupEnd: 0.24, groupStart: 0.42, groupEnd: 0.56, rootStart: 0.66, rootEnd: 0.82 },
  { x: 54, y: 132, subgroup: '#f472b6', group: '#8b5cf6', root: '#60a5fa', subgroupStart: 0.16, subgroupEnd: 0.24, groupStart: 0.42, groupEnd: 0.56, rootStart: 0.66, rootEnd: 0.82 },
  { x: 62, y: 116, subgroup: '#f472b6', group: '#8b5cf6', root: '#60a5fa', subgroupStart: 0.16, subgroupEnd: 0.24, groupStart: 0.42, groupEnd: 0.56, rootStart: 0.66, rootEnd: 0.82 },
  { x: 72, y: 138, subgroup: '#f472b6', group: '#8b5cf6', root: '#60a5fa', subgroupStart: 0.16, subgroupEnd: 0.24, groupStart: 0.42, groupEnd: 0.56, rootStart: 0.66, rootEnd: 0.82 },
  { x: 80, y: 108, subgroup: '#f472b6', group: '#8b5cf6', root: '#60a5fa', subgroupStart: 0.16, subgroupEnd: 0.24, groupStart: 0.42, groupEnd: 0.56, rootStart: 0.66, rootEnd: 0.82 },
  { x: 88, y: 126, subgroup: '#f472b6', group: '#8b5cf6', root: '#60a5fa', subgroupStart: 0.16, subgroupEnd: 0.24, groupStart: 0.42, groupEnd: 0.56, rootStart: 0.66, rootEnd: 0.82 },
  { x: 86, y: 62, subgroup: '#a3e635', group: '#14b8a6', root: '#60a5fa', subgroupStart: 0.30, subgroupEnd: 0.38, groupStart: 0.50, groupEnd: 0.62, rootStart: 0.66, rootEnd: 0.82 },
  { x: 94, y: 76, subgroup: '#a3e635', group: '#14b8a6', root: '#60a5fa', subgroupStart: 0.30, subgroupEnd: 0.38, groupStart: 0.50, groupEnd: 0.62, rootStart: 0.66, rootEnd: 0.82 },
  { x: 102, y: 58, subgroup: '#a3e635', group: '#14b8a6', root: '#60a5fa', subgroupStart: 0.30, subgroupEnd: 0.38, groupStart: 0.50, groupEnd: 0.62, rootStart: 0.66, rootEnd: 0.82 },
  { x: 108, y: 84, subgroup: '#a3e635', group: '#14b8a6', root: '#60a5fa', subgroupStart: 0.30, subgroupEnd: 0.38, groupStart: 0.50, groupEnd: 0.62, rootStart: 0.66, rootEnd: 0.82 },
  { x: 92, y: 118, subgroup: '#fbbf24', group: '#14b8a6', root: '#60a5fa', subgroupStart: 0.36, subgroupEnd: 0.44, groupStart: 0.50, groupEnd: 0.62, rootStart: 0.66, rootEnd: 0.82 },
  { x: 100, y: 134, subgroup: '#fbbf24', group: '#14b8a6', root: '#60a5fa', subgroupStart: 0.36, subgroupEnd: 0.44, groupStart: 0.50, groupEnd: 0.62, rootStart: 0.66, rootEnd: 0.82 },
  { x: 108, y: 112, subgroup: '#fbbf24', group: '#14b8a6', root: '#60a5fa', subgroupStart: 0.36, subgroupEnd: 0.44, groupStart: 0.50, groupEnd: 0.62, rootStart: 0.66, rootEnd: 0.82 },
  { x: 114, y: 144, subgroup: '#fbbf24', group: '#14b8a6', root: '#60a5fa', subgroupStart: 0.36, subgroupEnd: 0.44, groupStart: 0.50, groupEnd: 0.62, rootStart: 0.66, rootEnd: 0.82 },
]

const leaves = [
  { x: 140, color: '#22d3ee', start: 0.10, end: 0.18 },
  { x: 152, color: '#22d3ee', start: 0.10, end: 0.18 },
  { x: 164, color: '#22d3ee', start: 0.18, end: 0.26 },
  { x: 180, color: '#f472b6', start: 0.16, end: 0.24 },
  { x: 192, color: '#f472b6', start: 0.16, end: 0.24 },
  { x: 204, color: '#f472b6', start: 0.24, end: 0.32 },
  { x: 224, color: '#a3e635', start: 0.30, end: 0.38 },
  { x: 236, color: '#a3e635', start: 0.30, end: 0.38 },
  { x: 252, color: '#fbbf24', start: 0.36, end: 0.44 },
  { x: 264, color: '#fbbf24', start: 0.36, end: 0.44 },
]

const branches = [
  { d: 'M140 156 V136 H152 V156', color: '#22d3ee', start: 0.08, end: 0.18 },
  { d: 'M146 136 V122 H164 V156', color: '#22d3ee', start: 0.18, end: 0.28 },
  { d: 'M180 156 V132 H192 V156', color: '#f472b6', start: 0.14, end: 0.24 },
  { d: 'M186 132 V120 H204 V156', color: '#f472b6', start: 0.24, end: 0.34 },
  { d: 'M224 156 V128 H236 V156', color: '#a3e635', start: 0.28, end: 0.38 },
  { d: 'M252 156 V130 H264 V156', color: '#fbbf24', start: 0.34, end: 0.44 },
  { d: 'M146 122 V96 H186 V120', color: '#8b5cf6', start: 0.42, end: 0.56 },
  { d: 'M230 128 V100 H258 V130', color: '#14b8a6', start: 0.50, end: 0.62 },
  { d: 'M166 96 V70 H244 V100', color: '#60a5fa', start: 0.66, end: 0.82 },
]

function drawValues(length = 220) {
  return `${length};${length};0;0`
}

function drawKeyTimes(start, end) {
  return `0;${start};${end};1`
}

function leafValues(start, end) {
  return `#94a3b8;#94a3b8;currentColor;currentColor`
}

function leafKeyTimes(start, end) {
  return `0;${start};${end};1`
}

function pointValues(point) {
  return `#94a3b8;#94a3b8;${point.subgroup};${point.subgroup};${point.group};${point.group};${point.root};${point.root}`
}

function pointKeyTimes(point) {
  return `0;${point.subgroupStart};${point.subgroupEnd};${point.groupStart};${point.groupEnd};${point.rootStart};${point.rootEnd};1`
}
</script>

<template>
  <svg viewBox="0 0 280 190" class="viz" role="img" aria-label="Demo HCA">
    <g class="cloud">
      <circle v-for="(point, index) in points" :key="index" :cx="point.x" :cy="point.y" r="4.3" class="point">
        <animate
          attributeName="fill"
          dur="6s"
          repeatCount="indefinite"
          :values="pointValues(point)"
          :keyTimes="pointKeyTimes(point)"
        />
      </circle>
    </g>

    <g class="leaves">
      <circle
        v-for="(leaf, index) in leaves"
        :key="index"
        :cx="leaf.x"
        cy="156"
        r="4"
        class="leaf"
        :style="{ color: leaf.color }"
      >
        <animate
          attributeName="fill"
          dur="6s"
          repeatCount="indefinite"
          :values="leafValues(leaf.start, leaf.end)"
          :keyTimes="leafKeyTimes(leaf.start, leaf.end)"
        />
      </circle>
    </g>

    <g class="dendro">
      <path
        v-for="(branch, index) in branches"
        :key="index"
        :d="branch.d"
        :stroke="branch.color"
      >
        <animate
          attributeName="stroke-dashoffset"
          dur="6s"
          repeatCount="indefinite"
          :values="drawValues()"
          :keyTimes="drawKeyTimes(branch.start, branch.end)"
        />
        <animate
          attributeName="opacity"
          dur="6s"
          repeatCount="indefinite"
          :values="`0;0;1;1`"
          :keyTimes="drawKeyTimes(branch.start, branch.end)"
        />
      </path>
    </g>
  </svg>
</template>

<style scoped>
.viz {
  width: 100%;
  height: 210px;
}

.point {
  fill: #94a3b8;
  opacity: 0.95;
}

.leaf {
  fill: #94a3b8;
}

.dendro path {
  fill: none;
  stroke-width: 2.2;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 220;
  stroke-dashoffset: 220;
  opacity: 0;
}
</style>
