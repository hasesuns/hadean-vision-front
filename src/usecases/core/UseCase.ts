import { InputData } from "@/usecases/core/InputData";
import { OutputData } from "@/usecases/core/OutputData";

export interface UseCase {
  // TODO: anyを禁止する
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handle(params?: InputData | any): Promise<OutputData | any>;
}
