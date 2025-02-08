import { ITaskHeader } from "./ITaskHeader";
import { ITaskFooter } from "./ITFooter";
import { ITaskDescription } from "./ITaskDescription";


export interface ITask extends ITaskHeader, ITaskFooter, ITaskDescription {
    id? : string;
    priority?: string;
    status?: string;
}