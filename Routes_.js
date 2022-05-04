import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import SelectPage from './page/SelectPage'
import UploadPage from './page/UploadPage'
export default function Routes_() {
  return (
    <div>
    <BrowserRouter> 
      <Routes>
      <Route path='/' element={<SelectPage/>}></Route>
      <Route path='/UploadPage' element={<UploadPage/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}
