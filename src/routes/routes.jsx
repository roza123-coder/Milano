import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

// import { ProductDetail } from '../pages/ProductDetail'
// import { Shop } from '../pages/Shop'
// import { SuccessPage } from '../pages/SuccessPage'

import { ROUTER_PATHS } from './routesPaths'
import { Product } from '@/common/components/Product'
import Layout from '@/layouts/Layout'
// import { Brand } from '../pages/Brand'
import { Cart } from '@/pages/Cart'
import { Catalog } from '@/pages/Catalog'
import { Checkout } from '@/pages/Checkout'
import { DetailCatalog } from '@/pages/DetailCatalog'
import { Main } from '@/pages/Main'

// import { Checkout } from '../pages/Checkout'
// import Contacts from '../pages/Contacts/Contacts'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: ROUTER_PATHS.main,
        element: <Main />,
      },
      {
        path: ROUTER_PATHS.catalog,
        element: <Catalog />,
      },
      {
        path: ROUTER_PATHS.detail_catalog,
        element: <DetailCatalog />,
      },
      {
        path: ROUTER_PATHS.shop,
        element: <Product />,
      },
      // {
      //   path: ROUTER_PATHS.brand,
      //   element: <Brand />,
      // },
      // {
      //   path: ROUTER_PATHS.contacts,
      //   element: <Contacts />,
      // },
      {
        path: ROUTER_PATHS.cart,
        element: <Cart />,
      },
      // {
      //   path: ROUTER_PATHS.product,
      //   element: <ProductDetail />,
      // },
      {
        path: ROUTER_PATHS.checkout,
        element: <Checkout />,
      },
      // {
      //   path: ROUTER_PATHS.success,
      //   element: <SuccessPage />,
      // },
    ],
  },
])
