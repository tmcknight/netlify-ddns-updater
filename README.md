# @tmcknight/netlify-ddns-updater

[![NPM Version][npm-image]][npm-url]

## Description

Update an **A** DNS record at [Netlify's Managed DNS service](https://www.netlify.com/docs/dns/) with your public IP address.

## Install

```bash
npm i -g @tmcknight/netlify-ddns-updater
```

## Available Commands

#### `netlify-ddns-updater -t <accessToken> -d <domain> -s <subdomain>`

Updates an A record with your external IP address.

#### `netlify-ddns-updater -t <accessToken> -d <domain> -s <subdomain> -i <ipAddress>`

Updates an A record with IP address.

## Parameters

- `-a --accessToken` _[string]_ - [Personal access token from Netlify](https://app.netlify.com/user/applications#personal-access-tokens).
- `-d --domain` - _[string]_ - The domain that holds the DNS record. (e.g. - example.com).
- `-s --subdomain` - _[string]_ - The name of the record to update. (e.g. - home).
- `-i --ipAddress` - _[string, optional]_ - IP address to update. If not provided, uses your current external IP address.

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/@tmcknight/netlify-ddns-updater?style=flat-square
[npm-url]: https://npmjs.org/package/@tmcknight/netlify-ddns-updater
