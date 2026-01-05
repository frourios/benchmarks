<div align="center"> <a href="https://fastify.dev/">
    <img
      src="https://github.com/fastify/graphics/raw/HEAD/fastify-landscape-outlined.svg"
      width="650"
      height="auto"
    />
  </a>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Package Manager
CI](https://github.com/fastify/fastify/workflows/package-manager-ci/badge.svg?branch=main)](https://github.com/fastify/fastify/actions/workflows/package-manager-ci.yml)
[![Web
SIte](https://github.com/fastify/fastify/workflows/website/badge.svg?branch=main)](https://github.com/fastify/fastify/actions/workflows/website.yml)
[![neostandard javascript style](https://img.shields.io/badge/code_style-neostandard-brightgreen?style=flat)](https://github.com/neostandard/neostandard)
[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/7585/badge)](https://bestpractices.coreinfrastructure.org/projects/7585)

</div>

<div align="center">

[![NPM
version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM
downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![Security Responsible
Disclosure](https://img.shields.io/badge/Security-Responsible%20Disclosure-yellow.svg)](https://github.com/fastify/fastify/blob/main/SECURITY.md)
[![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)
[![Contribute with Gitpod](https://img.shields.io/badge/Contribute%20with-Gitpod-908a85?logo=gitpod&color=blue)](https://gitpod.io/#https://github.com/fastify/fastify)
![Open Collective backers and sponsors](https://img.shields.io/opencollective/all/fastify)

</div>

<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is compared to other JS frameworks: these benchmarks do not pretend to represent a real-world scenario, but they give a **good indication of the framework overhead**.
* The benchmarks are run automatically on GitHub actions, which means they run on virtual hardware that can suffer from the "noisy neighbor" effect; this means that the results can vary.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `compare`: Get comparative data for your benchmarks.

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.19.6`
* __Run:__ Mon Jan 05 2026 01:11:21 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.6 | ✗      | 46038.6    | 21.22        | 8.21          |
| fastify                  | 5.6.2    | ✓      | 45384.8    | 21.53        | 8.14          |
| polkadot                 | 1.0.0    | ✗      | 45209.6    | 21.62        | 8.06          |
| connect                  | 3.7.0    | ✗      | 45028.8    | 21.71        | 8.03          |
| polka                    | 0.5.2    | ✓      | 44781.6    | 21.84        | 7.99          |
| frourio                  | 1.3.1    | ✓      | 44636.0    | 21.90        | 8.00          |
| rayo                     | 1.4.6    | ✓      | 44317.6    | 22.07        | 7.90          |
| micro                    | 10.0.1   | ✗      | 44212.8    | 22.12        | 7.88          |
| server-base-router       | 7.1.32   | ✓      | 44165.6    | 22.14        | 7.88          |
| server-base              | 7.1.32   | ✗      | 43844.0    | 22.31        | 7.82          |
| 0http                    | 4.3.0    | ✓      | 42834.4    | 22.85        | 7.64          |
| connect-router           | 1.3.8    | ✓      | 42275.2    | 23.16        | 7.54          |
| h3                       | 1.15.4   | ✗      | 41847.2    | 23.39        | 7.46          |
| micro-route              | 2.5.0    | ✓      | 41449.6    | 23.62        | 7.39          |
| adonisjs                 | 7.7.0    | ✓      | 41070.4    | 23.85        | 7.32          |
| h3-router                | 1.15.4   | ✓      | 40717.6    | 24.06        | 7.26          |
| restana                  | v5.1.0   | ✓      | 39989.6    | 24.50        | 7.13          |
| koa                      | 2.16.3   | ✗      | 36058.6    | 27.23        | 6.43          |
| hono                     | 4.11.3   | ✓      | 35689.0    | 27.52        | 5.85          |
| take-five                | 2.0.0    | ✓      | 34557.0    | 28.44        | 12.42         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34424.0    | 28.55        | 6.14          |
| koa-router               | 13.1.1   | ✓      | 34217.0    | 28.72        | 6.10          |
| restify                  | 11.1.0   | ✓      | 33957.6    | 28.94        | 6.12          |
| hapi                     | 21.4.4   | ✓      | 30804.4    | 31.95        | 5.49          |
| microrouter              | 3.1.3    | ✓      | 29897.6    | 32.94        | 5.33          |
| fastify-big-json         | 5.6.2    | ✓      | 11455.0    | 86.74        | 131.79        |
| express                  | 5.2.1    | ✓      | 10060.2    | 98.81        | 1.79          |
| frourio-express          | 1.3.1    | ✓      | 9828.3     | 101.13       | 1.75          |
| express-with-middlewares | 5.2.1    | ✓      | 8852.4     | 112.33       | 3.29          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
