<template>
<div>
  我是搜索
  <h1>params：{{$route.params.keyword}}</h1>
  <h1>query：{{$route.query.k}}</h1>
</div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "index"
}
</script>

<style scoped>

</style>