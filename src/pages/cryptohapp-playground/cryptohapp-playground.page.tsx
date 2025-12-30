import { IconBook, IconBrandGithub, IconBrandNpm, IconLock } from '@tabler/icons-react'
import { SimpleGrid } from '@mantine/core'

import { AnimatedSection, type FooterLink, PageFooter, PageHeader, PageLayout } from '@shared/ui'
import { DecryptCard, EncryptCard } from '@features/cryptohapp'

const FOOTER_LINKS: FooterLink[] = [
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
]

export function CryptohappPlaygroundPage() {
    return (
        <PageLayout maxWidth={1200}>
            <AnimatedSection>
                <PageHeader
                    description="Encrypt content to create Happ deep links, or decrypt content using your private key."
                    icon={<IconLock size={28} />}
                    title="CryptoHapp Playground"
                />
            </AnimatedSection>

            <AnimatedSection>
                <SimpleGrid cols={{ base: 1, lg: 2 }} spacing={{ base: 'md', sm: 'lg', lg: 'xl' }}>
                    <EncryptCard />
                    <DecryptCard />
                </SimpleGrid>
            </AnimatedSection>

            <AnimatedSection>
                <PageFooter links={FOOTER_LINKS} />
            </AnimatedSection>
        </PageLayout>
    )
}
