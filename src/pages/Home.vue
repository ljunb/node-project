<template>
  <div class="home-page">
    <image-gallery></image-gallery>
    <list-section-header></list-section-header>
    <article-list></article-list>
  </div>
</template>

<script>
import ImageGallery from '@/components/home/ImageGallery';
import ListSectionHeader from '@/components/home/ListSectionHeader';
import ArticleList from '@/components/home/ArticleList';

export default {
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
