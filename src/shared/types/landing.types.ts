import { ReactNode } from 'react'

export type CardColor = 'blue' | 'cyan' | 'green' | 'violet'

export interface IFeature {
    color: CardColor
    description: string
    icon: ReactNode
    title: string
}

export interface IStat {
    color: CardColor
    icon: ReactNode
    label: string
    value: string
}

export interface ILink {
    external?: boolean
    href: string
    label: string
}

export interface INavigationLink {
    external?: boolean
    href: string
    icon: ReactNode
    label: string
}

export interface ISocialLink {
    color: string
    href: string
    icon: ReactNode
    label: string
}
