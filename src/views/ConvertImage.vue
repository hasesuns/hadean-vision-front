<template>
  <div class="convert">
    <img alt="Vue logo" src="../assets/logo.png" />
    <FileForm v-model="previewImage" @imageChange="onImageChange" />
    <input @click="postImage" type="button" value="POST" />
    <img :src="previewImage" />
    <div>
      {{ previewImage }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import FileForm from "@/components/FileForm.vue"; // @ is an alias to /src
import axios from "axios";

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
    const postImage = () => {
      console.log("post");
    };
    return {
      previewImage,
      onImageChange,
      postImage,
    };
  },
});
</script>

<style lang="scss" scoped></style>
