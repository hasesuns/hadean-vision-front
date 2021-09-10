<template>
  <div class="convert">
    <img alt="Vue logo" src="../assets/logo.png" />
    <FileForm v-model="previewImage" @imageChange="onImageChange" />
    <img :src="previewImage" />
    <div>
      {{ previewImage }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import FileForm from "@/components/FileForm.vue"; // @ is an alias to /src

export default defineComponent({
  name: "ConvertImage",
  components: {
    FileForm,
  },
  setup() {
    let previewImage = ref("");
    const onImageChange = (selectedImage: string) => {
      previewImage.value = selectedImage;
    };
    return {
      previewImage,
      onImageChange,
    };
  },
});
</script>

<style lang="scss" scoped></style>
