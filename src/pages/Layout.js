import { AmplifyProvider, ThemeProvider } from "@aws-amplify/ui-react";
import { Outlet } from "react-router-dom";
import { SwolegamingHeader, studioTheme } from "../ui-components";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                   <ThemeProvider theme={studioTheme}>
                    <SwolegamingHeader />
                    </ThemeProvider>

                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;
