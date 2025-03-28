import React from 'react'
import { Outlet } from 'react-router-dom'

import { Footer } from '@/common/components/Footer'
import { Header } from '@/common/components/Header'

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
