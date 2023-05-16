import TextField from "@mui/material/TextField";
import {memo, FC} from "react";

import {InputProps} from "Interfaces";

export const Input: FC<InputProps> = memo(({onChange}) => {
    return (
        <TextField
            fullWidth
            placeholder="Search..."
            onChange={e => onChange(e.target.value)}
        />
    );
});