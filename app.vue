<script setup>
const options = reactive({
  gender: "Boy",
  popularity: "Trendy",
  length: "All",
});
</script>

<template>
  <div class="container">
    <h1>Name Generator</h1>
    <p>Choose your options and click the <b>"Find Names"</b> button below</p>
    <div class="options-container">
      <div class="option-container">
        <h4>1) Choose a gender</h4>
        <div class="option-buttons">
          <button
            class="option option-left"
            :class="options.gender === 'Boy' && 'option-active'"
          >
            Boy
          </button>
          <button
            class="option"
            :class="options.gender === 'Unisex' && 'option-active'"
          >
            Unisex
          </button>
          <button
            class="option option-right"
            :class="options.gender === 'Girl' && 'option-active'"
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
            :class="options.popularity === 'Trendy' && 'option-active'"
          >
            Trendy
          </button>
          <button
            class="option option-right"
            :class="options.popularity === 'Unique' && 'option-active'"
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
            :class="options.length === 'Short' && 'option-active'"
          >
            Short
          </button>
          <button
            class="option"
            :class="options.length === 'All' && 'option-active'"
          >
            All
          </button>
          <button
            class="option option-right"
            :class="options.length === 'Long' && 'option-active'"
          >
            Long
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$primary-text-color: #fff;
$primary-background-color: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
$secondary-background-color: #fff;
$secondary-text-color: #000;
$call-to-action-color: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
$border-radius: 1rem;

.container {
  background-image: $primary-background-color;
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
      background-image: $call-to-action-color;
    }
  }
}
</style>