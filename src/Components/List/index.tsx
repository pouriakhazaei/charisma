import {Box, Typography} from "@mui/material";
import {useSelector} from "react-redux";
import {memo, Fragment} from "react";

import type {RootState} from "Redux/Store";
import {ListItems} from "../";

export const List = memo(() => {
    const {list} = useSelector((state: RootState) => state.appSlice);
    return (
        <Fragment>
            <Typography margin={2} align="left">
                {
                    list.length > 0 ? "Tap to delete" : "List is Empty"
                }
            </Typography>
            <Box style={{display: "flex", flexWrap: "wrap"}}>
                {
                    list.map(item => (
                        <ListItems key={item.id} {...item} />
                    ))
                }
            </Box>
        </Fragment>
    );
});