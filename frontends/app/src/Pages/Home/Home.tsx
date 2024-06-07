import { FC, useEffect } from "react";
import { HomePageInterface } from "./interface";
import { Header } from "../../Component";
import { useLazyQuery } from "@apollo/client";

export const HomePage: FC<HomePageInterface> = () => {
    
    return <>
        <Header />
    </>
}