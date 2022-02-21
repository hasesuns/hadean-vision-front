import ConvertImageInputData from "@/usecases/convertImage/ConvertImageInputData";
import ConvertImageOutputData from "@/usecases/convertImage/ConvertImageOutputData";
import { ConvertImageUseCase } from "@/usecases/convertImage/ConvertImageUseCase";
import ConvertImageRepository from "@/repositories/ConvertImageRepository";

export default class ConvertImageInteractor implements ConvertImageUseCase {
  convertImageRepository: ConvertImageRepository;

  constructor(convertImageRepository: ConvertImageRepository) {
    this.convertImageRepository = convertImageRepository;
  }
  handle(params: ConvertImageInputData): Promise<ConvertImageOutputData> {
    return this.convertImageRepository.postApi(params);
  }
}
