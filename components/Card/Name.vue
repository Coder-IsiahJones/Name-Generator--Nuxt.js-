<script setup lang="ts">
interface NameProps {
  name: string;
  index: number;
}

const props = defineProps<NameProps>();
const emit = defineEmits(["remove"]);
const removeName = () => emit("remove", props.index);
</script>

<template>
  <div class="card">
    <h4>{{ name }}</h4>
    <p @click="removeName">
      <font-awesome-icon :icon="['fas', 'trash']" />
    </p>
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
    font-size: 1rem;
    position: absolute;
    top: -12%;
    left: 88%;
    cursor: pointer;
    color: $secondary-text-color;
  }
}
</style>