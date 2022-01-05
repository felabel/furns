import { withRouter } from 'react-router-dom';
import Products from "./Products"

import Layout from "./Layout"
const Shop = () => {
    return (
        <Layout>
           <div className="w-full h-auto mx-auto mt-10">
            
                <Products />
            
            </div> 
        </Layout>
        
    )
}

export default withRouter(Shop)
