<template>
  <ConvertImageContainer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ConvertImageContainer from "@/containers/ConvertImage/index.vue";

export default defineComponent({
  name: "ConvertImage",
  components: {
    ConvertImageContainer,
  },
});
</script>
