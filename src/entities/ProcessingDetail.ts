export interface ProcessingDetail {
  id: number;
  inputFileName: string;
  fileType: string;
  processingParameters: ProcessingParameters;
  outputFileName: string;
}

export interface ProcessingParameters {
  method: string;
}
