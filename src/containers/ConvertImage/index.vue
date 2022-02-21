<template>
  <div class="container">
    <div class="menu">Menu</div>
    <div class="main">
      <ImageSubmitForm
        class="image-submit-form-container"
        buttonText="Convert"
        @onSelectImage="onSelectImage"
        @onClickSubmitBtn="postImage"
      />
      <div class="images">
        <img class="input_image" :src="inputImageBlobURL" />
        <img class="output_image" :src="outputImageBlobURL" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import ImageSubmitForm from "@/components/Molecules/ImageSubmitForm.vue";
import ConvertImageInteractor from "@/containers/convertImage/ConvertImageInteractor";
import ConvertImageRepository from "@/repositories/ConvertImageRepository";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import ConvertImageInputData from "@/usecases/convertImage/ConvertImageInputData";

export default defineComponent({
  name: "ConvertImageContainer",
  props: {
    convertImageRepository: {
      type: Object as () => ConvertImageRepository,
      required: true,
    },
  },
  components: {
    ImageSubmitForm,
  },
  setup(props) {
    let inputImageBlobURL = ref("");
    let inputImageName = "";
    let outputImageBlobURL = ref("");

    const onSelectImage = (selectedImage: File) => {
      inputImageBlobURL.value = window.URL.createObjectURL(selectedImage);
      inputImageName = selectedImage.name;
    };
    // const postImage = async () => {
    //   console.log("post");
    //   const url = process.env.VUE_APP_API_BASE + "/convert/";
    //   const formData = new FormData();
    //   const blob = await fetch(inputImageBlobURL.value).then((r) => r.blob());
    //   const apiInputValName = "file";
    //   formData.append(apiInputValName, blob, inputImageName);

    //   const config: AxiosRequestConfig = {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //     responseType: "blob",
    //   };

    //   await axios
    //     .post(url, formData, config)
    //     .then(function (response: AxiosResponse) {
    //       outputImageBlobURL.value = window.URL.createObjectURL(response.data);
    //     })
    //     .catch(function (error: Error) {
    //       console.log(error);
    //     });
    // };
    const postImage = async () => {
      const convertImageInputData = new ConvertImageInputData(
        inputImageName,
        inputImageBlobURL.value,
        { method: "kmeans" }
      );
      return props.convertImageRepository.postApi(convertImageInputData);
    };

    return {
      inputImageBlobURL,
      onSelectImage,
      postImage,
      outputImageBlobURL,
    };
  },
});
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  width: 98vw;
  height: 90vh;
  justify-content: space-between;
}
.menu {
  order: 2;
  height: 85vh;
  width: 20%;
  background-color: rgba(56, 174, 111, 0.658);
  align-items: stretch;
  margin-right: 1vh;
}
.main {
  display: flex;
  order: 1;
  width: 80%;
  height: 85vh;
  flex-direction: column;
}
.image-submit-form-container {
  display: flex;
  margin-left: 3%;
  margin-bottom: 2vh;
}
.images {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 3%;
  margin-right: 5%;
}
.input_image {
  flex-shrink: 0;
  width: 45%;
}
.output_image {
  flex-shrink: 0;
  width: 45%;
}
</style>
