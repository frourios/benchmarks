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
* __Run:__ Mon Dec 29 2025 01:10:37 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.6 | ✗      | 48577.6    | 20.10        | 8.66          |
| fastify                  | 5.6.2    | ✓      | 48296.0    | 20.21        | 8.66          |
| frourio                  | 1.3.1    | ✓      | 47937.6    | 20.37        | 8.59          |
| polka                    | 0.5.2    | ✓      | 47705.6    | 20.47        | 8.51          |
| 0http                    | 4.3.0    | ✓      | 47355.2    | 20.62        | 8.45          |
| connect                  | 3.7.0    | ✗      | 47331.2    | 20.62        | 8.44          |
| server-base-router       | 7.1.32   | ✓      | 47062.4    | 20.72        | 8.39          |
| rayo                     | 1.4.6    | ✓      | 46764.8    | 20.86        | 8.34          |
| server-base              | 7.1.32   | ✗      | 46730.4    | 20.87        | 8.33          |
| polkadot                 | 1.0.0    | ✗      | 46674.4    | 20.93        | 8.32          |
| h3-router                | 1.15.4   | ✓      | 45350.4    | 21.55        | 8.09          |
| micro                    | 10.0.1   | ✗      | 45243.2    | 21.59        | 8.07          |
| h3                       | 1.15.4   | ✗      | 45202.4    | 21.63        | 8.06          |
| connect-router           | 1.3.8    | ✓      | 44951.2    | 21.78        | 8.02          |
| restana                  | v5.1.0   | ✓      | 42645.6    | 22.95        | 7.61          |
| micro-route              | 2.5.0    | ✓      | 42509.6    | 23.03        | 7.58          |
| adonisjs                 | 7.7.0    | ✓      | 42156.8    | 23.21        | 7.52          |
| koa                      | 2.16.3   | ✗      | 38487.2    | 25.47        | 6.86          |
| hono                     | 4.11.3   | ✓      | 37415.2    | 26.18        | 6.14          |
| take-five                | 2.0.0    | ✓      | 36188.2    | 27.13        | 13.01         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 36114.6    | 27.20        | 6.44          |
| restify                  | 11.1.0   | ✓      | 35507.0    | 27.64        | 6.40          |
| koa-router               | 13.1.1   | ✓      | 34599.4    | 28.42        | 6.17          |
| hapi                     | 21.4.4   | ✓      | 32555.0    | 30.21        | 5.81          |
| microrouter              | 3.1.3    | ✓      | 30442.4    | 32.36        | 5.43          |
| fastify-big-json         | 5.6.2    | ✓      | 11982.4    | 82.89        | 137.87        |
| express                  | 5.2.1    | ✓      | 10014.4    | 99.27        | 1.79          |
| frourio-express          | 1.3.1    | ✓      | 9914.4     | 100.27       | 1.77          |
| express-with-middlewares | 5.2.1    | ✓      | 9412.5     | 105.64       | 3.50          |
| trpc-router              | 10.45.3  | ✓      | N/A        | N/A          | N/A           |
