import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import PageNotFound from './PageNotFound'
import DashBoard from './DashBoard'
import Details from './Details'
import Budget from './Budget'
import { ProfilePage } from './ProfilePage'
import PrivateRoute from './PrivateRoute'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/dashboard' element={
          <PrivateRoute>
            <DashBoard/>
          </PrivateRoute>
        }/>
        {/* <Route path='/details' element={<Details/>}/>
        <Route path='/budget' element={<Budget/>}/> */}
    </Routes>
  )
}

export default MainRoutes
