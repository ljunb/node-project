<template>
  <div class="header">
    <div class="diamonds"></div>
    <div class="title">阅读|Read - 音乐|Music - 视频|Video - 品书|Book</div>
  </div>
</template>

<script>
export default {
  name: 'list-section-header',
};
</script>

<style lang="stylus" scoped>
  .header
    margin-top: 60px
    margin-bottom: 30px
    display: flex
    align-self: flex-start
    align-items: center
  .diamonds
    height: 20px
    width: 20px
    background-color: #333
    margin-right: 10px
  .title
    font-size: 16px
    line-height: 30px
</style>
