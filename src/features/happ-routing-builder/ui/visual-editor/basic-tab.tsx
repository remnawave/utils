import { Grid, Select, TextInput } from '@mantine/core'

import {
    DOMAIN_STRATEGY_OPTIONS,
    type FormData,
    GLOBAL_PROXY_OPTIONS,
    TOGGLE_OPTIONS
} from '../../model'

interface BasicTabProps {
    formData: FormData
    updateField: (field: keyof FormData, value: string) => void
}

export function BasicTab({ formData, updateField }: BasicTabProps) {
    return (
        <Grid>
            <Grid.Col span={{ base: 12, sm: 6 }}>
                <TextInput
                    description="A friendly name for this configuration"
                    label="Configuration Name"
                    onChange={(e) => updateField('name', e.target.value)}
                    placeholder="e.g. Russia, Office, Home"
                    value={formData.name}
                />
            </Grid.Col>

            <Grid.Col span={{ base: 12, sm: 6 }}>
                <Select
                    data={GLOBAL_PROXY_OPTIONS}
                    description="Default routing behavior for unmatched traffic"
                    label="Routing Mode"
                    onChange={(value) => updateField('globalProxy', value || 'true')}
                    value={formData.globalProxy}
                />
            </Grid.Col>

            <Grid.Col span={{ base: 12, sm: 6 }}>
                <Select
                    data={DOMAIN_STRATEGY_OPTIONS}
                    description="How to resolve domains when routing"
                    label="Domain Strategy"
                    onChange={(value) => updateField('domainStrategy', value || 'IPIfNonMatch')}
                    value={formData.domainStrategy}
                />
            </Grid.Col>

            <Grid.Col span={{ base: 12, sm: 6 }}>
                <Select
                    data={TOGGLE_OPTIONS}
                    description="Improve performance with fake DNS responses"
                    label="FakeDNS"
                    onChange={(value) => updateField('fakeDns', value || 'false')}
                    value={formData.fakeDns}
                />
            </Grid.Col>

            <Grid.Col span={{ base: 12, sm: 6 }}>
                <Select
                    data={TOGGLE_OPTIONS}
                    description="Split large geo files into chunks"
                    label="Use Chunk Files"
                    onChange={(value) => updateField('useChunkFiles', value || 'true')}
                    value={formData.useChunkFiles}
                />
            </Grid.Col>
        </Grid>
    )
}
