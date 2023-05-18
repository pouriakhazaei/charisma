import Container from "@mui/material/Container";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import {useDispatch} from "react-redux";
import Grid from "@mui/material/Grid";
import {useEffect} from "react";

import {Users, Products, List} from "Components";
import {AppDispatch} from "Redux/Store";
import {getData} from "Redux/AppSlice";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
}));

const Page = () => {
    const dispatch = useDispatch<AppDispatch>();
    
    useEffect(() => {
        dispatch(getData());
    }, []);

    return (
        <Container maxWidth={false} style={{background: "gray"}}>
            <Grid container spacing={5}>
                <Grid item xs={4}>
                    <Item>
                        <Users />
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <Products />
                    </Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>
                        <List />
                    </Item>
                </Grid>
            </Grid>
        </Container>
    );
};
export default Page;