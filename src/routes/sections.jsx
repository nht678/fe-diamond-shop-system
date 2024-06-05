import { lazy, Suspense } from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';

export const IndexPage = lazy(() => import('src/pages/app'));
// export const BlogPage = lazy(() => import('src/pages/blog'));
export const UserPage = lazy(() => import('src/pages/user'));
export const LoginPage = lazy(() => import('src/pages/login'));
// export const ProductsPage = lazy(() => import('src/pages/products'));
// export const Page404 = lazy(() => import('src/pages/page-not-found'));
// export const Hello = lazy(() => import('src/pages/test'));
export const Promotion = lazy(() => import('src/pages/promotion'));
export const Customer = lazy(() => import('src/pages/customer'));
export const Jewellery = lazy(() => import('src/pages/jewellery'));
export const Staff = lazy(() => import('src/pages/staff'));
export const GoldPrice = lazy(() => import ('src/pages/goldprice'))
// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <IndexPage />, index: true },
        { path: 'user', element: <UserPage /> },
        // { path: 'products', element: <ProductsPage /> },
        // { path: 'blog', element: <BlogPage /> },
        // { path: 'test', element: <Hello /> },
        { path: 'promotion', element: <Promotion /> },
        { path: 'customer', element: <Customer /> },
        { path: 'jewellery', element: <Jewellery /> },
        { path: 'staff', element: <Staff /> },
        { path: 'goldprice', element: <GoldPrice />},
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    // {
    //   path: '404',
    //   element: <Page404 />,
    // },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
