import React from 'react'
import CompanySignin from './pages/CompanySignin'
import { Route, Routes } from 'react-router-dom'
import CompanyLogin from './pages/CompanyLogin'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/companysignin' element={<CompanySignin />} />
        <Route path='companylogin' element={<CompanyLogin />} />
      </Routes>
      
    </div>
  )
}

export default App
