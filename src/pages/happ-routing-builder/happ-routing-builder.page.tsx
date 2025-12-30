import {
    Anchor,
    Divider,
    Group,
    Stack,
    Text,
    ThemeIcon,
    ThemeIconProps,
    Title
} from '@mantine/core'
import { IconBook, IconRoute } from '@tabler/icons-react'

import { HappRoutingBuilder } from '@features/happ-routing-builder'
import { AnimatedSection, PageLayout } from '@shared/ui'

interface IFooterLink {
    href: string
    icon: React.ReactNode
    label: string
    variant: ThemeIconProps['variant']
}

const FOOTER_LINKS = [
    {
        href: 'https://www.happ.su/main/developer-documentation/routing',
        icon: <IconBook size={18} />,
        label: 'Routing Docs',
        variant: 'gradient-blue'
    }
] satisfies IFooterLink[]

export function HappRoutingBuilderPage() {
    return (
        <PageLayout gap="2rem">
            <AnimatedSection>
                <Stack align="center" gap="lg" mb="md">
                    <Group gap="md">
                        <ThemeIcon radius="lg" size={56} variant="gradient-cyan">
                            <IconRoute size={28} />
                        </ThemeIcon>
                        <Title order={1} size="2.5rem">
                            Happ Routing Builder
                        </Title>
                    </Group>
                    <Text c="dimmed" size="lg" ta="center">
                        Create and configure routing rules for Happ.
                        <br />
                        Build your routing configuration visually and export it as a Happ deep link.
                    </Text>
                </Stack>
            </AnimatedSection>

            <AnimatedSection>
                <HappRoutingBuilder />
            </AnimatedSection>

            <AnimatedSection>
                <Stack gap="lg" pt="xl">
                    <Divider opacity={0.3} />

                    <Group gap="xl" justify="center" wrap="wrap">
                        {FOOTER_LINKS.map((link, index) => (
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
            </AnimatedSection>
        </PageLayout>
    )
}
