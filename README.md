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
* __Node:__ `v20.18.2`
* __Run:__ Mon Feb 10 2025 01:03:12 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.2 | ✗      | 48693.6    | 20.04        | 8.68          |
| fastify                  | 5.2.1    | ✓      | 47944.8    | 20.38        | 8.60          |
| frourio                  | 1.3.1    | ✓      | 47379.2    | 20.60        | 8.49          |
| rayo                     | 1.4.6    | ✓      | 46725.6    | 20.90        | 8.33          |
| polka                    | 0.5.2    | ✓      | 46449.6    | 21.03        | 8.28          |
| 0http                    | 4.1.0    | ✓      | 46197.6    | 21.16        | 8.24          |
| connect                  | 3.7.0    | ✗      | 46158.4    | 21.16        | 8.23          |
| server-base-router       | 7.1.32   | ✓      | 46105.6    | 21.19        | 8.22          |
| server-base              | 7.1.32   | ✗      | 45873.6    | 21.28        | 8.18          |
| polkadot                 | 1.0.0    | ✗      | 44895.2    | 21.78        | 8.01          |
| micro                    | 10.0.1   | ✗      | 44738.4    | 21.85        | 7.98          |
| h3                       | 1.15.0   | ✗      | 44462.4    | 21.99        | 7.93          |
| connect-router           | 1.3.8    | ✓      | 43980.0    | 22.24        | 7.84          |
| adonisjs                 | 7.4.0    | ✓      | 42393.6    | 23.09        | 7.56          |
| micro-route              | 2.5.0    | ✓      | 42280.0    | 23.15        | 7.54          |
| h3-router                | 1.15.0   | ✓      | 42167.2    | 23.22        | 7.52          |
| restana                  | v5.0.0   | ✓      | 41152.0    | 23.80        | 7.34          |
| hono                     | 4.7.0    | ✓      | 40484.8    | 24.19        | 6.64          |
| koa                      | 2.15.3   | ✗      | 37012.2    | 26.51        | 6.60          |
| restify                  | 11.1.0   | ✓      | 35651.8    | 27.55        | 6.43          |
| take-five                | 2.0.0    | ✓      | 35594.6    | 27.58        | 12.80         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35112.6    | 27.98        | 6.26          |
| koa-router               | 13.1.0   | ✓      | 33764.2    | 29.11        | 6.02          |
| hapi                     | 21.3.12  | ✓      | 31432.2    | 31.31        | 5.61          |
| microrouter              | 3.1.3    | ✓      | 30130.0    | 32.68        | 5.37          |
| fastify-big-json         | 5.2.1    | ✓      | 11974.2    | 82.97        | 137.77        |
| express                  | 5.0.1    | ✓      | 10574.4    | 93.98        | 1.89          |
| frourio-express          | 1.3.1    | ✓      | 10434.4    | 95.26        | 1.86          |
| express-with-middlewares | 5.0.1    | ✓      | 9261.4     | 107.36       | 3.44          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
