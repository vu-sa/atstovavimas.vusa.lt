<script setup lang="ts">
import { ref } from 'vue'
import StructureGraph from './StructureGraph.vue';

defineProps<{
  nodes: Record<string, any>[]
  edges: Record<string, any>[]
}>()

const dialogRef = ref<HTMLDialogElement | null>(null)
const showGraph = ref(false)

function handleModal() {
  dialogRef.value?.showModal()
  showGraph.value = true
}

const animated = ref(true)
</script>

<template>
  <div class="h-96 sm:h-[468px]">
    <StructureGraph :min-zoom="0.2" :nodes :edges @show-dialog="handleModal" show-fullscreen />
  </div>

  <dialog class="w-full h-full" ref="dialogRef">

    <div class="h-full">
      <StructureGraph :min-zoom="0.2" :nodes :edges @close="dialogRef?.close()" :animated v-if="showGraph" show-close />
    </div>
  </dialog>
</template>
