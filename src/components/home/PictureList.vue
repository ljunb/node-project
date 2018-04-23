<template>
  <div>
    <el-card :body-style="{ padding: '0px' }">
      <img class="image">
      <div style="padding: 14px;">
        <span>好吃的汉堡</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">操作按钮</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'picture-list',
};
</script>

<style lang="stylus" scoped>
  .image
    width: 100%;
    display: block;
</style>
