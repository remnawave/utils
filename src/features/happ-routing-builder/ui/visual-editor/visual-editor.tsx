import { IconGlobe, IconRoute, IconServer, IconSettings } from '@tabler/icons-react'
import { Tabs, Transition } from '@mantine/core'
import { useState } from 'react'

import type { FormData } from '../../model'

import styles from './visual-editor.module.css'
import { RoutingTab } from './routing-tab'
import { BasicTab } from './basic-tab'
import { DnsTab } from './dns-tab'
import { GeoTab } from './geo-tab'

interface VisualEditorProps {
    formData: FormData
    updateField: (field: keyof FormData, value: string) => void
}

export function VisualEditor({ formData, updateField }: VisualEditorProps) {
    const [activeTab, setActiveTab] = useState<null | string>('routing')

    return (
        <Tabs
            classNames={{ list: styles.tabsList, tab: styles.tab }}
            onChange={setActiveTab}
            value={activeTab}
            variant="unstyled"
        >
            <Tabs.List grow mb="lg">
                <Tabs.Tab leftSection={<IconRoute size={16} />} value="routing">
                    Routing
                </Tabs.Tab>
                <Tabs.Tab leftSection={<IconSettings size={16} />} value="basic">
                    Basic
                </Tabs.Tab>
                <Tabs.Tab leftSection={<IconServer size={16} />} value="dns">
                    DNS
                </Tabs.Tab>
                <Tabs.Tab leftSection={<IconGlobe size={16} />} value="geo">
                    Geo
                </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="routing">
                <Transition duration={150} mounted={activeTab === 'routing'} transition="fade">
                    {(transitionStyles) => (
                        <div style={transitionStyles}>
                            <RoutingTab formData={formData} updateField={updateField} />
                        </div>
                    )}
                </Transition>
            </Tabs.Panel>

            <Tabs.Panel value="basic">
                <Transition duration={150} mounted={activeTab === 'basic'} transition="fade">
                    {(transitionStyles) => (
                        <div style={transitionStyles}>
                            <BasicTab formData={formData} updateField={updateField} />
                        </div>
                    )}
                </Transition>
            </Tabs.Panel>

            <Tabs.Panel value="dns">
                <Transition duration={150} mounted={activeTab === 'dns'} transition="fade">
                    {(transitionStyles) => (
                        <div style={transitionStyles}>
                            <DnsTab formData={formData} updateField={updateField} />
                        </div>
                    )}
                </Transition>
            </Tabs.Panel>

            <Tabs.Panel value="geo">
                <Transition duration={150} mounted={activeTab === 'geo'} transition="fade">
                    {(transitionStyles) => (
                        <div style={transitionStyles}>
                            <GeoTab formData={formData} updateField={updateField} />
                        </div>
                    )}
                </Transition>
            </Tabs.Panel>
        </Tabs>
    )
}
