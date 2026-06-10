<template>
  <button class="underline" @click="open = true">Més</button>

  <Teleport to="body">
    <div
      v-if="open"
      class="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div class="absolute inset-0 bg-black/90" @click="open = false"></div>

      <div class="relative w-[92vw] h-[88vh] bg-main rounded-md shadow p-6 overflow-auto text-left leading-relaxed">
        <h3 class="text-2xl font-bold">Ampliació: valor esperat en variables contínues</h3>

        <p class="mt-4">
          El valor esperat es pot interpretar com el centre de gravetat de la distribució.
          En lloc de sumar probabilitats puntuals (com en el cas discret), en variables contínues
          fem una integral sobre tots els valors possibles.
        </p>

        <p class="mt-4">
          Si X té funció de densitat f_X(x), aleshores:
        </p>

        <p class="mt-2 font-mono text-base">
          E[X] = ∫(-∞, ∞) x f_X(x) dx
        </p>

        <p class="mt-4">
          Intuïtivament, cada valor x contribueix al resultat segons la seua importància en la densitat.
          Les zones on f_X(x) és més gran tenen més pes en el promig final.
        </p>

        <p class="mt-4">
          Exemple: si X segueix una uniforme U(0,1), llavors f_X(x)=1 en [0,1] i:
        </p>

        <p class="mt-2 font-mono text-base">
          E[X] = ∫(0, 1) x dx = 1/2
        </p>

        <div class="mt-6">
          <button class="underline" @click="open = false">Tancar</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue'

const open = ref(false)
</script>