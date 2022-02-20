import { ProcessingDetail } from "@/entities/ProcessingDetail";

export default class ProductRepository {
  constructor() {}

  getItem(): ProcessingDetail {
    return {
      id: 0,
      inputFileName: "",
      fileType: "image",
      processingParameters: {
        method: "test",
      },
      outputFileName: "",
    };
  }
}
