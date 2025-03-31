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
* __Node:__ `v20.19.0`
* __Run:__ Mon Mar 31 2025 01:05:37 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.0 | ✗      | 48048.0    | 20.29        | 8.57          |
| polka                    | 0.5.2    | ✓      | 47999.2    | 20.30        | 8.56          |
| fastify                  | 5.2.2    | ✓      | 47338.4    | 20.61        | 8.49          |
| connect                  | 3.7.0    | ✗      | 47213.6    | 20.67        | 8.42          |
| frourio                  | 1.3.1    | ✓      | 46856.0    | 20.85        | 8.40          |
| polkadot                 | 1.0.0    | ✗      | 46592.8    | 20.96        | 8.31          |
| server-base              | 7.1.32   | ✗      | 46325.6    | 21.07        | 8.26          |
| 0http                    | 4.2.0    | ✓      | 45927.2    | 21.29        | 8.19          |
| rayo                     | 1.4.6    | ✓      | 45820.8    | 21.29        | 8.17          |
| server-base-router       | 7.1.32   | ✓      | 45716.0    | 21.42        | 8.15          |
| micro                    | 10.0.1   | ✗      | 45524.0    | 21.47        | 8.12          |
| h3                       | 1.15.1   | ✗      | 44203.2    | 22.12        | 7.88          |
| connect-router           | 1.3.8    | ✓      | 43975.2    | 22.23        | 7.84          |
| micro-route              | 2.5.0    | ✓      | 43592.0    | 22.44        | 7.77          |
| h3-router                | 1.15.1   | ✓      | 42489.6    | 23.04        | 7.58          |
| restana                  | v5.0.0   | ✓      | 41471.2    | 23.61        | 7.40          |
| adonisjs                 | 7.6.0    | ✓      | 41105.0    | 23.84        | 7.33          |
| hono                     | 4.7.5    | ✓      | 40967.2    | 23.90        | 6.72          |
| koa                      | 2.16.0   | ✗      | 36894.6    | 26.59        | 6.58          |
| take-five                | 2.0.0    | ✓      | 35699.4    | 27.51        | 12.84         |
| restify                  | 11.1.0   | ✓      | 35156.4    | 27.97        | 6.34          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35125.8    | 27.96        | 6.26          |
| koa-router               | 13.1.0   | ✓      | 32893.0    | 29.88        | 5.87          |
| hapi                     | 21.4.0   | ✓      | 32004.4    | 30.74        | 5.71          |
| microrouter              | 3.1.3    | ✓      | 30698.4    | 32.06        | 5.47          |
| fastify-big-json         | 5.2.2    | ✓      | 11934.2    | 83.22        | 137.31        |
| express                  | 5.0.1    | ✓      | 10051.0    | 98.90        | 1.79          |
| frourio-express          | 1.3.1    | ✓      | 9871.8     | 100.70       | 1.76          |
| express-with-middlewares | 5.0.1    | ✓      | 9151.6     | 108.65       | 3.40          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
