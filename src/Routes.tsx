import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout/>}/>
            <Route path="/" element={<HomePage />} />
        </Routes>
    )
}