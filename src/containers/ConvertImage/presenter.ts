import { ProcessingParameters } from "@/entities/ProcessingDetail";
import ProcessingRepository from "@/repositories/ConvertImageRepository";

export interface ConvertImagePresenter {
  processingRepository: ProcessingRepository;
}

export interface ConvertImageViewModel {
  inputFileName: string;
  outputFileName: string;
  processingParameters: ProcessingParameters;
}

export default ({
  processingRepository,
}: ConvertImagePresenter): ConvertImageViewModel => {
  const convertImageDetail = processingRepository.getResult();
  return {
    inputFileName: convertImageDetail.inputFileName,
    outputFileName: convertImageDetail.outputFileName,
    processingParameters: convertImageDetail.processingParameters,
  };
};
