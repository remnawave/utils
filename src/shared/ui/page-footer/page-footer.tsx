import { Anchor, Divider, Group, Stack, Text, ThemeIcon, ThemeIconProps } from '@mantine/core'

export interface FooterLink {
    href: string
    icon: React.ReactNode
    label: string
    variant: ThemeIconProps['variant']
}

interface PageFooterProps {
    links: FooterLink[]
}

export function PageFooter({ links }: PageFooterProps) {
    return (
        <Stack gap="lg" pt="xl">
            <Divider opacity={0.3} />
            <Group gap="xl" justify="center" wrap="wrap">
                {links.map((link, index) => (
                    <Anchor
                        href={link.href}
                        key={index}
                        rel="noopener noreferrer"
                        style={{ textDecoration: 'none' }}
                        target="_blank"
                    >
                        <Group gap="xs">
                            <ThemeIcon radius="md" size="lg" variant={link.variant}>
                                {link.icon}
                            </ThemeIcon>
                            <Text c="dimmed" fw={500} size="sm">
                                {link.label}
                            </Text>
                        </Group>
                    </Anchor>
                ))}
            </Group>
        </Stack>
    )
}
