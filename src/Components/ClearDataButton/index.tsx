import Button from "@mui/material/Button";
import {useDispatch} from "react-redux";
import {memo} from "react";

import {clearList} from "Redux/AppSlice";

export const ClearDataButton = memo(() => {
    const dispatch = useDispatch();

    const onClear = () => dispatch(clearList());
    
    return (
        <Button variant="contained" fullWidth onClick={onClear}>
            CLEAR LIST
        </Button>
    );
});