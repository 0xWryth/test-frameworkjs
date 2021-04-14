<template>
  <div class="container">
    <h1>Counter</h1>
    <main>
      <span>{{counter}}</span>
      <div class="button-group">
        <counter-button label="Incrémenter" @action="increment"/>
        <counter-button label="Décrementer" @action="decrement"/>
      </div>
    </main>
  </div>
</template>

<script>
import CounterButton from './components/CounterButton.vue'
import { ref } from 'vue';

export default {
  name: 'Counter',
  components: { CounterButton },
  setup() {
    const counter = ref(0);
    const increment = () => {
      counter.value += 1;
    };

    const decrement = () => {
      counter.value -= 1;
    };
  
    return {
      counter,
      increment,
      decrement
    };
  }
}
</script>
