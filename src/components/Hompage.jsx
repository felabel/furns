import Featured from "./Featured";
import FeaturedProduct from "./FeaturedProduct";
import HeroSection from "./HeroSection"
import Layout from "./Layout"
import Sale from "./Sale";
import { Types } from "./Types";

const HomePage = () =>{
    return(
        <>
            <Layout>
                <HeroSection />
                <Types className='z-0' />
                <FeaturedProduct />
                <Sale />
            </Layout>
        </>
    )
}

export default HomePage;