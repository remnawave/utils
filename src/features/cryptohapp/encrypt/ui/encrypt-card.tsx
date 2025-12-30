import { createHappCryptoLink, type HappCryptoVersion } from '@kastov/cryptohapp'
import { Box, Button, Card, SegmentedControl, Stack, Text } from '@mantine/core'
import { IconLock } from '@tabler/icons-react'
import { motion } from 'motion/react'
import { useState } from 'react'

import { CopyableCodeBlock } from '@shared/ui/copyable-code-block'
import { BaseOverlayHeader, StyledInput } from '@shared/ui'

import styles from './encrypt-card.module.css'

export function EncryptCard() {
    const [content, setContent] = useState('https://subscription.link.com/s/remnawavetop')
    const [version, setVersion] = useState<HappCryptoVersion>('v4')
    const [result, setResult] = useState<null | { deepLink: string; encryptedContent: string }>(
        null
    )
    const [error, setError] = useState<null | string>(null)

    const handleEncrypt = () => {
        setError(null)
        const encrypted = createHappCryptoLink(content, version)

        if (encrypted) {
            setResult(encrypted)
        } else {
            setError('Encryption failed. Please check your input.')
            setResult(null)
        }
    }

    const fullLink = result ? result.deepLink + result.encryptedContent : ''

    return (
        <motion.div transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
            <Card className={styles.card} padding="xl" radius="lg">
                <Stack gap="lg">
                    <BaseOverlayHeader
                        IconComponent={IconLock}
                        iconSize={24}
                        iconVariant="gradient-cyan"
                        subtitle="Create Happ crypto deep link"
                        title="Encrypt"
                    />

                    <StyledInput
                        description="URL or text to encrypt"
                        label="Content"
                        onChange={(value) => setContent(value)}
                        placeholder="https://subscription.link.com/s/..."
                        size="md"
                        value={content}
                    />

                    <Box>
                        <Text fw={500} mb="xs" size="sm">
                            Version
                        </Text>
                        <SegmentedControl
                            classNames={{
                                root: styles.segmentedRoot,
                                indicator: styles.segmentedIndicator,
                                label: styles.segmentedLabel
                            }}
                            data={[
                                { label: 'v2', value: 'v2' },
                                { label: 'v3', value: 'v3' },
                                { label: 'v4', value: 'v4' }
                            ]}
                            fullWidth
                            onChange={(v) => setVersion(v as HappCryptoVersion)}
                            radius="md"
                            value={version}
                        />
                    </Box>

                    <Button
                        color="cyan"
                        fullWidth
                        leftSection={<IconLock size={18} />}
                        onClick={handleEncrypt}
                        size="md"
                        variant="light"
                    >
                        Encrypt
                    </Button>

                    {error && (
                        <Text c="red" size="sm">
                            {error}
                        </Text>
                    )}

                    {result && (
                        <Stack gap="md">
                            <CopyableCodeBlock
                                inputWrapperProps={{ label: 'Deep Link Prefix' }}
                                value={result.deepLink}
                            />

                            <CopyableCodeBlock
                                inputWrapperProps={{ label: 'Encrypted Content' }}
                                value={result.encryptedContent}
                            />

                            <CopyableCodeBlock
                                inputWrapperProps={{ label: 'Full Link' }}
                                value={fullLink}
                            />
                        </Stack>
                    )}
                </Stack>
            </Card>
        </motion.div>
    )
}
