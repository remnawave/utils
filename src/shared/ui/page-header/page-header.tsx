import type { ReactNode } from 'react'

import { Group, Stack, Text, ThemeIcon, ThemeIconProps, Title } from '@mantine/core'

interface PageHeaderProps {
    description: ReactNode
    icon: ReactNode
    iconVariant?: ThemeIconProps['variant']
    title: string
}

export function PageHeader({
    icon,
    title,
    description,
    iconVariant = 'gradient-cyan'
}: PageHeaderProps) {
    return (
        <Stack align="center" gap="lg" mb="xl">
            <Group gap="md">
                <ThemeIcon radius="lg" size={56} variant={iconVariant}>
                    {icon}
                </ThemeIcon>
                <Title order={1} size="2.5rem">
                    {title}
                </Title>
            </Group>
            <Text c="dimmed" size="lg" ta="center">
                {description}
            </Text>
        </Stack>
    )
}
