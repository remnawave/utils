import type { FormData } from './types'

export const DEFAULT_FORM_DATA: FormData = {
    name: '',
    globalProxy: 'true',
    remoteDnsType: 'DoH',
    routeOrder: 'block-proxy-direct',
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

export const ROUTE_ORDER_OPTIONS = [
    { value: 'block-proxy-direct', label: 'Block → Proxy → Direct' },
    { value: 'block-direct-proxy', label: 'Block → Direct → Proxy' },
    { value: 'proxy-direct-block', label: 'Proxy → Direct → Block' },
    { value: 'proxy-block-direct', label: 'Proxy → Block → Direct' },
    { value: 'direct-proxy-block', label: 'Direct → Proxy → Block' },
    { value: 'direct-block-proxy', label: 'Direct → Block → Proxy' }
]
