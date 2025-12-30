import {
    ActionIcon,
    Box,
    Button,
    Card,
    Group,
    Select,
    Stack,
    Text,
    Textarea,
    ThemeIcon,
    Tooltip
} from '@mantine/core'
import { IconLockOpen, IconPlus, IconTrash } from '@tabler/icons-react'
import { useDisclosure } from '@mantine/hooks'
import { motion } from 'motion/react'
import JSEncrypt from 'jsencrypt'
import { useState } from 'react'

import { CopyableCodeBlock } from '@shared/ui/copyable-code-block'

import { useDecryptKeys, useDecryptKeysActions, useSelectedKey, useSelectedKeyId } from '../model'
import styles from './decrypt-card.module.css'
import { AddKeyModal } from './add-key-modal'

export function DecryptCard() {
    const [encryptedContent, setEncryptedContent] = useState('')
    const [decryptedContent, setDecryptedContent] = useState<null | string>(null)
    const [error, setError] = useState<null | string>(null)
    const [modalOpened, { open: openModal, close: closeModal }] = useDisclosure(false)

    const keys = useDecryptKeys()
    const selectedKeyId = useSelectedKeyId()
    const selectedKey = useSelectedKey()
    const { deleteKey, selectKey } = useDecryptKeysActions()

    const keyOptions = keys.map((k) => ({ label: k.name, value: k.id }))

    const handleDecrypt = () => {
        setError(null)
        setDecryptedContent(null)

        if (!selectedKey) {
            setError('Please select a decrypt key')
            return
        }

        if (!encryptedContent.trim()) {
            setError('Please enter encrypted content')
            return
        }

        try {
            const decrypt = new JSEncrypt()
            decrypt.setPrivateKey(selectedKey.content)

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

    const handleDeleteKey = () => {
        if (selectedKeyId) {
            deleteKey(selectedKeyId)
        }
    }

    return (
        <motion.div transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
            <Card className={styles.card} padding="xl" radius="lg">
                <Stack gap="lg">
                    <Group gap="md" wrap="nowrap">
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

                    <Stack gap="xs">
                        <Group align="flex-end" gap="xs">
                            <Select
                                allowDeselect={false}
                                data={keyOptions}
                                description="🔒 All keys are stored locally in your browser"
                                label="Decrypt Key"
                                onChange={(value) => selectKey(value)}
                                placeholder={
                                    keys.length === 0 ? 'No keys saved' : 'Select a key...'
                                }
                                style={{ flex: 1 }}
                                value={selectedKeyId}
                            />
                            <Tooltip label="Add new key">
                                <ActionIcon
                                    onClick={openModal}
                                    size="input-sm"
                                    variant="gradient-cyan"
                                >
                                    <IconPlus size={18} />
                                </ActionIcon>
                            </Tooltip>
                            {selectedKeyId && (
                                <Tooltip label="Delete selected key">
                                    <ActionIcon
                                        color="red"
                                        onClick={handleDeleteKey}
                                        size="input-sm"
                                        variant="gradient-red"
                                    >
                                        <IconTrash size={18} />
                                    </ActionIcon>
                                </Tooltip>
                            )}
                        </Group>
                    </Stack>

                    <AddKeyModal onClose={closeModal} opened={modalOpened} />

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
