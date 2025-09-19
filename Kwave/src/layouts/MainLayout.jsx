import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header/Header';
import { Provider } from 'react-redux';
import { UserProfileProvider } from '../contexts/UserProfileContext';
import { store } from "../store"
const MainLayout = () => {

  return (
    <Provider store={store}>
   <UserProfileProvider>
     <Header/>
      <Outlet />
   </UserProfileProvider>
 </Provider>

)

}

export default MainLayout