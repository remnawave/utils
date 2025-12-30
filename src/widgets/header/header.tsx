import {
    Anchor,
    Box,
    Burger,
    Container,
    Drawer,
    Group,
    Stack,
    Text,
    UnstyledButton
} from '@mantine/core'
import { useDisclosure, useWindowScroll } from '@mantine/hooks'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

import { RemnawaveLogo } from '@shared/remnawave-logo'
import { NAVIGATION_LINKS } from '@shared/config'

import styles from './header.module.css'

export function Header() {
    const [opened, { toggle, close }] = useDisclosure(false)
    const [scroll] = useWindowScroll()
    const [isScrolled, setIsScrolled] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        setIsScrolled(scroll.y > 50)
    }, [scroll.y])

    return (
        <>
            <Box
                className={`${styles.header} ${isScrolled ? styles.headerScrolled : styles.headerDefault}`}
                component="header"
            >
                <Container maw={1400} px={{ base: 'md', sm: 'lg', md: 'xl' }} py="md">
                    <Group justify="space-between" wrap="nowrap">
                        <motion.div
                            animate={{ opacity: 1, x: 0 }}
                            className={styles.fadeInLeft}
                            initial={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <UnstyledButton className={styles.logo} onClick={() => navigate('/')}>
                                <Group gap="xs" wrap="nowrap">
                                    <RemnawaveLogo color="var(--mantine-color-cyan-4)" size={32} />
                                    <Text
                                        className={styles.logoText}
                                        ff="Unbounded"
                                        fw={700}
                                        size="xl"
                                    >
                                        <Text
                                            className={styles.logoTextHighlight}
                                            component="span"
                                            inherit
                                        >
                                            Remna
                                        </Text>
                                        <Text
                                            className={styles.logoTextNormal}
                                            component="span"
                                            inherit
                                        >
                                            wave
                                        </Text>

                                        <Text
                                            className={styles.logoTextNormal}
                                            component="span"
                                            inherit
                                        >
                                            {' '}
                                            Utils
                                        </Text>
                                    </Text>
                                </Group>
                            </UnstyledButton>
                        </motion.div>

                        <div className={styles.nav}>
                            {NAVIGATION_LINKS.map((link, index) => (
                                <motion.div
                                    animate={{ opacity: 1, y: 0 }}
                                    initial={{ opacity: 0, y: -10 }}
                                    key={link.href}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    {link.external ? (
                                        <Anchor
                                            className={styles.navLink}
                                            href={link.href}
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                            <Box className={styles.navIcon}>{link.icon}</Box>
                                            <Text className={styles.navText}>{link.label}</Text>
                                        </Anchor>
                                    ) : (
                                        <UnstyledButton
                                            className={styles.navLink}
                                            onClick={() => navigate(link.href)}
                                        >
                                            <Box className={styles.navIcon}>{link.icon}</Box>
                                            <Text className={styles.navText}>{link.label}</Text>
                                        </UnstyledButton>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        <Burger hiddenFrom="lg" onClick={toggle} opened={opened} size="md" />
                    </Group>
                </Container>
            </Box>

            <Drawer
                closeButtonProps={{
                    size: 'xl'
                }}
                hiddenFrom="lg"
                onClose={close}
                opened={opened}
                padding="lg"
                position="right"
                size="400px"
                styles={{
                    content: {
                        backdropFilter: 'blur(20px)'
                    },
                    header: {
                        background: 'transparent'
                    }
                }}
            >
                <Stack className={styles.mobileNav}>
                    {NAVIGATION_LINKS.map((link) =>
                        link.external ? (
                            <Anchor
                                className={styles.mobileNavLink}
                                href={link.href}
                                key={link.href}
                                onClick={close}
                                rel="noopener noreferrer"
                                target="_blank"
                                td="none"
                            >
                                <Box className={styles.mobileNavIcon}>{link.icon}</Box>
                                <Text className={styles.mobileNavText}>{link.label}</Text>
                            </Anchor>
                        ) : (
                            <UnstyledButton
                                className={styles.mobileNavLink}
                                key={link.href}
                                onClick={() => {
                                    navigate(link.href)
                                    close()
                                }}
                            >
                                <Box className={styles.mobileNavIcon}>{link.icon}</Box>
                                <Text className={styles.mobileNavText}>{link.label}</Text>
                            </UnstyledButton>
                        )
                    )}
                </Stack>
            </Drawer>

            <Box h={{ base: 64, sm: 72 }} />
        </>
    )
}
