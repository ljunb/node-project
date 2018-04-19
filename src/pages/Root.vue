<template>
  <el-container>
    <el-header>
      <el-row type="flex">
        <!-- <el-col>
          <img src="../assets/xqx.png" class="logo"/>
        </el-col>
        -->
        <el-col>
          <el-tabs :tab-position="top" style="height: 200px;">
            <el-tab-pane label="首页">
              <HomePage></HomePage>
            </el-tab-pane>
            <el-tab-pane label="社区">社区</el-tab-pane>
            <el-tab-pane label="文字欲">文字欲</el-tab-pane>
            <el-tab-pane label="图片说">图片说</el-tab-pane>
            <el-tab-pane label="赏音乐">赏音乐</el-tab-pane>
            <el-tab-pane label="观影录">观影录</el-tab-pane>
            <el-tab-pane label="去旅行">去旅行</el-tab-pane>
          </el-tabs>
        </el-col>
      </el-row>
    </el-header>
  </el-container>
</template>

<script>
import HomePage from '@/pages/Home';

export default {
  components: {
    HomePage,
  },
};
</script>

<style lang="stylus" scoped>
  .el-header
    background-color: #fff
    color: #333
    text-align: center
    line-height: 60px
    padding: 0px
  .logo
    height: 60px
</style>
