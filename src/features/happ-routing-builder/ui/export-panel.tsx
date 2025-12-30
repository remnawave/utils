import { Button, Paper, Stack } from '@mantine/core'
import { modals } from '@mantine/modals'
import { IconLink, IconQrcode } from '@tabler/icons-react'
import { renderSVG } from 'uqr'

import { BaseOverlayHeader } from '@shared/ui/base-overlay-header'
import { CopyableCodeBlock } from '@shared/ui'

import styles from './happ-routing-builder.module.css'

interface ExportPanelProps {
    happLink: string
}

export function ExportPanel({ happLink }: ExportPanelProps) {
    const showQrCode = () => {
        const qrCode = renderSVG(happLink, {
            whiteColor: '#161B22',
            blackColor: '#3CC9DB'
        })

        modals.open({
            centered: true,
            title: 'Happ Routing QR Code',
            children: (
                <>
                    <div dangerouslySetInnerHTML={{ __html: qrCode }} />
                    <Button fullWidth mt="md" onClick={() => modals.closeAll()} variant="light">
                        Close
                    </Button>
                </>
            )
        })
    }

    return (
        <Paper className={styles.paper} h="100%" p="md">
            <Stack h="100%">
                <BaseOverlayHeader
                    IconComponent={IconLink}
                    iconSize={24}
                    iconVariant="gradient-teal"
                    subtitle="Copy this link or scan QR to import in Happ"
                    title="Generated Link"
                />

                <CopyableCodeBlock value={happLink} />

                <Button
                    fullWidth
                    leftSection={<IconQrcode size={16} />}
                    mt="auto"
                    onClick={showQrCode}
                    variant="gradient-teal"
                >
                    Show QR Code
                </Button>
            </Stack>
        </Paper>
    )
}

