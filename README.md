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
* __Node:__ `v20.20.0`
* __Run:__ Mon Feb 09 2026 01:16:09 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.0 | ✗      | 68876.8    | 14.03        | 12.28         |
| frourio                  | 1.3.1    | ✓      | 68511.2    | 14.10        | 12.28         |
| fastify                  | 5.7.4    | ✓      | 66919.2    | 14.44        | 12.00         |
| polka                    | 0.5.2    | ✓      | 66795.2    | 14.47        | 11.91         |
| server-base-router       | 7.1.32   | ✓      | 65381.6    | 14.79        | 11.66         |
| micro                    | 10.0.1   | ✗      | 65045.6    | 14.88        | 11.60         |
| server-base              | 7.1.32   | ✗      | 64652.8    | 14.97        | 11.53         |
| rayo                     | 1.4.6    | ✓      | 64618.0    | 14.97        | 11.52         |
| connect                  | 3.7.0    | ✗      | 64235.6    | 15.08        | 11.45         |
| connect-router           | 1.3.8    | ✓      | 61416.0    | 15.79        | 10.95         |
| micro-route              | 2.5.0    | ✓      | 60484.8    | 16.03        | 10.79         |
| adonisjs                 | 7.8.0    | ✓      | 60360.0    | 16.07        | 10.76         |
| polkadot                 | 1.0.0    | ✗      | 58609.6    | 16.57        | 10.45         |
| 0http                    | 4.3.0    | ✓      | 58572.8    | 16.58        | 10.45         |
| restana                  | v5.1.0   | ✓      | 55592.8    | 17.50        | 9.91          |
| h3                       | 1.15.5   | ✗      | 55525.6    | 17.51        | 9.90          |
| h3-router                | 1.15.5   | ✓      | 55192.8    | 17.62        | 9.84          |
| koa                      | 2.16.3   | ✗      | 52812.8    | 18.44        | 9.42          |
| hono                     | 4.11.9   | ✓      | 52616.0    | 18.51        | 8.63          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 49828.8    | 19.57        | 8.89          |
| take-five                | 2.0.0    | ✓      | 49147.2    | 19.85        | 17.67         |
| restify                  | 11.1.0   | ✓      | 48562.4    | 20.09        | 8.75          |
| koa-router               | 13.1.1   | ✓      | 47616.0    | 20.50        | 8.49          |
| microrouter              | 3.1.3    | ✓      | 42016.8    | 23.30        | 7.49          |
| hapi                     | 21.4.4   | ✓      | 41515.2    | 23.58        | 7.40          |
| fastify-big-json         | 5.7.4    | ✓      | 12706.6    | 78.16        | 146.18        |
| frourio-express          | 1.3.1    | ✓      | 11819.8    | 84.04        | 2.11          |
| express                  | 5.2.1    | ✓      | 11807.4    | 84.13        | 2.11          |
| express-with-middlewares | 5.2.1    | ✓      | 10928.4    | 90.93        | 4.06          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
