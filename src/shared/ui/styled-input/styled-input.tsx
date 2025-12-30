import { CloseButton, Input } from '@mantine/core'

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
    return (
        <Input.Wrapper description={description} label={label} size={size}>
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
        </Input.Wrapper>
    )
}
