export default interface ProcessingDetail {
  id: number;
  inputFileName: string;
  inputImageBlobURL: string;
  fileType: "image" | "video";
  processingParameters: ProcessingParameters;
  outputFileName: string;
}

export interface ProcessingParameters {
  method: string;
}
