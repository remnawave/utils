import { IconFileImport, IconRefresh } from '@tabler/icons-react'
import { Button, Paper, Stack, Text } from '@mantine/core'

import { BaseOverlayHeader } from '@shared/ui/base-overlay-header'
import { StyledInput } from '@shared/ui'

import styles from './happ-routing-builder.module.css'

interface ImportPanelProps {
    error: null | string
    onImport: () => void
    onInputChange: (value: string) => void
    value: string
}

export function ImportPanel({ value, onInputChange, onImport, error }: ImportPanelProps) {
    return (
        <Paper className={styles.paper} h="100%" p="md">
            <Stack h="100%">
                <BaseOverlayHeader
                    IconComponent={IconFileImport}
                    iconSize={24}
                    iconVariant="gradient-cyan"
                    subtitle="Paste a Happ routing link or Base64-encoded config"
                    title="Import Configuration"
                />

                <StyledInput
                    onChange={onInputChange}
                    placeholder="happ://routing/add/... or Base64 string"
                    value={value}
                />

                {error && (
                    <Text c="red" size="sm">
                        {error}
                    </Text>
                )}

                <Button
                    fullWidth
                    leftSection={<IconRefresh size={16} />}
                    mt="auto"
                    onClick={onImport}
                    variant="gradient-cyan"
                >
                    Decode & Import
                </Button>
            </Stack>
        </Paper>
    )
}
