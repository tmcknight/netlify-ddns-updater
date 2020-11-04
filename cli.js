#!/usr/bin/env node
const yargs = require("yargs")
const command = require("./command")

const options = yargs
  .usage("Usage: -t <accessToken> -d <domain> -s <subdomain> -i <ipAddress>")
  .option("t", {
    alias: "accessToken",
    describe: "Netlify Access Token",
    type: "string",
    demandOption: true,
  })
  .option("d", {
    alias: "domain",
    describe: "Domain",
    type: "string",
    demandOption: true,
  })
  .option("s", {
    alias: "subdomain",
    describe: "Subdomain",
    type: "string",
    demandOption: true,
  })
  .option("i", {
    alias: "ipAddress",
    describe: "IP Address",
    type: "string",
  }).argv

command.updateDnsEntry(
  options.accessToken,
  options.domain,
  options.subdomain,
  options.ipAddress
)
