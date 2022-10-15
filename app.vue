<script setup lang="ts">
import { Gender, Popularity, Length, names } from "@/data";

interface OptionState {
  gender: Gender;
  popularity: Popularity;
  length: Length;
}

const options = reactive<OptionState>({
  gender: Gender.BOY,
  popularity: Popularity.UNIQUE,
  length: Length.LONG,
});

const selectedNames = ref<string[]>([]);

const computeSelectedNames = () => {
  const filteredNames = names
    .filter((name) => name.gender === options.gender)
    .filter((name) => name.popularity === options.popularity)
    .filter((name) => {
      if (options.length === Length.ALL) return true;
      else return name.length === options.length;
    });

  selectedNames.value = filteredNames.map((name) => name.name);
};

const removeName = (index: number) => {
  const filteredNames = [...selectedNames.value];
  filteredNames.splice(index, 1);
  selectedNames.value = filteredNames;
};

const optionsArray = [
  {
    title: "1) Choose a gender",
    category: "gender",
    buttons: [Gender.GIRL, Gender.UNISEX, Gender.BOY],
  },
  {
    title: "2) Choose the name's popularity",
    category: "popularity",
    buttons: [Popularity.TRENDY, Popularity.UNIQUE],
  },
  {
    title: "3) Choose name's length",
    category: "length",
    buttons: [Length.SHORT, Length.ALL, Length.LONG],
  },
];
</script>

<template>
  <div class="container">
    <h1>Name Generator</h1>
    <p>Choose your options and click the <b>"Generate"</b> button below</p>
    <div class="options-container">
      <Option
        v-for="option in optionsArray"
        :key="option.title"
        :option="option"
        :options="options"
      />
    </div>
    <div>
      <button class="primary-btn" @click="computeSelectedNames">
        Generate
      </button>
    </div>
    <div class="cards-container">
      <CardName
        v-for="(name, index) in selectedNames"
        :key="name"
        :name="name"
        @remove="() => removeName(index)"
        :index="index"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/variables.scss";

.container {
  background-color: $primary-background-color;
  font-family: Arial, Helvetica, sans-serif;
  color: $primary-text-color;
  max-width: 50rem;
  margin: 0 auto;
  text-align: center;
  padding: 2rem;
  border-radius: $border-radius;

  h1 {
    font-size: 3rem;
  }

  p,
  h1 {
    color: $primary-text-color;
  }

  h4 {
    color: $secondary-text-color;
  }

  .options-container {
    background-color: $secondary-background-color;
    border-radius: $border-radius;
    padding: 1rem;
    width: 95%;
    margin: 0 auto;
    margin-top: 4rem;
    position: relative;
  }

  .primary-btn {
    background-color: $primary-call-to-action-color;
    color: $secondary-text-color;
    border-radius: $border-radius;
    border: none;
    padding: 0.75rem 4rem;
    font-size: 1rem;
    margin-top: 1rem;
    cursor: pointer;
  }

  .cards-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 3rem;
    gap: 0.5rem;
  }
}
</style>