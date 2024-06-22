import { FC } from "react";
import { AvatarComponentInterface } from "./interface";
import { Avatar } from "@mui/material";

export const AvatarComponent: FC<AvatarComponentInterface> = (props) => {
    return <>
        <Avatar sx={{ width: props.width ?? 40, height: props.height ?? 40 }} alt={props.alt} src={props.src} />
    </>
}