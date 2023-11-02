<template>
  <!-- <ClientOnly>  -->
  <div id="tooltip"></div>
  <component ref="svgRef" :is="svgObject" />
  <!-- </ClientOnly> -->
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { computePosition } from "@floating-ui/dom";

defineProps<{
  svgObject: object;
}>();

const svgRef = ref<SVGElement | null>(null);

onMounted(() => {
  // add zooming behavior on scheme-wrapper

  // const svg = select(svgRef.value);

  // const zoomed = ({ transform }) => {
  //   svg.attr("transform", transform);
  // };

  // const zoomBehavior = zoom().on("zoom", zoomed);
  // svg.call(zoomBehavior);

  const tooltip = document.getElementById("tooltip");

  const elements = document.querySelectorAll("svg a[data-content]");

  // add click listener to hide tooltip on click elsewhere

  elements.forEach((element) => {
    element.addEventListener("click", (event) => {
      if (event.currentTarget === null) {
        return;
      }

      computePosition(event.currentTarget, tooltip).then(({ x, y }) => {
        tooltip.style.left = `${x}px`;
        tooltip.style.top = `${y}px`;
        tooltip.style.opacity = "1";
        // add content and link to tooltip
        tooltip.innerHTML = `
        <span>${event.currentTarget.dataset.content}</span>
          <a style="display: block" href="${event.currentTarget.dataset?.link}">
            Daugiau
          </a>
        `;

        setTimeout(() => {
          tooltip.style.opacity = "0";
        }, 10000);
      });
    });
  });
});
</script>

<style>
/* svg:hover > * {
  opacity: 0.3;
  transition: 0.2s;
}

svg:hover > a:hover {
  opacity: 1;
  transition: 0.1s;
} */

#tooltip {
  position: absolute;
  background-color: #fff;
  border: 1px solid #000;
  padding: 5px;
  box-shadow: 0 0 5px #000;
  border-radius: 5px;
  opacity: 0;
  font-weight: 500;
  transition: opacity 0.2s;
  width: fit-content;
  max-width: 400px;
  top: 0;
  left: 0;
  z-index: 1000;
}

svg a {
  cursor: pointer;
}
</style>
