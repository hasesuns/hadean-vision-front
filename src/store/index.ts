import ConvertImageInputData from "@/usecases/convertImage/ConvertImageInputData";
import axios, { AxiosRequestConfig } from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {},
  mutations: {},
  actions: {
    async postApi(_, payload: ConvertImageInputData) {
      console.log("post");
      const url = process.env.VUE_APP_API_BASE + "/convert/";
      const formData = new FormData();
      const blob = await fetch(payload.inputImageBlobURL).then((r) => r.blob());
      const apiInputValName = "file";
      formData.append(apiInputValName, blob, payload.inputFileName);

      const config: AxiosRequestConfig = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        responseType: "blob",
      };

      return axios.post(url, formData, config);
    },
  },
  modules: {},
});
