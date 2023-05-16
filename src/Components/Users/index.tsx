import {memo, Fragment, useState} from "react";
import {useSelector} from "react-redux";
import List from "@mui/material/List";

import {Input, UserItems, ClearDataButton, Loading} from "../";
import {findArrayByTextSearch} from "Redux/AppSlice";
import type {RootState} from "Redux/Store";

export const Users = memo(() => {
    const {isLoading, users} = useSelector((state: RootState) => state.appSlice);
    const [search, setSearch] = useState("");
    const data = findArrayByTextSearch(users, search, "username");
    return (
        <Fragment>
            <Input onChange={(value: string) => setSearch(value)} />
            {
                isLoading ? <Loading /> :
                <Fragment>
                    <List sx={{overflow: "auto", height: "82vh"}}>
                        {
                            data.map(item => (
                                <UserItems 
                                    key={item?.id}  
                                    email={item?.email}
                                    username={item?.username}
                                />
                            ))
                        }
                    </List>
                    <ClearDataButton />
                </Fragment>
            }
        </Fragment>
    );
});