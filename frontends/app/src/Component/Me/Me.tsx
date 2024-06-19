import { FC, useEffect, useMemo, useState } from "react";
import { MePropsInterface } from "./interface";
import { useQuery } from "@apollo/client";
import { MeQuery } from "../../Services/Graphql/User";
import { Snackbar } from "@mui/material";
import { red } from "@mui/material/colors";

export const Me: FC<MePropsInterface> = (props) => {
    
    const [isProfileVerified, setIsProfileVerified] = useState<boolean>(true);

    const userMe = useQuery(MeQuery, {
        variables: {
            input: {
                accessToken: localStorage.getItem('accessToken')
            }
        },
        onCompleted: (result) => {
            if (result?.me?.accountState === 'NOT_VERIFIED') {
                setIsProfileVerified(false);
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


        const isLogged = () => {
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
        };


        isLogged();

    }, [RouteExceptLogged, userMe.error, userMe.data?.user, pathname, isNotFound]);

    const AlertIsProfileVerified = useMemo(() => {
        if (!isProfileVerified) {
            return  <Snackbar
                        anchorOrigin={{ 
                            vertical: "bottom", 
                            horizontal: "center"
                        }}
                        ContentProps={{
                            sx: {
                                background: red[800]
                            }
                        }}
                        open={!isProfileVerified}
                        message="Votre profile n'est pas vérifié."
                        key={"bottom" + "center"}
                    />
        }
        return <></>
    }, [isProfileVerified]);

    return <>
        {AlertIsProfileVerified}
        {props.children}
    
    </>
}