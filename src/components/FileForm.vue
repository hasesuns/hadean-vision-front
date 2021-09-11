<template>
  <form class="form" @submit.prevent="imageSubmit">
    <input
      id="input_img"
      type="file"
      accept="img/*"
      required
      @change="handleChange"
    />
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
interface HTMLElementEvent<T extends HTMLElement> extends Event {
  target: T;
}
export default defineComponent({
  name: "FileForm",
  model: {
    event: "change",
  },
  props: {
    value: {
      type: [String],
    },
  },
  emits: ["imageChange"],
  setup(props, context) {
    let selectedImage: string;
    const handleChange = (e: HTMLElementEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length != 0) {
        selectedImage = window.URL.createObjectURL(e.target.files[0]);
      }
      context.emit("imageChange", selectedImage);
    };
    return {
      handleChange,
    };
  },
});
</script>
