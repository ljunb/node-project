<template>
  <el-row type="flex" class="gallery" justify="start">
    <el-col><div class="left"></div></el-col>
    <el-row type="flex" class="right">
      <el-row type="flex">
        <el-col><div class="item1"></div></el-col>
        <el-col><div class="item2"></div></el-col>
      </el-row>
      <el-row type="flex">
        <el-col><div class="item3"></div></el-col>
        <el-col><div class="item4"></div></el-col>
      </el-row>
    </el-row>
  </el-row>
</template>

<script>
export default {
  name: 'image-gallery',
};
</script>

<style lang="stylus" scoped>
  .gallery
    height: 480px
    width: 960px
  .left
    height: 480px
    width: 480px
    background-color: #ddd
  .right
    height: 480px
    width: 480px
    flex-wrap: wrap
  .item1
    background-color: red
    height: 240px
    width: 240px
  .item2
    background-color: blue
    height: 240px
    width: 240px
  .item3
    background-color: gray
    height: 240px
    width: 240px
  .item4
    background-color: lightgray
    height: 240px
    width: 240px
</style>
