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
* __Node:__ `v20.18.3`
* __Run:__ Mon Mar 03 2025 01:04:27 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| polka                    | 0.5.2    | ✓      | 43792.8    | 22.34        | 7.81          |
| rayo                     | 1.4.6    | ✓      | 43598.4    | 22.44        | 7.78          |
| bare                     | v20.18.3 | ✗      | 43273.6    | 22.61        | 7.72          |
| server-base              | 7.1.32   | ✗      | 43272.0    | 22.61        | 7.72          |
| frourio                  | 1.3.1    | ✓      | 42999.2    | 22.75        | 7.71          |
| connect                  | 3.7.0    | ✗      | 42976.8    | 22.77        | 7.66          |
| micro                    | 10.0.1   | ✗      | 41628.0    | 23.52        | 7.42          |
| server-base-router       | 7.1.32   | ✓      | 41495.2    | 23.60        | 7.40          |
| polkadot                 | 1.0.0    | ✗      | 41003.2    | 23.89        | 7.31          |
| micro-route              | 2.5.0    | ✓      | 39556.0    | 24.78        | 7.05          |
| 0http                    | 4.2.0    | ✓      | 39353.6    | 24.92        | 7.02          |
| connect-router           | 1.3.8    | ✓      | 37971.2    | 25.83        | 6.77          |
| fastify                  | 5.2.1    | ✓      | 37660.0    | 26.05        | 6.75          |
| h3                       | 1.15.1   | ✗      | 36734.4    | 26.73        | 6.55          |
| hono                     | 4.7.2    | ✓      | 36273.8    | 27.06        | 5.95          |
| adonisjs                 | 7.5.0    | ✓      | 36032.0    | 27.26        | 6.43          |
| h3-router                | 1.15.1   | ✓      | 35733.0    | 27.49        | 6.37          |
| restana                  | v5.0.0   | ✓      | 35696.2    | 27.52        | 6.37          |
| restify                  | 11.1.0   | ✓      | 34045.2    | 28.87        | 6.14          |
| koa                      | 2.16.0   | ✗      | 33836.4    | 29.04        | 6.03          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 31683.0    | 31.06        | 5.65          |
| take-five                | 2.0.0    | ✓      | 31622.8    | 31.12        | 11.37         |
| koa-router               | 13.1.0   | ✓      | 31282.4    | 31.47        | 5.58          |
| hapi                     | 21.3.12  | ✓      | 28499.6    | 34.58        | 5.08          |
| microrouter              | 3.1.3    | ✓      | 26981.2    | 36.55        | 4.81          |
| fastify-big-json         | 5.2.1    | ✓      | 10521.0    | 94.48        | 121.05        |
| frourio-express          | 1.3.1    | ✓      | 9633.8     | 103.18       | 1.72          |
| express                  | 5.0.1    | ✓      | 8442.5     | 117.84       | 1.51          |
| express-with-middlewares | 5.0.1    | ✓      | 7792.5     | 127.69       | 2.90          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
