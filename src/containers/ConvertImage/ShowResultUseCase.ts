import { ProcessingParameters } from "@/entities/ProcessingDetail";

export interface ShowResultOutputData {
  processingParameters: ProcessingParameters;
  isSuccessed: boolean;
  outputImageBlobURL: string;
}
