<template>
  <div>Hello</div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "HomeItem",
  computed: {
    ...mapGetters(['user'])
  }
};
</script>
