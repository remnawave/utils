import { IconBook, IconRoute } from '@tabler/icons-react'

import { AnimatedSection, type FooterLink, PageFooter, PageHeader, PageLayout } from '@shared/ui'
import { HappRoutingBuilder } from '@features/happ-routing-builder'

const FOOTER_LINKS: FooterLink[] = [
    {
        href: 'https://www.happ.su/main/developer-documentation/routing',
        icon: <IconBook size={18} />,
        label: 'Routing Docs',
        variant: 'gradient-blue'
    }
]

export function HappRoutingBuilderPage() {
    return (
        <PageLayout gap="2rem">
            <AnimatedSection>
                <PageHeader
                    description={
                        <>
                            Create and configure routing rules for Happ.
                            <br />
                            Build your routing configuration visually and export it as a Happ deep
                            link.
                        </>
                    }
                    icon={<IconRoute size={28} />}
                    title="Happ Routing Builder"
                />
            </AnimatedSection>

            <AnimatedSection>
                <HappRoutingBuilder />
            </AnimatedSection>

            <AnimatedSection>
                <PageFooter links={FOOTER_LINKS} />
            </AnimatedSection>
        </PageLayout>
    )
}
