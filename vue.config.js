module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/stylesheets/main.scss";
        `
      }
    }
  },
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:8081',
        changeOrigin: true
      }
    }
  }
}