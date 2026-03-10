import ReactDom from "react-dom/client"
import App from "./App"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Success from "./Success"
import Fail from "./Fail"

const mainRoot=ReactDom.createRoot(document.getElementById("root"))

mainRoot.render(
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/success' element={<Success />}></Route>
        <Route path='/fail' element={<Fail />}></Route>
    </Routes>
    </BrowserRouter>
)