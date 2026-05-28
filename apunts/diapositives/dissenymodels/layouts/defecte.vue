<template>
  <div class="layout-default">
    <!-- Header minimalista -->
    <header class="app-header">
      <img class="logo" src="/images/logosimarroblanco.png" alt="IES" />
      <div class="header-text">
        <span class="titulo">Disseny i avaluació de models
        basats en aprenentatge automàtic</span>
      </div>
    </header>

    <!-- Contenido principal -->
    <main class="slide-content">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Composable para detectar tema oscuro si lo necesitas
const isDark = ref(false)
</script>

<style>
.layout-default {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: inherit;
}

.app-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 16px;
  background: rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  flex-shrink: 0;
  backdrop-filter: blur(4px);
}

.logo {
  width: 200px;
  object-fit: contain;
  flex-shrink: 0;
  opacity: 0.9;
  transition: opacity 0.3s ease;
}

.logo:hover {
  opacity: 1;
}

.header-text {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.titulo {
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
  color: rgba(255, 255, 255, 0.8);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.subtitle {
  font-size: 10px;
  color: rgba(0, 0, 0, 0.6);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.slide-content {
  flex: 1;
  overflow: auto;
  padding: 20px 40px;
}

/* Estilos explícitos para headings */
.layout-default h1 {
  font-size: 3.5em !important;
  font-weight: 600 !important;
  line-height: 1.2 !important;
  margin: 0 0 0.5em 0 !important;
}

.layout-default h2 {
  font-size: 2.5em !important;
  font-weight: 600 !important;
  line-height: 1.2 !important;
  margin: 0 0 0.5em 0 !important;
}

.layout-default h3 {
  font-size: 1.8em !important;
  font-weight: 600 !important;
  line-height: 1.2 !important;
  margin: 0 0 0.5em 0 !important;
}

/* Tema oscuro */
.dark .app-header {
  background: rgba(255, 255, 255, 0.05);
  border-bottom-color: rgba(255, 255, 255, 0.08);
}

.dark .titulo {
  color: rgba(255, 255, 255, 0.9);
}

.dark .subtitle {
  color: rgba(255, 255, 255, 0.6);
}
</style>