import { Button, Group, Modal, Stack, Textarea, TextInput } from '@mantine/core'
import { IconKey, IconPlus } from '@tabler/icons-react'
import { useState } from 'react'

import { BaseOverlayHeader } from '@shared/ui'

import { useDecryptKeysActions } from '../model'
import styles from './decrypt-card.module.css'

interface AddKeyModalProps {
    onClose: () => void
    opened: boolean
}

const PLACEHOLDER_KEY = `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA...
-----END RSA PRIVATE KEY-----`

export function AddKeyModal({ opened, onClose }: AddKeyModalProps) {
    const [name, setName] = useState('')
    const [content, setContent] = useState('')
    const { addKey } = useDecryptKeysActions()

    const handleSubmit = () => {
        if (!name.trim() || !content.trim()) return

        addKey({ content: content.trim(), name: name.trim() })
        setName('')
        setContent('')
        onClose()
    }

    const handleClose = () => {
        setName('')
        setContent('')
        onClose()
    }

    return (
        <Modal
            centered
            classNames={{
                content: styles.modalContent,
                header: styles.modalHeader,
                body: styles.modalBody
            }}
            onClose={handleClose}
            opened={opened}
            size="lg"
            title={
                <BaseOverlayHeader
                    IconComponent={IconKey}
                    iconSize={20}
                    iconVariant="gradient-cyan"
                    title="Add Decrypt Key"
                />
            }
        >
            <Stack gap="md">
                <TextInput
                    data-autofocus
                    description="A friendly name to identify this key"
                    label="Key Name"
                    onChange={(e) => setName(e.currentTarget.value)}
                    placeholder="e.g. TestKey"
                    value={name}
                />

                <Textarea
                    autosize
                    description="RSA private key in PEM format"
                    label="Private Key"
                    maxRows={8}
                    minRows={8}
                    onChange={(e) => setContent(e.currentTarget.value)}
                    placeholder={PLACEHOLDER_KEY}
                    styles={{
                        input: {
                            fontFamily: 'Fira Mono, monospace',
                            fontSize: '0.75rem'
                        }
                    }}
                    value={content}
                />

                <Group justify="flex-end" mt="md">
                    <Button onClick={handleClose} variant="subtle">
                        Cancel
                    </Button>
                    <Button
                        disabled={!name.trim() || !content.trim()}
                        leftSection={<IconPlus size={16} />}
                        onClick={handleSubmit}
                        variant="gradient-cyan"
                    >
                        Add Key
                    </Button>
                </Group>
            </Stack>
        </Modal>
    )
}
