<template>
  <Todo/>
</template>

<script lang="ts">
import Vue from 'vue'
import Todo from '~/components/Todo.vue';

export default Vue.extend({
    name: "IndexPage",
    components: { Todo }
})
</script>
