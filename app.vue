<script setup lang="ts">
import { Gender, Popularity, Length, names } from "@/data";

type Theme = "light" | "dark";
const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme;
};

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
  <div
    class="container"
    :class="$colorMode.value === 'dark' ? 'dark-bg' : 'light-bg'"
  >
    <div class="colorMode">
      <button
        :class="
          $colorMode.value === 'dark'
            ? 'dark-text dark-border'
            : 'light-text light-border'
        "
        @click="
          setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')
        "
      >
        <svg
          v-if="$colorMode.value == 'dark'"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-50"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
    <h1 :class="$colorMode.value === 'dark' ? 'dark-text' : 'light-text'">
      Name Generator
    </h1>
    <p :class="$colorMode.value === 'dark' ? 'dark-text' : 'light-text'">
      Choose your options and click the <b>"Generate"</b> button below
    </p>
    <div
      class="options-container"
      :class="$colorMode.value === 'dark' ? 'light-bg' : 'dark-bg'"
    >
      <Option
        v-for="option in optionsArray"
        :key="option.title"
        :option="option"
        :options="options"
        :colorMode="$colorMode.value"
      />
    </div>
    <div>
      <button
        class="primary-btn"
        @click="computeSelectedNames"
        :class="
          $colorMode.value === 'dark'
            ? 'light-bg light-text'
            : 'dark-bg dark-text'
        "
      >
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
        :colorMode="$colorMode.value"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/variables.scss";

.container {
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

  .colorMode {
    button {
      cursor: pointer;
      background-color: transparent;
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    svg {
      height: 3rem;
      width: 3rem;
    }
  }
}
</style>