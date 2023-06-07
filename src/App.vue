<script setup lang="ts">
    import PluggableContainer from './components/PluggableContainer.vue';

</script>

<template>
    <h1>Core Product</h1>

    <PluggableContainer anchor="customArticle" :context="{ resourceName: 'a very nice article' }">
      <div>
        <p>This is a customizable article. Feel free to override it</p>
      </div>
    </PluggableContainer>

    <hr />

    <PluggableContainer anchor="customImage">
      <div>
        <img src="https://picsum.photos/300/200" alt="random image">
        <legend>This is a customizable image</legend>
      </div>
    </PluggableContainer>
</template>
