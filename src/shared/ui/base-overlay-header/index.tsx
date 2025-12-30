import { Group, Stack, Text, ThemeIcon, ThemeIconProps, Title, TitleProps } from '@mantine/core'

type IProps = {
    actionIconProps?: ThemeIconProps
    IconComponent: React.ComponentType<{ size: number }>
    iconSize?: number
    iconVariant: ThemeIconProps['variant']
    subtitle?: string
    themeIconSize?: ThemeIconProps['size']
    title: string
    titleOrder?: TitleProps['order']
}

export const BaseOverlayHeader = (props: IProps) => {
    const {
        actionIconProps,
        IconComponent,
        iconSize = 20,
        iconVariant,
        subtitle,
        themeIconSize = 'xl',
        title,
        titleOrder = 4
    } = props

    return (
        <Group gap="sm" wrap="nowrap">
            <ThemeIcon size={themeIconSize} variant={iconVariant} {...actionIconProps}>
                <IconComponent size={iconSize} />
            </ThemeIcon>

            <Stack gap="0">
                <Title c="white" order={titleOrder}>
                    {title}
                </Title>
                <Text c="dimmed" size="xs">
                    {subtitle}
                </Text>
            </Stack>
        </Group>
    )
}
