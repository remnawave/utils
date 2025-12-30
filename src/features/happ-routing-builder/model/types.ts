export interface HappRoutingData {
    [key: string]: unknown
    BlockIp?: string[]
    BlockSites?: string[]
    DirectIp?: string[]
    DirectSites?: string[]
    DnsHosts?: Record<string, string>
    DomainStrategy?: string
    DomesticDNSDomain?: string
    DomesticDNSIP?: string
    DomesticDNSIp?: string
    DomesticDNSType?: string
    FakeDNS?: boolean | string
    FakeDns?: boolean | string
    Geoipurl?: string
    GeoipUrl?: string
    Geositeurl?: string
    GeositeUrl?: string
    GlobalProxy?: boolean | string
    LastUpdated?: number | string
    Name?: string
    ProxyIp?: string[]
    ProxySites?: string[]
    RemoteDNSDomain?: string
    RemoteDNSIP?: string
    RemoteDNSIp?: string
    RemoteDNSType?: string
    UseChunkFiles?: string
    useChunkFiles?: string
}

export interface FormData {
    blockIp: string
    blockSites: string
    directIp: string
    directSites: string
    dnsHosts: string
    domainStrategy: string
    domesticDnsDomain: string
    domesticDnsIp: string
    domesticDnsType: string
    fakeDns: string
    geoipUrl: string
    geositeUrl: string
    globalProxy: string
    lastUpdated: string
    name: string
    proxyIp: string
    proxySites: string
    remoteDnsDomain: string
    remoteDnsIp: string
    remoteDnsType: string
    useChunkFiles: string
}
