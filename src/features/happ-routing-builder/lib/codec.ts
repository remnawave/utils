import type { FormData, HappRoutingData } from '../model/types'

export function formatJsonData(formData: FormData): HappRoutingData {
    let dnsHostsObj = {}
    try {
        dnsHostsObj = JSON.parse(formData.dnsHosts)
    } catch {
        // Invalid JSON, use empty object
    }

    const splitLines = (text: string) => text.split('\n').filter((line) => line.trim() !== '')

    return {
        Name: formData.name,
        GlobalProxy: formData.globalProxy,
        RemoteDNSType: formData.remoteDnsType,
        RemoteDNSDomain: formData.remoteDnsDomain,
        RemoteDNSIP: formData.remoteDnsIp,
        DomesticDNSType: formData.domesticDnsType,
        DomesticDNSDomain: formData.domesticDnsDomain,
        DomesticDNSIP: formData.domesticDnsIp,
        Geoipurl: formData.geoipUrl,
        Geositeurl: formData.geositeUrl,
        LastUpdated: formData.lastUpdated,
        DnsHosts: dnsHostsObj as Record<string, string>,
        DirectSites: splitLines(formData.directSites),
        DirectIp: splitLines(formData.directIp),
        ProxySites: splitLines(formData.proxySites),
        ProxyIp: splitLines(formData.proxyIp),
        BlockSites: splitLines(formData.blockSites),
        BlockIp: splitLines(formData.blockIp),
        DomainStrategy: formData.domainStrategy,
        FakeDNS: formData.fakeDns,
        UseChunkFiles: formData.useChunkFiles
    }
}

export function encodeToBase64(formData: FormData): string {
    const data = formatJsonData(formData)
    const jsonString = JSON.stringify(data)
    return btoa(unescape(encodeURIComponent(jsonString)))
}

export function generateHappLink(formData: FormData): string {
    return `happ://routing/add/${encodeToBase64(formData)}`
}

export function decodeHappLink(
    input: string
): { data: HappRoutingData; error: null } | { data: null; error: string } {
    try {
        const cleanInput = input
            .replace('happ://routing/add/', '')
            .replace('happ://routing/onadd/', '')
        const jsonString = decodeURIComponent(escape(atob(cleanInput)))
        const data = JSON.parse(jsonString) as HappRoutingData
        return { data, error: null }
    } catch {
        return { data: null, error: 'Invalid Base64 or Happ link format' }
    }
}

export function jsonDataToFormData(jsonData: HappRoutingData, currentFormData: FormData): FormData {
    const newFormData = { ...currentFormData }

    if (jsonData.Name !== undefined) newFormData.name = jsonData.Name
    if (jsonData.GlobalProxy !== undefined) newFormData.globalProxy = String(jsonData.GlobalProxy)

    if (jsonData.RemoteDNSType !== undefined) newFormData.remoteDnsType = jsonData.RemoteDNSType
    if (jsonData.RemoteDNSDomain !== undefined)
        newFormData.remoteDnsDomain = jsonData.RemoteDNSDomain
    if (jsonData.RemoteDNSIP !== undefined) newFormData.remoteDnsIp = jsonData.RemoteDNSIP
    if (jsonData.RemoteDNSIp !== undefined) newFormData.remoteDnsIp = jsonData.RemoteDNSIp

    if (jsonData.DomesticDNSType !== undefined)
        newFormData.domesticDnsType = jsonData.DomesticDNSType
    if (jsonData.DomesticDNSDomain !== undefined)
        newFormData.domesticDnsDomain = jsonData.DomesticDNSDomain
    if (jsonData.DomesticDNSIP !== undefined) newFormData.domesticDnsIp = jsonData.DomesticDNSIP
    if (jsonData.DomesticDNSIp !== undefined) newFormData.domesticDnsIp = jsonData.DomesticDNSIp

    if (jsonData.Geoipurl !== undefined) newFormData.geoipUrl = jsonData.Geoipurl
    if (jsonData.GeoipUrl !== undefined) newFormData.geoipUrl = jsonData.GeoipUrl
    if (jsonData.Geositeurl !== undefined) newFormData.geositeUrl = jsonData.Geositeurl
    if (jsonData.GeositeUrl !== undefined) newFormData.geositeUrl = jsonData.GeositeUrl

    if (jsonData.LastUpdated !== undefined) newFormData.lastUpdated = String(jsonData.LastUpdated)
    if (jsonData.DomainStrategy !== undefined) newFormData.domainStrategy = jsonData.DomainStrategy

    if (jsonData.FakeDNS !== undefined) newFormData.fakeDns = String(jsonData.FakeDNS)
    if (jsonData.FakeDns !== undefined) newFormData.fakeDns = String(jsonData.FakeDns)
    if (jsonData.UseChunkFiles !== undefined)
        newFormData.useChunkFiles = String(jsonData.UseChunkFiles)
    if (jsonData.useChunkFiles !== undefined)
        newFormData.useChunkFiles = String(jsonData.useChunkFiles)

    if (jsonData.DnsHosts !== undefined) {
        newFormData.dnsHosts = JSON.stringify(jsonData.DnsHosts, null, 2)
    }

    if (jsonData.DirectSites !== undefined && Array.isArray(jsonData.DirectSites)) {
        newFormData.directSites = jsonData.DirectSites.join('\n')
    }
    if (jsonData.DirectIp !== undefined && Array.isArray(jsonData.DirectIp)) {
        newFormData.directIp = jsonData.DirectIp.join('\n')
    }
    if (jsonData.ProxySites !== undefined && Array.isArray(jsonData.ProxySites)) {
        newFormData.proxySites = jsonData.ProxySites.join('\n')
    }
    if (jsonData.ProxyIp !== undefined && Array.isArray(jsonData.ProxyIp)) {
        newFormData.proxyIp = jsonData.ProxyIp.join('\n')
    }
    if (jsonData.BlockSites !== undefined && Array.isArray(jsonData.BlockSites)) {
        newFormData.blockSites = jsonData.BlockSites.join('\n')
    }
    if (jsonData.BlockIp !== undefined && Array.isArray(jsonData.BlockIp)) {
        newFormData.blockIp = jsonData.BlockIp.join('\n')
    }

    return newFormData
}
