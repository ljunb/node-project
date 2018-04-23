<template>
  <div class="home-page">
    <image-gallery></image-gallery>
    <list-section-header
      tagList="阅读 | Read  -  音乐 | Music  -  视频 | Video  -  品书 | Book"
    />
    <article-list :articleList="homeInfo"></article-list>
    <list-section-header tagList="图说 | Picture" />
  </div>
</template>

<script>
import ImageGallery from '@/components/home/ImageGallery';
import ListSectionHeader from '@/components/home/ListSectionHeader';
import ArticleList from '@/components/home/ArticleList';

export default {
  data() {
    return {
      homeInfo: [],
    };
  },
  created() {
    this.getHomeInfo();
  },
  methods: {
    async getHomeInfo() {
      try {
        const { data } = await this.$http.get('/api/no-auth/homeInfo');
        if (data.code === 1) {
          this.homeInfo = data.data || [];
        } else {
          // this.$message.error(responseData.message);
        }
      } catch (error) {
        this.$message.error(error);
      }
    },
  },
  components: {
    ImageGallery,
    ListSectionHeader,
    ArticleList,
  },
};
</script>

<style lang="stylus" scoped>
  .home-page
    display: flex
    flex-direction: column
    align-items: center
    padding-top: 60px
    padding-left: 130px
    padding-right: 130px
</style>
