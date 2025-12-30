import { SimpleGrid, Stack, Text, ThemeIconProps, Title } from '@mantine/core'
import { IconLock, IconRocket, IconRoute } from '@tabler/icons-react'

import { AnimatedSection, PageLayout } from '@shared/ui'
import { ROUTES } from '@shared/constants'
import { UtilityCard } from '@widgets'

interface IUtility {
    badge?: string
    badgeColor?: string
    description: string
    external?: boolean
    href: string
    icon: React.ReactNode
    title: string
    variant?: ThemeIconProps['variant']
}

const UTILITIES = [
    {
        title: 'Try Remnawave',
        description:
            'Experience the power of Remnawave with zero setup. Deploy your own instance in minutes and explore all features risk-free.',
        icon: <IconRocket size={28} />,
        href: 'https://try.tg',
        badge: 'Free',
        badgeColor: 'violet',
        external: true,
        variant: 'gradient-violet'
    },
    {
        title: 'Happ Routing Builder',
        description:
            'Create and configure routing rules for Happ client. Build routing configurations visually and export as Happ deep links.',
        icon: <IconRoute size={28} />,
        href: ROUTES.HAPP_ROUTING_BUILDER,
        badgeColor: 'green'
    },
    {
        title: 'Cryptohapp Playground',
        description:
            'Test encryption and decryption of Happ crypto deep links. Create encrypted links or decrypt them with your private key.',
        icon: <IconLock size={28} />,
        href: ROUTES.CRYPTOHAPP_PLAYGROUND,
        badgeColor: 'green'
    }
] satisfies IUtility[]

export function HomePage() {
    return (
        <PageLayout gap="4rem">
            <AnimatedSection>
                <Stack align="center" gap="lg" mb="xl">
                    <Title order={1} size="3rem" ta="center">
                        Remnawave Utilities
                    </Title>
                    <Text c="dimmed" size="lg" ta="center">
                        A collection of useful tools for working with Remnawave.
                        <br /> Select the utility you need from the list below.
                    </Text>
                </Stack>
            </AnimatedSection>

            <AnimatedSection>
                <SimpleGrid
                    cols={{ base: 1, sm: 2, lg: 3 }}
                    spacing={{ base: 'md', sm: 'lg', lg: 'xl' }}
                >
                    {UTILITIES.map((utility) => (
                        <UtilityCard
                            badge={utility.badge}
                            badgeColor={utility.badgeColor}
                            description={utility.description}
                            external={utility.external}
                            href={utility.href}
                            icon={utility.icon}
                            key={utility.href}
                            title={utility.title}
                            variant={utility.variant}
                        />
                    ))}
                </SimpleGrid>
            </AnimatedSection>
        </PageLayout>
    )
}
