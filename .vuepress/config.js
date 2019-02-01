module.exports = {
  title: 'В разработке! Фото в Одессе!',
  nav: [
    { name: 'Главная', url: '/' }
  ],
  plugins: [
    '@vuepress/blog',
    '@vuepress/pagination',
    '@vuepress/medium-zoom',
    'vuepress-autonav',
    '@vuepress/back-to-top',
    '@vuepress/last-updated',
    ['@vuepress/search', {
      searchMaxSuggestions: 10,
    }],
  ],
  // markdown: {
  //   toc: {
  //     includeLevel: [1, 2],
  //   },
  // },
  // theme: 'casper',
};
