<template>
  <div class="image-submit-form">
    <ImageForm @onSelectImage="onSelectImage" />
    <button @click="onClickSubmitBtn" type="submit" value="POST">
      {{ buttonText }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ImageForm from "@/components/Atoms/ImageForm.vue";

export default defineComponent({
  name: "ConvertImage",
  components: {
    ImageForm,
  },
  props: {
    buttonText: {
      type: String,
      default: "submit",
    },
  },
  emits: ["onSelectImage", "onClickSubmitBtn"],
  setup(_, context) {
    const onSelectImage = (selectedImage: File) => {
      context.emit("onSelectImage", selectedImage);
    };
    const onClickSubmitBtn = () => {
      context.emit("onClickSubmitBtn");
    };
    return {
      onSelectImage,
      onClickSubmitBtn,
    };
  },
});
</script>
