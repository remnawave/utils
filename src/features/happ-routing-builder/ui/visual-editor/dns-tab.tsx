import { Divider, Grid, Select, Stack, Text, TextInput, Textarea } from '@mantine/core'
import { IconGlobe, IconGlobeFilled } from '@tabler/icons-react'

import { DNS_TYPE_OPTIONS, type FormData } from '../../model'

interface DnsTabProps {
    formData: FormData
    updateField: (field: keyof FormData, value: string) => void
}

export function DnsTab({ formData, updateField }: DnsTabProps) {
    return (
        <Stack gap="lg">
            {/* Remote DNS */}
            <Stack gap="sm">
                <Text c="cyan.4" fw={600} size="sm">
                    <IconGlobeFilled
                        size={16}
                        style={{ marginRight: 8, verticalAlign: 'middle' }}
                    />
                    Remote DNS (for proxied traffic)
                </Text>
                <Grid>
                    <Grid.Col span={{ base: 12, sm: 4 }}>
                        <Select
                            data={DNS_TYPE_OPTIONS}
                            label="Protocol"
                            onChange={(value) => updateField('remoteDnsType', value || 'DoH')}
                            value={formData.remoteDnsType}
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 4 }}>
                        <TextInput
                            label="Domain"
                            onChange={(e) => updateField('remoteDnsDomain', e.target.value)}
                            placeholder="dns.google"
                            value={formData.remoteDnsDomain}
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 4 }}>
                        <TextInput
                            label="IP Address"
                            onChange={(e) => updateField('remoteDnsIp', e.target.value)}
                            placeholder="8.8.8.8"
                            value={formData.remoteDnsIp}
                        />
                    </Grid.Col>
                </Grid>
            </Stack>

            <Divider />

            {/* Domestic DNS */}
            <Stack gap="sm">
                <Text c="teal.4" fw={600} size="sm">
                    <IconGlobe size={16} style={{ marginRight: 8, verticalAlign: 'middle' }} />
                    Domestic DNS (for direct traffic)
                </Text>
                <Grid>
                    <Grid.Col span={{ base: 12, sm: 4 }}>
                        <Select
                            data={DNS_TYPE_OPTIONS}
                            label="Protocol"
                            onChange={(value) => updateField('domesticDnsType', value || 'DoU')}
                            value={formData.domesticDnsType}
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 4 }}>
                        <TextInput
                            label="Domain"
                            onChange={(e) => updateField('domesticDnsDomain', e.target.value)}
                            placeholder="dns.yandex"
                            value={formData.domesticDnsDomain}
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 4 }}>
                        <TextInput
                            label="IP Address"
                            onChange={(e) => updateField('domesticDnsIp', e.target.value)}
                            placeholder="77.88.8.8"
                            value={formData.domesticDnsIp}
                        />
                    </Grid.Col>
                </Grid>
            </Stack>

            <Divider />

            {/* DNS Hosts */}
            <Stack gap="sm">
                <Text c="violet.4" fw={600} size="sm">
                    Custom DNS Hosts
                </Text>
                <Textarea
                    autosize
                    description="JSON object mapping domains to IP addresses"
                    maxRows={8}
                    minRows={3}
                    onChange={(e) => updateField('dnsHosts', e.target.value)}
                    placeholder={'{\n  "example.com": "1.2.3.4"\n}'}
                    styles={{ input: { fontFamily: 'monospace' } }}
                    value={formData.dnsHosts}
                />
            </Stack>
        </Stack>
    )
}

