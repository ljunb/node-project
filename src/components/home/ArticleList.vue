<template>
  <div>
    <el-col v-for="article in articleList" :key="article.title">
      <el-card style="margin-bottom:12px" :body-style="{padding: '0px'}">
        <div class="list-item">
          <div class="content">
            <div class="title">{{ article.title }}</div>
            <div class="tag">
              #{{ article.tag }}# / By {{ article.author }} / {{ article.createDate }}
            </div>
            <div class="line"></div>
            <div class="detail">{{ article.content }}</div>
            <div class="comment">{{ article.viewCount }}次阅读 | 评论：{{ article.commentCount }}</div>
          </div>
          <img class="image" :src="article.imageUrl"/>
        </div>
      </el-card>
    </el-col>
  </div>
</template>

<script>
export default {
  name: 'article-list',
  props: ['articleList'],
};
</script>

<style lang="stylus" scoped>
  .list-item
    display: flex
  .content
    padding-left: 20px
    padding-right: 50px
    padding-top: 8px
    flex: 1
    text-align: left
  .title
    font-size: 25px
    font-weight: 200
  .tag
    font-size: 14px
    line-height: 11px
  .line
    height: 1px
    width: 30px
    background-color: #333
    margin-top: 18px
    margin-bottom: 8px
  .detail
    font-size: 14px
    line-height: 18px
    font-weight: 100
  .comment
    margin-top: 8px
    font-size: 14px
    line-height: 20px
    font-weight: 100
  .image
    height: 216px
    width: 300px
</style>
