<template>
  <div class="convert">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <form class="form" @submit.prevent="submitImg">
      <input type="file" accept="img/*" @change="changeImg" />
      <button type="submit" class="button">click</button>
    </form>
    <div>
      <img :src="postData.thumbnail" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      thumbnail: "",
      postData: {
        thumbnail: "",
      },
    };
  },
  methods: {
    changeImg(e) {
      this.thumbnail = e.target.files[0];
      if (this.thumbnail) {
        const reader = new FileReader();
        reader.onload = () => {
          this.postData.thumbnail = reader.result + "";
        };
        reader.readAsDataURL(this.thumbnail);
        console.log("Input image is prepared");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
