import { IconBrandGithub, IconHome } from '@tabler/icons-react'

import type { INavigationLink } from '@shared/types'

export const NAVIGATION_LINKS: INavigationLink[] = [
    {
        href: '/',
        label: 'Home',
        icon: <IconHome size={18} />
    },
    {
        href: 'https://github.com/remnawave',
        label: 'GitHub',
        icon: <IconBrandGithub size={18} />,
        external: true
    }
]
