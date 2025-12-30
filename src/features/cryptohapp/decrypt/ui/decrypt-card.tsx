import { Box, Button, Card, Group, Stack, Text, Textarea, ThemeIcon } from '@mantine/core'
import { IconLockOpen } from '@tabler/icons-react'
import { motion } from 'motion/react'
import JSEncrypt from 'jsencrypt'
import { useState } from 'react'

import { CopyableCodeBlock } from '@shared/ui/copyable-code-block'

import styles from './decrypt-card.module.css'

const EXAMPLE_PRIVATE_KEY = `-----BEGIN RSA PRIVATE KEY-----
Paste your private key here...
-----END RSA PRIVATE KEY-----`

export function DecryptCard() {
    const [privateKey, setPrivateKey] = useState('')
    const [encryptedContent, setEncryptedContent] = useState('')
    const [decryptedContent, setDecryptedContent] = useState<null | string>(null)
    const [error, setError] = useState<null | string>(null)

    const handleDecrypt = () => {
        setError(null)
        setDecryptedContent(null)

        if (!privateKey.trim()) {
            setError('Please enter a valid private key')
            return
        }

        if (!encryptedContent.trim()) {
            setError('Please enter encrypted content')
            return
        }

        try {
            const decrypt = new JSEncrypt()
            decrypt.setPrivateKey(privateKey)

            let contentToDecrypt = encryptedContent.trim()
            const prefixes = ['happ://crypt2/', 'happ://crypt3/', 'happ://crypt4/']
            for (const prefix of prefixes) {
                if (contentToDecrypt.startsWith(prefix)) {
                    contentToDecrypt = contentToDecrypt.slice(prefix.length)
                    break
                }
            }

            const decrypted = decrypt.decrypt(contentToDecrypt)

            if (decrypted) {
                setDecryptedContent(decrypted)
            } else {
                setError(
                    'Decryption failed. Make sure you are using the correct private key for this encrypted content.'
                )
            }
        } catch {
            setError('Decryption error. Please check your private key format.')
        }
    }

    return (
        <motion.div transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
            <Card className={styles.card} padding="xl" radius="lg">
                <Stack gap="lg">
                    <Group gap="md">
                        <ThemeIcon
                            className={styles.icon}
                            radius="xl"
                            size={48}
                            variant="gradient-orange"
                        >
                            <IconLockOpen size={24} />
                        </ThemeIcon>
                        <Box>
                            <Text fw={700} size="xl">
                                Decrypt
                            </Text>
                            <Text c="dimmed" size="sm">
                                Decrypt content with private key
                            </Text>
                        </Box>
                    </Group>

                    <Textarea
                        autosize
                        description="Your RSA private key (PEM format)"
                        label="Private Key"
                        maxRows={8}
                        minRows={8}
                        onChange={(e) => setPrivateKey(e.currentTarget.value)}
                        placeholder={EXAMPLE_PRIVATE_KEY}
                        size="md"
                        styles={{
                            input: {
                                fontFamily: 'Fira Mono, monospace',
                                fontSize: '0.70rem'
                            }
                        }}
                        value={privateKey}
                    />

                    <Textarea
                        autosize
                        description="Base64 encoded encrypted content or full deep link"
                        label="Encrypted Content"
                        maxRows={6}
                        minRows={6}
                        onChange={(e) => setEncryptedContent(e.currentTarget.value)}
                        placeholder="happ://crypt4/base64encodeddata... or just base64encodeddata..."
                        size="md"
                        styles={{
                            input: {
                                fontFamily: 'Fira Mono, monospace',
                                fontSize: '0.70rem'
                            }
                        }}
                        value={encryptedContent}
                    />

                    <Button
                        color="orange"
                        fullWidth
                        leftSection={<IconLockOpen size={18} />}
                        onClick={handleDecrypt}
                        size="md"
                        variant="light"
                    >
                        Decrypt
                    </Button>

                    {error && (
                        <Text c="red" size="sm">
                            {error}
                        </Text>
                    )}

                    {decryptedContent && (
                        <Stack>
                            <Text fw={500} size="sm">
                                Decrypted Content
                            </Text>

                            <CopyableCodeBlock color="green.4" value={decryptedContent} />
                        </Stack>
                    )}
                </Stack>
            </Card>
        </motion.div>
    )
}
