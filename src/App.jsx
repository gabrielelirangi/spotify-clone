/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import "./App.css";
import Search from "./pages/Search";


import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Form from "./pages/Form.jsx";
import Error from "./pages/Error.jsx";


function App() {

    const router = createBrowserRouter([
        {path: "/", element: <Home/>},
        {path: "/search", element: <Search/>},
        {path: "/Iscriviti", element: < Form/>},
        {path: "*", element: < Error/>}


    ]);

    return (
        <RouterProvider router={router}/>
    );
}

export default App;
