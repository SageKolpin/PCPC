import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import { AboutPage } from './about';
import Home from './home';
export const Rpath = () => {

    return (
        <>
        <BrowserRouter>
            <Routes>
            <Route path='/' element={<Home/>}>
            </Route>
        <Route path='/about/:aboutId' element={<AboutPage/>}>
        </Route>
            </Routes>
         </BrowserRouter>
        
        
        </>
    )

}