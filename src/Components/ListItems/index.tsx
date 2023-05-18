import Button from "@mui/material/Button";
import {useDispatch} from "react-redux";
import {FC, memo} from "react";

import {deleteItemFromList} from "Redux/AppSlice";
import {ListItemsProps} from "Interfaces";

export const ListItems: FC<ListItemsProps> = memo(({id, text}) => {
    const dispatch = useDispatch();

    const onDelete = () => dispatch(deleteItemFromList(id));

    return (
        <Button onClick={onDelete} variant="contained" style={{borderRadius: 30, margin: 5}}>
            {text}
        </Button>
    );
});