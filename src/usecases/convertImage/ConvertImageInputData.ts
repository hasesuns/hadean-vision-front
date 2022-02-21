import { ProcessingParameters } from "@/entities/ProcessingDetail";
import { InputData } from "@/usecases/core/InputData";

interface ConvertImageInputData extends InputData {
  inputFileName: string;
  inputImageBlobURL: string;
  processingParameters: ProcessingParameters;
}

export default class ConvertImageInputDataImpl
  implements ConvertImageInputData
{
  inputFileName: string;
  inputImageBlobURL: string;
  processingParameters: ProcessingParameters;

  constructor(
    inputFileName: string,
    inputImageBlobURL: string,
    processingParameters: ProcessingParameters
  ) {
    this.inputFileName = inputFileName;
    this.inputImageBlobURL = inputImageBlobURL;
    this.processingParameters = processingParameters;
  }
}
