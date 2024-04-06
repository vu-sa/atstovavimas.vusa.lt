<template>
  <div ref="wrapper">
    <svgObject />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { computePosition } from "@floating-ui/dom";
import { zoom, select, selectAll, zoomIdentity, pointer } from "d3"

defineProps<{
  svgObject: object;
}>();

const wrapper = ref(null);

onMounted(() => {
  // add zooming behavior on scheme-wrapper

  const svg = select(wrapper.value).select("svg");

  // Select all children
  const graph = svg.selectAll("svg > *");

  // For every element in graph, reassign translate to x and y

  const zoomed = ({ transform }) => {
    graph.attr("transform", transform);
  };

  const zoomBehavior = zoom().on("zoom", zoomed);

  svg.call(zoomBehavior, zoomIdentity);

  svg.selectAll("text")
    .on("mousedown", function (event) {
      // Allow text selection to proceed without interference
      event.stopImmediatePropagation();
    });


  // add tooltip
  const Tooltip = select(wrapper.value)
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "2px")
    .style("border-radius", "5px")
    .style("padding", "5px")

  const mouseover = function (d) {
    Tooltip
      .style("opacity", 1)
    select(this)
      .style("stroke", "black")
      .style("opacity", 1)
  }
  const mousemove = function (d) {
    Tooltip
      .html(select(this).attr("data-content"))
      .style("left", (pointer(this)[0] + 70) + "px")
      .style("top", (pointer(this)[1]) + "px")
  }

  const elements = selectAll("svg a[data-content]");

  elements
    .on("mouseover", mouseover)
    .on("mousemove", mousemove)





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

svg a {
  cursor: pointer;
}
</style>
