import HeroSection from "./HeroSection"
import Layout from "./Layout"
import { Types } from "./Types";

const HomePage = () =>{
    return(
        <>
            <Layout>
                <HeroSection />
                <Types />
            </Layout>
        </>
    )
}

export default HomePage;