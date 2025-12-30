import { CloseButton, Input } from '@mantine/core'

import styles from './styled-input.module.css'

interface StyledInputProps {
    onChange: (value: string) => void
    placeholder?: string
    value: string
}

export function StyledInput({ value, onChange, placeholder }: StyledInputProps) {
    return (
        <Input
            classNames={{
                input: styles.input,
                wrapper: styles.wrapper
            }}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            rightSection={
                value && (
                    <CloseButton
                        aria-label="Clear input"
                        onClick={() => onChange('')}
                        size="sm"
                        variant="transparent"
                    />
                )
            }
            rightSectionPointerEvents="all"
            value={value}
        />
    )
}
