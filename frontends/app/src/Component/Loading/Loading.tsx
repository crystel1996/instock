import { FC } from "react";
import { LoadingComponentInterface } from "./interface";
import { Box, CircularProgress } from "@mui/material";

export const Loading: FC<LoadingComponentInterface> = () => {
    return  <Box sx={{ display: 'flex' }}>
                <CircularProgress />
            </Box>
}