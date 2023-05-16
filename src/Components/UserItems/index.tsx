import {ListItemAvatar,ListItemText, Typography, ListItem, Avatar} from "@mui/material";
import {useDispatch} from "react-redux";
import {v4 as uuidv4} from "uuid";
import {memo, FC} from "react";

import {setDataToList} from "Redux/AppSlice";
import {UserItemsProps} from "Interfaces";

export const UserItems: FC<UserItemsProps> = memo(({email, username}) => {
    const dispatch = useDispatch();

    const onClickItem = () => {
        dispatch(setDataToList({text: username, id: uuidv4()}));
    };

    return (
        <ListItem onClick={onClickItem} style={{cursor: "pointer"}}>
            <ListItemAvatar>
            <Avatar>
                {/* <ImageIcon /> */}
            </Avatar>
            </ListItemAvatar>
            <ListItemText 
                primary={<Typography style={{color: "#000"}}>{username}</Typography>}
                secondary={email} 
            />
        </ListItem>
    );
});