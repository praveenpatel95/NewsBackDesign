import { Helmet, HelmetProvider } from 'react-helmet-async';
import Searchbar from "./Searchbar";

function Home(){

    return (
    <HelmetProvider>
            <Helmet>
                <title>Welcome to Inc News</title>
            </Helmet>
            <Searchbar />
    </HelmetProvider>
    )
}
export default Home