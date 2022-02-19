<template>
  <form class="form">
    <input type="file" accept="img/*" required @change="handleChange" />
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
interface HTMLElementEvent<T extends HTMLElement> extends Event {
  target: T;
}
export default defineComponent({
  name: "ImageForm",
  model: {
    event: "change",
  },
  emits: ["onSelectImage"],
  setup(_, context) {
    const handleChange = (e: HTMLElementEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length != 0) {
        context.emit("onSelectImage", e.target.files[0]);
      }
    };
    return {
      handleChange,
    };
  },
});
</script>
