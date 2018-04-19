<template>
  <div>
    <el-card style="margin-bottom:12px" :body-style="{padding: '0px'}">
      <div class="list-item">
        <div class="content">
          <div class="title">谈“用心神与真诚向父向主祈祷”</div>
          <div class="tag">#文字欲# / By 小小的太阳 / 2018-04-19</div>
          <div class="line"></div>
          <div class="detail">{{ detail }}</div>
          <div class="comment">2次阅读 | 评论：0</div>
        </div>
        <div class="image" style="background-image: url(http://bbsimg.xqxin.com/forum/201804/19/080528ci5jpyj2pzai5vc5.jpg);">
        </div>
      </div>
    </el-card>
    <el-card style="margin-bottom:12px" :body-style="{padding: '0px'}">
      <div class="list-item">
        <div class="content">
          <div class="title">谈“用心神与真诚向父向主祈祷”</div>
          <div class="tag">#文字欲# / By 小小的太阳 / 2018-04-19</div>
          <div class="line"></div>
          <div class="detail">{{ detail }}</div>
          <div class="comment">2次阅读 | 评论：0</div>
        </div>
        <div class="image" style="background-image: url(http://bbsimg.xqxin.com/forum/201804/19/080528ci5jpyj2pzai5vc5.jpg);">
        </div>
      </div>
    </el-card>
    <el-card style="margin-bottom:12px" :body-style="{padding: '0px'}">
      <div class="list-item">
        <div class="content">
          <div class="title">谈“用心神与真诚向父向主祈祷”</div>
          <div class="tag">#文字欲# / By 小小的太阳 / 2018-04-19</div>
          <div class="line"></div>
          <div class="detail">{{ detail }}</div>
          <div class="comment">2次阅读 | 评论：0</div>
        </div>
        <div class="image" style="background-image: url(http://bbsimg.xqxin.com/forum/201804/19/080528ci5jpyj2pzai5vc5.jpg);">
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'article-list',
  data() {
    return {
      detail: `谈“用心神与真诚向父向主祈祷”作者：金晓胜很多人不明白，
      怎么才叫用心神与真诚的向天主祈祷，我也没听过别人的看法，
      我在这里说说自己的认识：当我们向天主祈祷时，就是我们与天主沟通，
      那么我们的态度是不是要真诚、坦诚？！是不是要专心？！最起码，
      我觉得我们首先要想着天主，比如想着天父，想着...`,
    };
  },
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
