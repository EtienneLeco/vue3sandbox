<script setup lang="ts">
  import { ref } from "vue";

  import ButtonRegular from "./components/ButtonRegular.vue";

  const ticked = ref(false);
</script>

<template>
    <ButtonRegular
        title="A nice title"
        :impact="ticked ? 'low' : 'medium'"
    >
      <div>Click me</div>
    </ButtonRegular>

    <input type="checkbox" v-model="ticked">
</template>
