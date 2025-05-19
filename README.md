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
* __Node:__ `v20.19.1`
* __Run:__ Mon May 19 2025 01:07:12 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| frourio                  | 1.3.1    | ✓      | 47578.4    | 20.52        | 8.53          |
| bare                     | v20.19.1 | ✗      | 47421.6    | 20.58        | 8.46          |
| polka                    | 0.5.2    | ✓      | 47197.6    | 20.68        | 8.42          |
| fastify                  | 5.3.3    | ✓      | 46875.2    | 20.82        | 8.40          |
| rayo                     | 1.4.6    | ✓      | 46848.8    | 20.84        | 8.35          |
| connect                  | 3.7.0    | ✗      | 46820.8    | 20.85        | 8.35          |
| server-base              | 7.1.32   | ✗      | 46789.6    | 20.88        | 8.34          |
| 0http                    | 4.2.0    | ✓      | 45775.2    | 21.35        | 8.16          |
| server-base-router       | 7.1.32   | ✓      | 45468.8    | 21.48        | 8.11          |
| micro                    | 10.0.1   | ✗      | 45266.4    | 21.59        | 8.07          |
| polkadot                 | 1.0.0    | ✗      | 45180.0    | 21.63        | 8.06          |
| connect-router           | 1.3.8    | ✓      | 44423.2    | 22.02        | 7.92          |
| h3                       | 1.15.3   | ✗      | 43960.0    | 22.25        | 7.84          |
| h3-router                | 1.15.3   | ✓      | 43593.6    | 22.44        | 7.77          |
| micro-route              | 2.5.0    | ✓      | 42599.2    | 22.96        | 7.60          |
| adonisjs                 | 7.6.1    | ✓      | 41715.2    | 23.47        | 7.44          |
| hono                     | 4.7.10   | ✓      | 40115.2    | 24.41        | 6.58          |
| restana                  | v5.0.0   | ✓      | 39832.0    | 24.60        | 7.10          |
| koa                      | 2.16.1   | ✗      | 37720.8    | 26.03        | 6.73          |
| take-five                | 2.0.0    | ✓      | 35927.8    | 27.32        | 12.92         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35692.2    | 27.51        | 6.37          |
| restify                  | 11.1.0   | ✓      | 34982.0    | 28.09        | 6.31          |
| koa-router               | 13.1.0   | ✓      | 33658.0    | 29.22        | 6.00          |
| hapi                     | 21.4.0   | ✓      | 32328.4    | 30.43        | 5.77          |
| microrouter              | 3.1.3    | ✓      | 30170.4    | 32.64        | 5.38          |
| fastify-big-json         | 5.3.3    | ✓      | 11937.0    | 83.20        | 137.35        |
| express                  | 5.1.0    | ✓      | 9815.2     | 101.27       | 1.75          |
| frourio-express          | 1.3.1    | ✓      | 9762.0     | 101.81       | 1.74          |
| express-with-middlewares | 5.1.0    | ✓      | 9081.5     | 109.48       | 3.38          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
