<template>
  <header>{{ title }}</header>
</template>

<script>
module.exports = {
  props: ["title"]
};
</script>

<style scoped>
header {
  color: red;
}
</style>