import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import PageNotFound from './PageNotFound'
import DashBoard from './DashBoard'
import Details from './Details'
import Budget from './Budget'
import { ProfilePage } from './ProfilePage'
import PrivateRoute from './PrivateRoute'
import { Withdraw } from './Withdraw'
import { Transaction } from './Transaction'

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
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/budget' element={<Budget/>}/>
        <Route path='/withdraw' element={<Withdraw/>}/>
        <Route path='/transaction' element={<Transaction/>}/>
    </Routes>
  )
}

export default MainRoutes
