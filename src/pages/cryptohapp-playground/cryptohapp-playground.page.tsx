import {
    Anchor,
    Divider,
    Group,
    SimpleGrid,
    Stack,
    Text,
    ThemeIcon,
    ThemeIconProps,
    Title
} from '@mantine/core'
import { IconBook, IconBrandGithub, IconBrandNpm, IconLock } from '@tabler/icons-react'

import { DecryptCard, EncryptCard } from '@features/cryptohapp'
import { AnimatedSection, PageLayout } from '@shared/ui'

interface IFooterLink {
    href: string
    icon: React.ReactNode
    label: string
    variant: ThemeIconProps['variant']
}

const FOOTER_LINKS = [
    {
        href: 'https://www.npmjs.com/package/@kastov/cryptohapp',
        icon: <IconBrandNpm size={18} />,
        label: 'NPM Package',
        variant: 'gradient-red'
    },
    {
        href: 'https://github.com/remnawave/cryptohapp',
        icon: <IconBrandGithub size={18} />,
        label: 'GitHub',
        variant: 'gradient-gray'
    },
    {
        href: 'https://www.happ.su/main/developer-documentation/crypto-link',
        icon: <IconBook size={18} />,
        label: 'Happ Docs',
        variant: 'gradient-blue'
    }
] satisfies IFooterLink[]

export function CryptohappPlaygroundPage() {
    return (
        <PageLayout maxWidth={1200}>
            <AnimatedSection>
                <Stack align="center" gap="lg" mb="xl">
                    <Group gap="md">
                        <ThemeIcon radius="lg" size={56} variant="gradient-cyan">
                            <IconLock size={28} />
                        </ThemeIcon>
                        <Title order={1} size="2.5rem">
                            CryptoHapp Playground
                        </Title>
                    </Group>
                    <Text c="dimmed" size="lg" ta="center">
                        Encrypt content to create Happ deep links, or decrypt content using your
                        private key.
                    </Text>
                </Stack>
            </AnimatedSection>

            <AnimatedSection>
                <SimpleGrid cols={{ base: 1, lg: 2 }} spacing={{ base: 'md', sm: 'lg', lg: 'xl' }}>
                    <EncryptCard />
                    <DecryptCard />
                </SimpleGrid>
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
