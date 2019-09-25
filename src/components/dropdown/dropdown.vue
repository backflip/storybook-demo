<!-- eslint-disable-next-line vue/valid-template-root -->
<template />

<script>
export default {
  name: 'dropdown',
  data () {
    return {
      expanded: false
    }
  },
  methods: {
    toggle () {
      this.expanded = !this.expanded
    }
  }
}
</script>

<style scoped>
/* empty */
</style>
