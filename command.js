const NetlifyApi = require("netlify")
const publicIp = require("public-ip")

exports.updateDnsEntry = async function (
  accessToken,
  domain,
  subdomain,
  ipAddress
) {
  if (!ipAddress) {
    try {
      //get external IP address
      console.log("Getting public IP...")
      ipAddress = await publicIp.v4()
      console.log(`Got ${ipAddress}.`)
    } catch (error) {
      console.log(error)
      return
    }
  }

  try {
    const hostname = `${subdomain}.${domain}`
    const client = new NetlifyApi(accessToken)
    const dnsZones = await client.getDnsZones()

    const zone = dnsZones.find((e) => e.name == domain)

    const records = await client.getDnsRecords({ zone_id: zone.id })
    let aRecord = records.find((r) => r.hostname == hostname && r.type == "A")

    if (aRecord && aRecord.value != ipAddress) {
      //delete existing record
      console.log("New IP Address.")
      console.log("Deleting existing DNS record...")
      await client.deleteDnsRecord({
        zone_id: zone.id,
        dns_record_id: aRecord.id,
      })
      aRecord = undefined
    }
    if (!aRecord) {
      //create new record
      console.log("Creating DNS record...")
      await client.createDnsRecord({
        zone_id: zone.id,
        body: { type: "A", hostname: hostname, ttl: 60, value: ipAddress },
      })
      console.log("Done!")
    } else {
      console.log("Nothing to update.")
    }
  } catch (error) {
    console.log(error)
    return
  }
}
