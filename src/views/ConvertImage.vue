<template>
  <div class="convert">
    <img alt="Vue logo" src="../assets/logo.png" />
    <FileForm @imageSelect="onImageSelect" />
    <button id="convert_button" @click="postImage" type="submit" value="POST">
      Convert
    </button>
    <div id="input_image">
      <img :src="inputImageBlobURL" />
    </div>
    <div>
      {{ inputImageBlobURL }}
    </div>
    <div id="output_image">
      <img :src="outputImageBlobURL" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import FileForm from "@/components/FileForm.vue"; // @ is an alias to /src
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export default defineComponent({
  name: "ConvertImage",
  components: {
    FileForm,
  },
  setup() {
    let inputImageBlobURL = ref("");
    let inputImageName = "";
    let outputImageBlobURL = ref("");

    const onImageSelect = (selectedImage: File) => {
      inputImageBlobURL.value = window.URL.createObjectURL(selectedImage);
      inputImageName = selectedImage.name;
    };
    const postImage = async () => {
      console.log("post");
      const url = "http://127.0.0.1:8000/convert/";

      const formData = new FormData();
      const blob = await fetch(inputImageBlobURL.value).then((r) => r.blob());
      const apiInputValName = "file";
      formData.append(apiInputValName, blob, inputImageName);

      const config: AxiosRequestConfig = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        responseType: "blob",
      };

      await axios
        .post(url, formData, config)
        .then(function (response: AxiosResponse) {
          outputImageBlobURL.value = window.URL.createObjectURL(response.data);
        })
        .catch(function (error: Error) {
          console.log(error);
        });
    };
    return {
      inputImageBlobURL,
      onImageSelect,
      postImage,
      outputImageBlobURL,
    };
  },
});
</script>

<style lang="scss" scoped></style>
