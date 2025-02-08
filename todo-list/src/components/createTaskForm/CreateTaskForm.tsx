import {FC, ReactElement} from "react";
import { Box, Typography, Stack } from "@mui/material";

import { TaskTitleField } from "./interfaces/_taskTitleField";
import { TaskDescriptionField } from "./interfaces/_taskDescriptionField";
import { TaskDateField } from "./interfaces/_taskDateField";
import { TaskSelectField } from "./interfaces/_taskSelectField";
import { Status } from "./enums/Status";
import { Priority } from "./enums/Priority";

export const CreateTaskForm:FC = ():ReactElement => {
  return (
    <Box
    display="flex"
    flexDirection="column"
    alignItems="flex-start"
    width="100%"
    px={4}
    my={6}>
        <Typography mb={2} component="h2" variant="h6">
            Create A Task
        </Typography>
        <Stack sx={{ width: '100%'}} spacing={2}>
             {/* the tasktitleField goes in here */}
            <TaskTitleField  disabled/>
             {/* the taskdescriptionField goes in here */}
            <TaskDescriptionField />
            {/* task date field Component */}
            <TaskDateField />
            {/* task select field Component */}
            <Stack sx={{ width: '100%'}} direction="row" spacing={2}>
              <TaskSelectField label="Status" name="Status" items={[
                {value: Status.todo, label: Status.todo.toUpperCase()},
                {value: Status.inProgress, label: Status.inProgress.toUpperCase()},
              ]} />
              <TaskSelectField  label="Priority" name="priority" items={[
                { value :Priority.low, label: Priority.low.toUpperCase()},
                { value :Priority.normal, label: Priority.normal.toUpperCase()},
                { value :Priority.high, label: Priority.high.toUpperCase()}
              ]}/>
            </Stack>
        </Stack>
    </Box>
  )
}
