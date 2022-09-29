<template>
  <ToDo/>
</template>

<script lang="ts">
import Vue from 'vue'
import ToDo from '~/components/Todo.vue';

export default Vue.extend({
    name: "IndexPage",
    components: { ToDo }
})
</script>
