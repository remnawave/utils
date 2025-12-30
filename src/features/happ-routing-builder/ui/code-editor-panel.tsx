import { JsonInput, Paper, Stack } from '@mantine/core'
import { IconCode } from '@tabler/icons-react'

import { BaseOverlayHeader } from '@shared/ui/base-overlay-header'

import styles from './happ-routing-builder.module.css'

interface CodeEditorPanelProps {
    onChange: (value: string) => void
    value: string
}

export function CodeEditorPanel({ value, onChange }: CodeEditorPanelProps) {
    return (
        <Paper className={styles.paper} h="100%" p="md">
            <Stack gap="md" h="100%">
                <BaseOverlayHeader
                    IconComponent={IconCode}
                    iconSize={24}
                    iconVariant="gradient-blue"
                    subtitle="Edit your routing rules in JSON format"
                    title="JSON Editor"
                />

                <JsonInput
                    autosize
                    classNames={{ input: styles.jsonEditor }}
                    formatOnBlur
                    maxRows={25}
                    minRows={15}
                    onChange={onChange}
                    value={value}
                />
            </Stack>
        </Paper>
    )
}

