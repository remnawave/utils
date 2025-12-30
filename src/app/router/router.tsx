import {
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    Route,
    RouterProvider
} from 'react-router-dom'

import { CryptohappPlaygroundPage } from '@pages/cryptohapp-playground'
import { HappRoutingBuilderPage } from '@pages/happ-routing-builder'
import { HomePage } from '@pages/home'

import { ROUTES } from '../../shared/constants'

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<HomePage />} path={ROUTES.ROOT} />
            <Route element={<CryptohappPlaygroundPage />} path={ROUTES.CRYPTOHAPP_PLAYGROUND} />
            <Route element={<HappRoutingBuilderPage />} path={ROUTES.HAPP_ROUTING_BUILDER} />
            <Route element={<Navigate replace to={ROUTES.ROOT} />} path="*" />
        </>
    )
)

export function Router() {
    return <RouterProvider router={router} />
}
