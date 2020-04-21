<template lang="pug">
  .container
    div
      logo
      h1.title
        |nuxtjs
      h2.subtitle
        |template
      .links
        a.button--green(
          href="https://github.com/heines/nuxtjs"
          target="_blank"
        )
          |GitHub
        nuxt-link.button--grey(
          to="next"
          )
          |to NEXT page
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      title: 'NUXT'
    }
  },
  head() {
    return {
      titleTemplate: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: $color-title;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: $color-subtitle;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
