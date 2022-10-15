<script setup lang="ts">
interface NameProps {
  name: string;
}

const props = defineProps<NameProps>();
</script>

<template>
  <div class="card">
    <h4>{{ name }}</h4>
    <p>x</p>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/variables.scss";

.card {
  position: relative;
  background-color: $secondary-background-color;
  border-radius: $border-radius;
  padding: 0.1rem;
  width: 12rem;
  margin: 0.5rem;
  font-size: 1.5rem;
  font-weight: 200;

  h4 {
    color: $secondary-text-color;
  }

  p {
    position: absolute;
    top: -20%;
    left: 90%;
    cursor: pointer;
    color: $secondary-text-color;
  }
}
</style>