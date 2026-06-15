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
* __Run:__ Mon Jun 15 2026 01:47:37 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 48703.2    | 20.03        | 8.69          |
| connect                  | 3.7.0    | ✗      | 46986.4    | 20.77        | 8.38          |
| fastify                  | 5.8.5    | ✓      | 46876.0    | 20.82        | 8.40          |
| polka                    | 0.5.2    | ✓      | 46735.2    | 20.89        | 8.33          |
| rayo                     | 1.4.6    | ✓      | 46645.6    | 20.93        | 8.32          |
| frourio                  | 1.3.1    | ✓      | 46595.2    | 20.96        | 8.35          |
| server-base              | 7.1.32   | ✗      | 46592.0    | 20.95        | 8.31          |
| micro                    | 10.0.1   | ✗      | 46231.2    | 21.13        | 8.24          |
| polkadot                 | 1.0.0    | ✗      | 45715.2    | 21.38        | 8.15          |
| 0http                    | 4.4.0    | ✓      | 45610.4    | 21.43        | 8.13          |
| server-base-router       | 7.1.32   | ✓      | 45588.0    | 21.42        | 8.13          |
| connect-router           | 1.3.8    | ✓      | 43985.6    | 22.24        | 7.84          |
| restana                  | v5.2.0   | ✓      | 43109.6    | 22.70        | 7.69          |
| adonisjs                 | 7.8.1    | ✓      | 42944.0    | 22.79        | 7.66          |
| micro-route              | 2.5.0    | ✓      | 42720.0    | 22.92        | 7.62          |
| h3-router                | 1.15.11  | ✓      | 42601.6    | 22.97        | 7.60          |
| h3                       | 1.15.11  | ✗      | 42462.4    | 23.05        | 7.57          |
| koa                      | 2.16.4   | ✗      | 37188.2    | 26.39        | 6.63          |
| hono                     | 4.12.25  | ✓      | 36284.8    | 27.06        | 5.95          |
| take-five                | 2.0.0    | ✓      | 35617.0    | 27.58        | 12.81         |
| restify                  | 11.1.0   | ✓      | 35018.4    | 28.05        | 6.31          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34511.0    | 28.47        | 6.15          |
| koa-router               | 13.1.1   | ✓      | 33128.8    | 29.67        | 5.91          |
| hapi                     | 21.4.9   | ✓      | 32484.0    | 30.28        | 5.79          |
| microrouter              | 3.1.3    | ✓      | 30530.8    | 32.26        | 5.44          |
| fastify-big-json         | 5.8.5    | ✓      | 11715.8    | 84.76        | 134.80        |
| express                  | 5.2.1    | ✓      | 9864.8     | 100.73       | 1.76          |
| frourio-express          | 1.3.1    | ✓      | 9700.3     | 102.46       | 1.73          |
| express-with-middlewares | 5.2.1    | ✓      | 9075.5     | 109.58       | 3.38          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
