<script setup lang="ts">
enum Gender {
  GIRL = "Girl",
  BOY = "Boy",
  UNISEX = "Unisex",
}

enum Popularity {
  TRENDY = "Trendy",
  UNIQUE = "Unique",
}

enum Length {
  ALL = "All",
  SHORT = "Short",
  LONG = "Long",
}

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
</script>

<template>
  <div class="container">
    <h1>Name Generator</h1>
    <p>Choose your options and click the <b>"Generate"</b> button below</p>
    <div class="options-container">
      <div class="option-container">
        <h4>1) Choose a gender</h4>
        <div class="option-buttons">
          <button
            class="option option-left"
            :class="options.gender === Gender.BOY && 'option-active'"
            @click="options.gender = Gender.BOY"
          >
            Boy
          </button>
          <button
            class="option"
            :class="options.gender === Gender.UNISEX && 'option-active'"
            @click="options.gender = Gender.UNISEX"
          >
            Unisex
          </button>
          <button
            class="option option-right"
            :class="options.gender === Gender.GIRL && 'option-active'"
            @click="options.gender = Gender.GIRL"
          >
            Girl
          </button>
        </div>
      </div>
      <div class="option-container">
        <h4>2) Choose the name's popularity</h4>
        <div class="option-buttons">
          <button
            class="option option-left"
            :class="options.popularity === Popularity.TRENDY && 'option-active'"
            @click="options.popularity = Popularity.TRENDY"
          >
            Trendy
          </button>
          <button
            class="option option-right"
            :class="options.popularity === Popularity.UNIQUE && 'option-active'"
            @click="options.popularity = Popularity.UNIQUE"
          >
            Unique
          </button>
        </div>
      </div>
      <div class="option-container">
        <h4>3) Choose name's length</h4>
        <div class="option-buttons">
          <button
            class="option option-left"
            :class="options.length === Length.SHORT && 'option-active'"
            @click="options.length = Length.SHORT"
          >
            Short
          </button>
          <button
            class="option"
            :class="options.length === Length.ALL && 'option-active'"
            @click="options.length = Length.ALL"
          >
            All
          </button>
          <button
            class="option option-right"
            :class="options.length === Length.LONG && 'option-active'"
            @click="options.length = Length.LONG"
          >
            Long
          </button>
        </div>
      </div>
    </div>
    <button class="primary-btn">Generate</button>
  </div>
</template>

<style scoped lang="scss">
$primary-text-color: #f0edcc;
$primary-background-color: #02343f;
$secondary-background-color: #f0edcc;
$secondary-text-color: #02343f;
$primary-call-to-action-color: #f0edcc;
$secondary-call-to-action-color: #02343f;
$border-radius: 0.325rem;

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

    .option-container {
      margin-bottom: 2rem;
    }
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
    }
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
}
</style>