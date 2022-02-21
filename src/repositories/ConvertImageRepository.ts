import ProcessingDetail from "@/entities/ProcessingDetail";
import ConvertImageInputData from "@/usecases/convertImage/ConvertImageInputData";
import ConvertImageOutputData from "@/usecases/convertImage/ConvertImageOutputData";

export default interface ConvertImageRepository {
  postApi(params?: ConvertImageInputData): Promise<ConvertImageOutputData>;
  getResult?(id?: number): ProcessingDetail;
}
