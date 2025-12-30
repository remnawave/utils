import type { ReactNode } from 'react'

import { Badge, Box, Card, Group, Stack, Text, ThemeIcon, ThemeIconProps } from '@mantine/core'
import { IconChevronRight, IconExternalLink } from '@tabler/icons-react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

import styles from './utility-card.module.css'

interface UtilityCardProps {
    badge?: string
    badgeColor?: string
    description: string
    external?: boolean
    href: string
    icon: ReactNode
    title: string
    variant?: ThemeIconProps['variant']
}

export function UtilityCard({
    title,
    description,
    icon,
    href,
    badge,
    badgeColor = 'cyan',
    external = false,
    variant = 'gradient-cyan'
}: UtilityCardProps) {
    const cardContent = (
        <Stack gap="lg">
            <Group align="flex-start" justify="space-between">
                <ThemeIcon className={styles.icon} radius="lg" size={56} variant={variant}>
                    {icon}
                </ThemeIcon>
                {badge && (
                    <Badge color={badgeColor} size="sm" variant="light">
                        {badge}
                    </Badge>
                )}
            </Group>

            <Stack gap="xs">
                <Text className={styles.title} fw={700} size="xl">
                    {title}
                </Text>
                <Text c="dimmed" className={styles.description} size="sm">
                    {description}
                </Text>
            </Stack>

            <Box className={styles.arrowContainer}>
                <Group className={styles.arrow} gap="xs">
                    <Text c="cyan.4" fw={600} size="sm">
                        {external ? 'Visit' : 'Open'}
                    </Text>
                    {external ? (
                        <IconExternalLink className={styles.arrowIcon} size={18} />
                    ) : (
                        <IconChevronRight className={styles.arrowIcon} size={18} />
                    )}
                </Group>
            </Box>
        </Stack>
    )

    return (
        <motion.div transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
            {external ? (
                <Card
                    className={styles.card}
                    component="a"
                    href={href}
                    padding="xl"
                    radius="lg"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    {cardContent}
                </Card>
            ) : (
                <Card className={styles.card} component={Link} padding="xl" radius="lg" to={href}>
                    {cardContent}
                </Card>
            )}
        </motion.div>
    )
}
