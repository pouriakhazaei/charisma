import {ListItemAvatar,ListItemText, Typography, ListItem, Avatar} from "@mui/material";
import {useDispatch} from "react-redux";
import {v4 as uuidv4} from "uuid";
import {memo, FC} from "react";

import {ProductsItemsProps} from "Interfaces";
import {setDataToList} from "Redux/AppSlice";

export const ProductsItems: FC<ProductsItemsProps> = memo(({title, description}) => {
    const dispatch = useDispatch();

    const onClickItem = () => dispatch(setDataToList({text: title, id: uuidv4()}));

    return (
        <ListItem onClick={onClickItem} style={{cursor: "pointer"}}>
            <ListItemAvatar>
            <Avatar>
                {/* <ImageIcon /> */}
            </Avatar>
            </ListItemAvatar>
            <ListItemText 
                primary={<Typography style={{color: "#000"}}>{title}</Typography>}
                secondary={description} 
            />
        </ListItem>
    );
});