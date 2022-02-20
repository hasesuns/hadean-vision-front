import { ProcessingParameters } from "@/entities/ProcessingDetail";
import ProcessingRepository from "@/repositories/ProcessingRepository";

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
  const convertImageDetail = processingRepository.getItem();
  return {
    inputFileName: convertImageDetail.inputFileName,
    outputFileName: convertImageDetail.outputFileName,
    processingParameters: convertImageDetail.processingParameters,
  };
};
