<template>
<div>
<!--  三级联动组件，全局组件-->
  <TypeNav></TypeNav>
  <list-container></list-container>
  <Recommend></Recommend>
  <Rank></Rank>
  <Like></Like>
  <Floor></Floor>
  <Brand></Brand>
</div>
</template>


<script>
import ListContainer from "@/pages/Home/ListContainer/ListContainer";
import Recommend from "@/pages/Home/Recommend/recommend";
import Rank from "@/pages/Home/Rank/Rank";
import Like from "@/pages/Home/Like/Like";
import Floor from "@/pages/Home/Floor/Floor";
import Brand from "@/pages/Home/Brand/Brand";
export default {
  components: {Brand, Floor, Like, Rank, Recommend, ListContainer},
  // eslint-disable-next-line vue/multi-word-component-names
  name: "index"
}
</script>

<style scoped>

</style>