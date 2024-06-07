import { FC, useEffect, useMemo } from "react";
import { MePropsInterface } from "./interface";
import { useQuery } from "@apollo/client";
import { MeQuery } from "../../Services/Graphql/User";

export const Me: FC<MePropsInterface> = (props) => {

    const userMe = useQuery(MeQuery, {
        variables: {
            input: {
                accessToken: localStorage.getItem('accessToken')
            }
        }
    });

    const pathname = window.location.pathname;

    const RouteExceptLogged = useMemo(() => {
        return props.listRoutes.filter((r) => r.accessWithAnonymous === true).map((r) => r.path ?? '');
    }, [props.listRoutes]);
        
    const isNotFound = useMemo(() => {
        return props.listRoutes.findIndex((el) => el.path === pathname) === -1;
    }, [props.listRoutes, pathname]); 
    

    useEffect(() => {
        if (!isNotFound) {
            if (userMe.error) {           
                if (!RouteExceptLogged.includes(pathname)) {
                    window.location.href = '/login';
                }
            }
    
            if (userMe.data?.user && (RouteExceptLogged.includes(pathname))) {
                window.location.href = '/';
            }
        }
    }, [RouteExceptLogged, userMe.error, userMe.data?.user, pathname, isNotFound]);

    return <>

        {props.children}
    
    </>
}