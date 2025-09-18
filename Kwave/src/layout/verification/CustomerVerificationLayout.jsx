import React from 'react'
import { Outlet } from 'react-router'
// import Header from '../../../components/customer/Header'
// import Footer from '../../../components/customer/Footer'

const CustomerVerificationLayout = () => {
  return (
    <>
        {/* <Header /> */}
        <Outlet />
        <Footer />
    </>
  )
}

export default CustomerVerificationLayout
