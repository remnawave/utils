import { Grid, TextInput } from '@mantine/core'

import type { FormData } from '../../model'

interface GeoTabProps {
    formData: FormData
    updateField: (field: keyof FormData, value: string) => void
}

export function GeoTab({ formData, updateField }: GeoTabProps) {
    return (
        <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
                <TextInput
                    description="URL to download GeoIP database (.dat file)"
                    label="GeoIP Database URL"
                    onChange={(e) => updateField('geoipUrl', e.target.value)}
                    placeholder="https://github.com/v2fly/geoip/releases/latest/download/geoip.dat"
                    value={formData.geoipUrl}
                />
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
                <TextInput
                    description="URL to download Geosite database (.dat file)"
                    label="Geosite Database URL"
                    onChange={(e) => updateField('geositeUrl', e.target.value)}
                    placeholder="https://github.com/v2fly/domain-list-community/releases/latest/download/dlc.dat"
                    value={formData.geositeUrl}
                />
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
                <TextInput
                    description="Unix timestamp when config was last updated"
                    label="Last Updated"
                    onChange={(e) => updateField('lastUpdated', e.target.value)}
                    placeholder="e.g. 1693826255"
                    value={formData.lastUpdated}
                />
            </Grid.Col>
        </Grid>
    )
}

