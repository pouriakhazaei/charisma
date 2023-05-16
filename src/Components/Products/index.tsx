import {memo, Fragment, useState} from "react";
import {useSelector} from "react-redux";
import List from "@mui/material/List";

import {Input, ProductsItems, ClearDataButton, Loading} from "../";
import {findArrayByTextSearch} from "Redux/AppSlice";
import type {RootState} from "Redux/Store";

export const Products = memo(() => {
    const {isLoading, products} = useSelector((state: RootState) => state.appSlice);
    const [search, setSearch] = useState("");
    const data = findArrayByTextSearch(products, search, "title");
    return (
        <Fragment>
            <Input onChange={(value: string) => setSearch(value)} />
            {
                isLoading ? <Loading /> :
                <Fragment>
                    <List sx={{overflow: "auto", height: "82vh"}}>
                        {
                            data.map(item => (
                                <ProductsItems 
                                    key={item?.id}  
                                    title={item?.title}
                                    description={item?.description}
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