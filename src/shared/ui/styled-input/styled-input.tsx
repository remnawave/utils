import { IconWriting, IconX } from '@tabler/icons-react'
import { Input } from '@mantine/core'

import styles from './styled-input.module.css'

interface StyledInputProps {
    description?: string
    label?: string
    onChange: (value: string) => void
    placeholder?: string
    size?: 'lg' | 'md' | 'sm' | 'xl' | 'xs'
    value: string
}

export function StyledInput({
    value,
    onChange,
    placeholder,
    description,
    label,
    size = 'sm'
}: StyledInputProps) {
    const hasValue = Boolean(value)

    return (
        <Input.Wrapper description={description} label={label} size={size}>
            <Input
                classNames={{
                    input: styles.input,
                    wrapper: styles.wrapper
                }}
                leftSection={
                    hasValue ? (
                        <IconX
                            className={styles.icon}
                            color="white"
                            onClick={() => onChange('')}
                            size={20}
                        />
                    ) : (
                        <IconWriting className={styles.icon} size={20} />
                    )
                }
                leftSectionPointerEvents="all"
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                value={value}
            />
        </Input.Wrapper>
    )
}
