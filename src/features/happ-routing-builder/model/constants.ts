import type { FormData } from './types'

export const DEFAULT_FORM_DATA: FormData = {
    name: '',
    globalProxy: 'true',
    remoteDnsType: 'DoH',
    remoteDnsDomain: '',
    remoteDnsIp: '',
    domesticDnsType: 'DoU',
    domesticDnsDomain: '',
    domesticDnsIp: '',
    geoipUrl: '',
    geositeUrl: '',
    lastUpdated: '',
    dnsHosts: '{}',
    directSites: '',
    directIp: '',
    proxySites: '',
    proxyIp: '',
    blockSites: '',
    blockIp: '',
    domainStrategy: 'IPIfNonMatch',
    fakeDns: 'false',
    useChunkFiles: 'true'
}

export const DNS_TYPE_OPTIONS = [
    { value: 'DoH', label: 'DNS over HTTPS (DoH)' },
    { value: 'DoU', label: 'DNS over UDP (DoU)' }
]

export const GLOBAL_PROXY_OPTIONS = [
    { value: 'true', label: 'Proxy all (whitelist mode)' },
    { value: 'false', label: 'Direct all (blacklist mode)' }
]

export const TOGGLE_OPTIONS = [
    { value: 'true', label: 'Enabled' },
    { value: 'false', label: 'Disabled' }
]

export const DOMAIN_STRATEGY_OPTIONS = [
    { value: 'IPIfNonMatch', label: 'IPIfNonMatch' },
    { value: 'AsIs', label: 'AsIs' },
    { value: 'IPOnDemand', label: 'IPOnDemand' }
]
