import {
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    Outlet,
    Route,
    RouterProvider
} from 'react-router-dom'

import { ScrollToTopWrapper } from '@shared/ui/scroll-to-top/scroll-to-top-wrapper'
import { CryptohappPlaygroundPage } from '@pages/cryptohapp-playground'
import { HappRoutingBuilderPage } from '@pages/happ-routing-builder'
import { HomePage } from '@pages/home'

import { ROUTES } from '../../shared/constants'

function RootLayout() {
    return (
        <ScrollToTopWrapper>
            <Outlet />
        </ScrollToTopWrapper>
    )
}

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<RootLayout />} path="/">
            <Route element={<HomePage />} index />
            <Route element={<CryptohappPlaygroundPage />} path={ROUTES.CRYPTOHAPP_PLAYGROUND} />
            <Route element={<HappRoutingBuilderPage />} path={ROUTES.HAPP_ROUTING_BUILDER} />
            <Route element={<Navigate replace to={ROUTES.ROOT} />} path="*" />
        </Route>
    )
)

export function Router() {
    return <RouterProvider router={router} />
}
