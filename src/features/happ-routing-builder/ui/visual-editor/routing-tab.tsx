import { Badge, Divider, Grid, Group, Stack, Text, Textarea } from '@mantine/core'
import { IconArrowRight, IconShield, IconX } from '@tabler/icons-react'

import type { FormData } from '../../model'

interface RoutingTabProps {
    formData: FormData
    updateField: (field: keyof FormData, value: string) => void
}

export function RoutingTab({ formData, updateField }: RoutingTabProps) {
    return (
        <Stack gap="xl">
            <Stack gap="sm">
                <Group gap="xs">
                    <Badge
                        color="teal"
                        leftSection={<IconArrowRight size={12} />}
                        size="md"
                        variant="light"
                    >
                        DIRECT
                    </Badge>
                    <Text fw={600} size="sm">
                        Bypass proxy for these destinations
                    </Text>
                </Group>
                <Grid>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Textarea
                            autosize
                            description="Domains/geosite rules (one per line)"
                            label="Sites"
                            maxRows={6}
                            minRows={3}
                            onChange={(e) => updateField('directSites', e.target.value)}
                            placeholder="geosite:ru&#10;geosite:geolocation-ru&#10;domain:example.com"
                            styles={{ input: { fontFamily: 'monospace', fontSize: '0.85rem' } }}
                            value={formData.directSites}
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Textarea
                            autosize
                            description="IP addresses/geoip rules (one per line)"
                            label="IPs"
                            maxRows={6}
                            minRows={3}
                            onChange={(e) => updateField('directIp', e.target.value)}
                            placeholder="geoip:ru&#10;192.168.0.0/16&#10;10.0.0.0/8"
                            styles={{ input: { fontFamily: 'monospace', fontSize: '0.85rem' } }}
                            value={formData.directIp}
                        />
                    </Grid.Col>
                </Grid>
            </Stack>

            <Divider opacity={0.3} />

            <Stack gap="sm">
                <Group gap="xs">
                    <Badge
                        color="cyan"
                        leftSection={<IconShield size={12} />}
                        size="md"
                        variant="light"
                    >
                        PROXY
                    </Badge>
                    <Text fw={600} size="sm">
                        Force proxy for these destinations
                    </Text>
                </Group>
                <Grid>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Textarea
                            autosize
                            description="Domains/geosite rules (one per line)"
                            label="Sites"
                            maxRows={6}
                            minRows={3}
                            onChange={(e) => updateField('proxySites', e.target.value)}
                            placeholder="geosite:google&#10;geosite:youtube&#10;domain:blocked.com"
                            styles={{ input: { fontFamily: 'monospace', fontSize: '0.85rem' } }}
                            value={formData.proxySites}
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Textarea
                            autosize
                            description="IP addresses/geoip rules (one per line)"
                            label="IPs"
                            maxRows={6}
                            minRows={3}
                            onChange={(e) => updateField('proxyIp', e.target.value)}
                            placeholder="1.1.1.1/32&#10;geoip:us"
                            styles={{ input: { fontFamily: 'monospace', fontSize: '0.85rem' } }}
                            value={formData.proxyIp}
                        />
                    </Grid.Col>
                </Grid>
            </Stack>

            <Divider opacity={0.3} />

            <Stack gap="sm">
                <Group gap="xs">
                    <Badge color="red" leftSection={<IconX size={12} />} size="md" variant="light">
                        BLOCK
                    </Badge>
                    <Text fw={600} size="sm">
                        Block these destinations completely
                    </Text>
                </Group>
                <Grid>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Textarea
                            autosize
                            description="Domains/geosite rules (one per line)"
                            label="Sites"
                            maxRows={6}
                            minRows={3}
                            onChange={(e) => updateField('blockSites', e.target.value)}
                            placeholder="geosite:category-ads-all&#10;domain:tracking.com"
                            styles={{ input: { fontFamily: 'monospace', fontSize: '0.85rem' } }}
                            value={formData.blockSites}
                        />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6 }}>
                        <Textarea
                            autosize
                            description="IP addresses/geoip rules (one per line)"
                            label="IPs"
                            maxRows={6}
                            minRows={3}
                            onChange={(e) => updateField('blockIp', e.target.value)}
                            placeholder="0.0.0.0/8&#10;geoip:private"
                            styles={{ input: { fontFamily: 'monospace', fontSize: '0.85rem' } }}
                            value={formData.blockIp}
                        />
                    </Grid.Col>
                </Grid>
            </Stack>
        </Stack>
    )
}
