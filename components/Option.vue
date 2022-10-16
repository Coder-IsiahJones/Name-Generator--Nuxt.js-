<script setup lang="ts">
import { Gender, Length, Popularity } from "@/data";

interface OptionProps {
  option: {
    title: string;
    category: string;
    buttons: Gender[] | Popularity[] | Length[];
  };
  options: {
    gender: Gender;
    popularity: Popularity;
    length: Length;
  };
  colorMode: string;
}

const props = defineProps<OptionProps>();

const computeButtonClasses = (value, index, colorMode) => {
  const classNames = [];
  if (props.options[props.option.category] === value) {
    classNames.push("option-active");
    if (colorMode === "light") classNames.push("light-outline");
    if (colorMode === "dark") classNames.push("dark-outline");
  }
  if (index === 0) classNames.push("option-left");
  if (index === props.option.buttons.length - 1)
    classNames.push("option-right");
  return classNames.join(" ");
};
</script>

<template>
  <div class="option-container">
    <h4 :class="colorMode === 'dark' ? 'light-text' : 'dark-text'">
      {{ option.title }}
    </h4>
    <div class="option-buttons">
      <button
        v-for="(value, index) in option.buttons"
        :key="value"
        class="option"
        :class="computeButtonClasses(value, index, colorMode)"
        @click="options[option.category] = value"
      >
        {{ value }}
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/variables.scss";

.option-container {
  margin-bottom: 2rem;
  h4 {
    color: $secondary-text-color;
  }

  .option-buttons {
    .option {
      background: $secondary-background-color;
      outline: 0.15rem solid $secondary-text-color;
      border: none;
      padding: 0.75rem;
      width: 12rem;
      font-size: 1rem;
      color: $secondary-text-color;
      cursor: pointer;
      font-weight: 200;
    }

    .option-left {
      border-radius: $border-radius 0 0 $border-radius;
    }

    .option-right {
      border-radius: 0 $border-radius $border-radius 0;
    }

    .option-active {
      color: $primary-text-color;
      background-color: $secondary-call-to-action-color;
      outline: 1px solid $secondary-background-color;
    }
  }
}
</style>