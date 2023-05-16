import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import {memo} from "react";

export const Loading = memo(() => {
    return (
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", height: "90vh"}}>
            <CircularProgress />
        </Box>
    );
});