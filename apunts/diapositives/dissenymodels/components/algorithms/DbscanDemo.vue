<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const denseRegions = [
  {
    color: '#22d3ee',
    points: [
      { x: 54, y: 70 }, { x: 60, y: 86 }, { x: 66, y: 78 }, { x: 70, y: 98 },
      { x: 76, y: 64 }, { x: 82, y: 92 }, { x: 88, y: 72 }, { x: 92, y: 104 },
      { x: 98, y: 82 }, { x: 104, y: 112 }, { x: 112, y: 88 }, { x: 118, y: 100 },
      { x: 64, y: 116 }, { x: 108, y: 66 }, { x: 122, y: 78 }, { x: 126, y: 108 },
    ],
  },
  {
    color: '#f472b6',
    points: [
      { x: 150, y: 66 }, { x: 156, y: 82 }, { x: 164, y: 72 }, { x: 170, y: 94 },
      { x: 176, y: 60 }, { x: 182, y: 86 }, { x: 188, y: 74 }, { x: 194, y: 98 },
      { x: 202, y: 80 }, { x: 208, y: 104 }, { x: 214, y: 88 }, { x: 220, y: 72 },
      { x: 160, y: 116 }, { x: 170, y: 120 }, { x: 204, y: 118 }, { x: 226, y: 92 },
    ],
  },
  {
    color: '#a3e635',
    points: [
      { x: 116, y: 130 }, { x: 124, y: 142 }, { x: 130, y: 124 }, { x: 134, y: 152 },
      { x: 140, y: 136 }, { x: 146, y: 148 }, { x: 154, y: 126 }, { x: 160, y: 142 },
      { x: 168, y: 132 }, { x: 172, y: 154 }, { x: 180, y: 140 }, { x: 156, y: 160 },
      { x: 128, y: 156 }, { x: 184, y: 128 }, { x: 142, y: 118 }, { x: 170, y: 118 },
    ],
  },
]

const noisePoints = [
  { x: 20, y: 28 },
  { x: 28, y: 48 },
  { x: 42, y: 20 },
  { x: 258, y: 26 },
  { x: 244, y: 42 },
  { x: 262, y: 58 },
  { x: 22, y: 164 },
  { x: 40, y: 176 },
  { x: 246, y: 166 },
  { x: 260, y: 150 },
  { x: 138, y: 20 },
  { x: 196, y: 170 },
]

const neutralColor = '#94a3b8'
const spreadDuration = 2200
const restartPause = 900

const simulation = ref([])
const elapsed = ref(0)
let rafId = 0
let cycleStart = 0

function randomIndex(length) {
  return Math.floor(Math.random() * length)
}

function distanceSquared(a, b) {
  const dx = a.x - b.x
  const dy = a.y - b.y
  return dx * dx + dy * dy
}

function initializeSimulation() {
  simulation.value = denseRegions.map((region) => {
    const seedIndex = randomIndex(region.points.length)
    const infected = [seedIndex]
    const remaining = new Set(region.points.map((_, index) => index).filter(index => index !== seedIndex))
    const infectionSteps = []

    while (remaining.size > 0) {
      let bestEdge = null

      infected.forEach((sourceIndex) => {
        remaining.forEach((targetIndex) => {
          const score = distanceSquared(region.points[sourceIndex], region.points[targetIndex])

          if (!bestEdge || score < bestEdge.score) {
            bestEdge = { sourceIndex, targetIndex, score }
          }
        })
      })

      infectionSteps.push(bestEdge)
      infected.push(bestEdge.targetIndex)
      remaining.delete(bestEdge.targetIndex)
    }

    return {
      ...region,
      seedIndex,
      infectionSteps,
    }
  })
}

const regionProgress = computed(() => {
  return simulation.value.map((region) => {
    const totalSteps = Math.max(region.infectionSteps.length, 1)
    const stepDuration = spreadDuration / totalSteps
    const clampedElapsed = Math.min(elapsed.value, spreadDuration)
    const completedSteps = Math.min(Math.floor(clampedElapsed / stepDuration), totalSteps)
    const activeStepIndex = completedSteps >= totalSteps ? -1 : completedSteps
    const stepElapsed = activeStepIndex === -1 ? 0 : clampedElapsed - activeStepIndex * stepDuration
    const activeStepProgress = activeStepIndex === -1 ? 1 : Math.min(stepElapsed / stepDuration, 1)

    return {
      completedSteps,
      activeStepIndex,
      activeStepProgress,
    }
  })
})

function pointFill(regionIndex, pointIndex) {
  const region = simulation.value[regionIndex]
  if (!region) return neutralColor

  if (pointIndex === region.seedIndex) return region.color

  const progress = regionProgress.value[regionIndex]
  if (!progress) return neutralColor

  const infectedTargets = region.infectionSteps
    .slice(0, progress.completedSteps)
    .map(step => step.targetIndex)

  return infectedTargets.includes(pointIndex) ? region.color : neutralColor
}

function activeSpread(regionIndex) {
  const region = simulation.value[regionIndex]
  const progress = regionProgress.value[regionIndex]

  if (!region || !progress || progress.activeStepIndex === -1) {
    return null
  }

  const step = region.infectionSteps[progress.activeStepIndex]
  if (!step) return null

  const source = region.points[step.sourceIndex]
  const target = region.points[step.targetIndex]
  const radius = Math.sqrt(distanceSquared(source, target)) * progress.activeStepProgress
  const opacity = 0.3 * (1 - progress.activeStepProgress)

  return {
    x: source.x,
    y: source.y,
    radius,
    opacity,
  }
}

function tick(timestamp) {
  if (!cycleStart) {
    cycleStart = timestamp
  }

  const cycleElapsed = timestamp - cycleStart

  if (cycleElapsed >= spreadDuration + restartPause) {
    initializeSimulation()
    cycleStart = timestamp
    elapsed.value = 0
  } else {
    elapsed.value = cycleElapsed
  }

  rafId = requestAnimationFrame(tick)
}

onMounted(() => {
  initializeSimulation()
  rafId = requestAnimationFrame(tick)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(rafId)
})
</script>

<template>
  <svg viewBox="0 0 280 190" class="viz" role="img" aria-label="Demo DBSCAN">
    <g v-for="(region, regionIndex) in simulation" :key="`${region.color}-spread`">
      <circle
        v-if="activeSpread(regionIndex)"
        :cx="activeSpread(regionIndex).x"
        :cy="activeSpread(regionIndex).y"
        :r="activeSpread(regionIndex).radius"
        :fill="region.color"
        :opacity="activeSpread(regionIndex).opacity"
        class="spread"
      />
    </g>

    <g v-for="(region, regionIndex) in simulation" :key="region.color">
      <circle
        v-for="(point, pointIndex) in region.points"
        :key="pointIndex"
        :cx="point.x"
        :cy="point.y"
        r="4.4"
        :fill="pointFill(regionIndex, pointIndex)"
        class="point"
      />
    </g>

    <g>
      <circle
        v-for="(point, index) in noisePoints"
        :key="`noise-${index}`"
        :cx="point.x"
        :cy="point.y"
        r="4.2"
        :fill="neutralColor"
        class="point"
      />
    </g>
  </svg>
</template>

<style scoped>
.viz {
  width: 100%;
  height: 210px;
}

.point {
  opacity: 0.96;
  transition: fill 0.16s linear;
}

.spread {
  pointer-events: none;
}
</style>
