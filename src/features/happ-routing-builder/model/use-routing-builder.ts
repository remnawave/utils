import { useCallback, useEffect, useState } from 'react'

import type { FormData, HappRoutingData } from './types'

import { decodeHappLink, formatJsonData, generateHappLink, jsonDataToFormData } from '../lib/codec'
import { DEFAULT_FORM_DATA } from './constants'

export function useRoutingBuilder() {
    const [formData, setFormData] = useState<FormData>(DEFAULT_FORM_DATA)
    const [jsonEditorValue, setJsonEditorValue] = useState('')
    const [importInput, setImportInput] = useState('')
    const [importError, setImportError] = useState<null | string>(null)

    const updateField = useCallback((field: keyof FormData, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }))
    }, [])

    const happLink = generateHappLink(formData)

    const handleImport = useCallback(() => {
        setImportError(null)
        const result = decodeHappLink(importInput)

        if (result.error || !result.data) {
            setImportError(result.error ?? 'Failed to decode')
            return
        }

        const newFormData = jsonDataToFormData(result.data, formData)
        setFormData(newFormData)
        setJsonEditorValue(JSON.stringify(result.data, null, 2))
    }, [importInput, formData])

    const handleJsonChange = useCallback(
        (value: string) => {
            setJsonEditorValue(value)
            try {
                const jsonData = JSON.parse(value) as HappRoutingData
                const newFormData = jsonDataToFormData(jsonData, formData)
                setFormData(newFormData)
            } catch {
                // Invalid JSON, ignore
            }
        },
        [formData]
    )

    const resetForm = useCallback(() => {
        setFormData(DEFAULT_FORM_DATA)
        setImportInput('')
        setImportError(null)
    }, [])

    // Sync JSON editor with form data
    useEffect(() => {
        const data = formatJsonData(formData)
        setJsonEditorValue(JSON.stringify(data, null, 2))
    }, [formData])

    return {
        formData,
        updateField,
        happLink,
        jsonEditorValue,
        handleJsonChange,
        importInput,
        setImportInput,
        importError,
        handleImport,
        resetForm
    }
}
