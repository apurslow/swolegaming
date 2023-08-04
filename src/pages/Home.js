import { MapRotation } from "../models";
import { HeroLayout1, MapStatCard, studioTheme } from "../ui-components";

import '@aws-amplify/ui-react/styles.css'

import { AmplifyProvider, ThemeProvider } from "@aws-amplify/ui-react";

const Home = () => {
    return (
        <ThemeProvider theme={studioTheme}>
            <MapStatCard />
        </ThemeProvider>
    )
};

export default Home;
