import '@mantine/core/styles.css'

import './global.css'

import { ModalsProvider } from '@mantine/modals'
import { MantineProvider } from '@mantine/core'

import { theme, variantColorResolver } from '@shared/constants'

import { Router } from './app/router/router'

export function App() {
    return (
        <MantineProvider defaultColorScheme="dark" theme={{ ...theme, variantColorResolver }}>
            <ModalsProvider>
                <Router />
            </ModalsProvider>
        </MantineProvider>
    )
}
