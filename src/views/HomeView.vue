<script setup lang="ts">
import { FlowBox } from "../components/FlowBox";
</script>

<template>
  <main>Home view</main>
  <FlowBox
    as="main"
    horizontal
    :vertical="true"
    class="bg-yellow-500 w-full h-1/2 flower"
  >
  </FlowBox>
</template>

<style scoped>
.flower {
  height: 50vh;
  background-color: yellow;
}

p {
  margin: 200px 0;
}
</style>
