import { createBrowserRouter } from "react-router-dom";
import Body from "../components/Body";
import App from "../App";
import Error from "../components/Error";
import About from "../components/About";
import Contact from "../components/Contact";

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
                element:<Body/>

            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            }
        ]
    }
])
export default appRouter;