import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './components/create';
import Read from './components/read'
import Update from './components/update'


function RoutesApp(){
    return(
        <BrowserRouter>
             <Routes>
                
                <Route path='/create' element={<Create/>}/>
                <Route path='/' element={<Read/>}/>
                <Route path='/update' element={<Update/>}/>
             </Routes>
        </BrowserRouter>    
    )
}

export default RoutesApp;
