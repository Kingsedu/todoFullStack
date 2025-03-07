
import { TaskCounterStatusType } from "../interfaces/ITaskCounter"
import { Status } from "../../createTaskForm/enums/Status"

export const emitCorrectLabel = (status:TaskCounterStatusType) : string=> {
    switch(status){
        case Status.todo:
            return 'ToDos';
        case Status.inProgress:
            return 'In Progress';
        case Status.completed:
            return 'Completed';
    }
}