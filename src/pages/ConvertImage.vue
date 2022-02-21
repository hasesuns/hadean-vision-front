<template>
  <ConvertImageContainer :convertImageRepository="convertImageRepository" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ConvertImageContainer from "@/containers/convertImage/Index.vue";
import ConvertImageRepository from "@/repositories/ConvertImageRepository";

export default defineComponent({
  name: "ConvertImage",
  props: {
    convertImageRepository: {
      type: Object as () => ConvertImageRepository,
      required: true,
    },
  },
  components: {
    ConvertImageContainer,
  },
});
</script>
