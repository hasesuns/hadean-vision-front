import { ProcessingParameters } from "@/entities/ProcessingDetail";
import { OutputData } from "@/usecases/core/OutputData";

interface ConvertImageOutputData extends OutputData {
  processingParameters: ProcessingParameters;
  isSuccessed: boolean;
  outputImageBlobURL: string;
}

export default class ConvertImageOutputDataImpl
  implements ConvertImageOutputData
{
  processingParameters: ProcessingParameters;
  isSuccessed: boolean;
  outputImageBlobURL: string;

  constructor({
    processingParameters,
    isSuccessed,
    outputImageBlobURL,
  }: ConvertImageOutputData) {
    this.processingParameters = processingParameters;
    this.isSuccessed = isSuccessed;
    this.outputImageBlobURL = outputImageBlobURL;
  }
}
