<template lang="pug">
.container
    div
      h1.title
        |next page
      .links
        nuxt-link.button--green(
          to = "/"
          )
          |to TOP page
</template>

<script>
export default {
  data() {
    return {
      title: 'NEXT'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description2'
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'article'
        }
      ]
    }
  }
}
</script>
