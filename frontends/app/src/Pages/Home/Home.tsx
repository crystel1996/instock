import { FC, useEffect } from "react";
import { HomePageInterface } from "./interface";
import { Header } from "../../Component";
import { useLazyQuery } from "@apollo/client";
import { test } from "../../Services/Graphql/User/Query/query";

export const HomePage: FC<HomePageInterface> = () => {
    const [getTest, getTestResult] = useLazyQuery(test);
    
    useEffect(() => {
        getTest();
    }, []);
    
    return <>
        {getTestResult.loading ? 'Loading' : ''}
        {getTestResult.error ? 'Error': ''}
        {getTestResult.data?.test}
        <Header />
    </>
}