import type { ReactNode } from 'react'

import { Container } from '@mantine/core'
import { motion } from 'motion/react'

import { containerVariants } from '@shared/config'
import { Header } from '@widgets/header'

interface PageLayoutProps {
    children: ReactNode
    gap?: string
    maxWidth?: number
}

export function PageLayout({ children, maxWidth = 1400, gap = '3rem' }: PageLayoutProps) {
    return (
        <>
            <Header />
            <div className="background" />
            <div className="wrapper">
                <Container
                    maw={maxWidth}
                    px={{ base: 'md', sm: 'lg', md: 'xl' }}
                    py={{ base: 'xl', sm: '3rem', md: '4rem' }}
                    style={{ position: 'relative', zIndex: 1 }}
                >
                    <motion.div
                        animate="visible"
                        initial="hidden"
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: `var(--section-gap, ${gap})`
                        }}
                        variants={containerVariants}
                    >
                        {children}
                    </motion.div>
                </Container>
            </div>
        </>
    )
}
