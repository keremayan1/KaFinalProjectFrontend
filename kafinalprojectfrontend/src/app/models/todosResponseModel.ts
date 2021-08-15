import { ResponseModel } from "./responseModel";
import { Todo } from "./todos";

export interface TodosResponseModel extends ResponseModel{
    data:Todo[];
}