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
* __Node:__ `v20.20.2`
* __Run:__ Mon Jul 13 2026 03:35:30 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 47859.2    | 20.41        | 8.54          |
| frourio                  | 1.3.1    | ✓      | 47824.8    | 20.41        | 8.57          |
| fastify                  | 5.10.0   | ✓      | 47207.2    | 20.68        | 8.46          |
| connect                  | 3.7.0    | ✗      | 47201.6    | 20.69        | 8.42          |
| server-base              | 7.1.32   | ✗      | 46439.2    | 21.04        | 8.28          |
| server-base-router       | 7.1.32   | ✓      | 45972.0    | 21.25        | 8.20          |
| rayo                     | 1.4.6    | ✓      | 45534.4    | 21.47        | 8.12          |
| polkadot                 | 1.0.0    | ✗      | 44672.8    | 21.89        | 7.97          |
| micro                    | 10.0.1   | ✗      | 44562.4    | 21.94        | 7.95          |
| 0http                    | 4.4.0    | ✓      | 44100.8    | 22.18        | 7.86          |
| connect-router           | 1.3.8    | ✓      | 43410.4    | 22.53        | 7.74          |
| polka                    | 0.5.2    | ✓      | 43321.6    | 22.57        | 7.73          |
| adonisjs                 | 7.8.1    | ✓      | 42654.4    | 22.95        | 7.61          |
| h3-router                | 1.15.11  | ✓      | 42492.0    | 23.03        | 7.58          |
| restana                  | v5.2.0   | ✓      | 42056.8    | 23.28        | 7.50          |
| h3                       | 1.15.11  | ✗      | 41840.8    | 23.40        | 7.46          |
| micro-route              | 2.5.0    | ✓      | 40638.4    | 24.11        | 7.25          |
| koa                      | 2.16.4   | ✗      | 36937.4    | 26.57        | 6.59          |
| take-five                | 2.0.0    | ✓      | 35937.8    | 27.33        | 12.92         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35094.2    | 28.00        | 6.26          |
| hono                     | 4.12.30  | ✓      | 34905.0    | 28.14        | 5.73          |
| restify                  | 11.1.0   | ✓      | 34372.0    | 28.59        | 6.20          |
| hapi                     | 21.4.9   | ✓      | 32690.2    | 30.08        | 5.83          |
| koa-router               | 13.1.1   | ✓      | 32489.4    | 30.28        | 5.79          |
| microrouter              | 3.1.3    | ✓      | 28852.0    | 34.15        | 5.15          |
| fastify-big-json         | 5.10.0   | ✓      | 12022.6    | 82.62        | 138.33        |
| express                  | 5.2.1    | ✓      | 10142.4    | 97.97        | 1.81          |
| frourio-express          | 1.3.1    | ✓      | 9630.3     | 103.23       | 1.72          |
| express-with-middlewares | 5.2.1    | ✓      | 8980.8     | 110.74       | 3.34          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
