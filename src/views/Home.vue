<template>
    <HeadTo></HeadTo>
    <BodyTo></BodyTo>
</template>

<script>

import HeadTo from '../components/HeadTo/HeadTo.vue'
import About from '../views/About'
import BodyTo from '../components/BodyTo/BodyTo.vue'
export default {
  name: 'Home',
  data() {
    return {
      mes:'Home'
    }
  },
  components: {
    About,
    HeadTo,
    BodyTo
  },
}
</script>
