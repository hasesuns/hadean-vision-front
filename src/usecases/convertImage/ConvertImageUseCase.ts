import ConvertImageInputData from "@/usecases/convertImage/ConvertImageInputData";
import ConvertImageOutputData from "@/usecases/convertImage/ConvertImageOutputData";
import { UseCase } from "@/usecases/core/UseCase";

export interface ConvertImageUseCase extends UseCase {
  handle(params?: ConvertImageInputData): Promise<ConvertImageOutputData>;
}
