import {
    IconBox,
    IconBrandGithub,
    IconBrandTelegram,
    IconCloudDataConnection,
    IconDevices,
    IconRocket,
    IconServer,
    IconShieldCheck,
    IconUsers
} from '@tabler/icons-react'

import type { IFeature, ILink, ISocialLink, IStat } from '@shared/types'

export const FEATURES: IFeature[] = [
    {
        icon: <IconServer size={24} />,
        title: 'Multiple nodes support',
        description: 'Connect as many nodes as you want, and manage them all in one place.',
        color: 'cyan'
    },
    {
        icon: <IconUsers size={24} />,
        title: 'User Management',
        description: 'Create and manage users with flexible settings.',
        color: 'violet'
    },
    {
        icon: <IconCloudDataConnection size={24} />,
        title: 'REST API',
        description:
            'Full-featured REST API with comprehensive documentation for easy integration.',
        color: 'blue'
    },
    {
        icon: <IconBox size={24} />,
        title: 'Protocols support',
        description: 'Support for all major protocols: VLESS, Trojan, Shadowsocks.',
        color: 'green'
    },
    {
        icon: <IconDevices size={24} />,
        title: 'Subscription Links',
        description:
            'Remnawave providers for your users to connect to. Supports all major client applications.',
        color: 'cyan'
    },
    {
        icon: <IconShieldCheck size={24} />,
        title: 'Security First',
        description:
            'Auth with Passkeys, GitHub, and more. Connections to nodes are secured with mTLS.',
        color: 'violet'
    }
]

export const STATS: IStat[] = [
    {
        icon: <IconUsers size={32} />,
        label: 'Community members',
        value: '3K+',
        color: 'violet'
    },
    {
        icon: <IconRocket size={32} />,
        label: 'DockerHub pulls',
        value: '40K+',
        color: 'cyan'
    }
]

export const PRIMARY_ACTIONS: ILink[] = [
    {
        href: '/docs/overview/quick-start',
        label: 'Get started'
    },
    {
        href: 'https://try.tg',
        label: 'Try risk-free',
        external: true
    }
]

export const SECONDARY_ACTIONS: ILink[] = [
    {
        href: 'https://t.me/remnawave',
        label: 'Join Community',
        external: true
    },
    {
        href: '/docs/donate',
        label: 'Sponsor'
    }
]

export const SOCIAL_LINKS: ISocialLink[] = [
    {
        href: 'https://github.com/remnawave',
        icon: <IconBrandGithub size={18} />,
        label: 'GitHub',
        color: 'gray'
    },
    {
        href: 'https://t.me/remnawave',
        icon: <IconBrandTelegram size={18} />,
        label: 'Telegram',
        color: 'blue'
    }
]

export const LANDING_CONTENT = {
    hero: {
        title: {
            highlighted: 'Remna',
            normal: 'wave'
        },
        subtitle: {
            highlighted: 'Proxy and user management',
            normal: 'solution'
        },
        description:
            'Built on top of Xray Core, Remnawave provides rich functionality for user and proxy management. Easily add users, nodes, configure Xray and much more with a feature-rich REST API powered by NestJS.'
    },
    features: {
        badge: 'KEY FEATURES',
        title: 'Everything You Need'
    },
    footer: {
        creator: {
            text: 'Created by',
            name: 'kastov',
            link: 'https://github.com/kastov'
        },
        community: {
            text: 'and',
            name: 'community',
            link: 'https://t.me/remnawave'
        }
    }
}
