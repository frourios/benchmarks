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
* __Run:__ Mon Apr 28 2025 01:06:05 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.0 | ✗      | 47905.6    | 20.40        | 8.54          |
| fastify                  | 5.3.2    | ✓      | 47302.4    | 20.62        | 8.48          |
| frourio                  | 1.3.1    | ✓      | 47083.2    | 20.72        | 8.44          |
| polka                    | 0.5.2    | ✓      | 46946.4    | 20.79        | 8.37          |
| connect                  | 3.7.0    | ✗      | 46519.2    | 20.99        | 8.30          |
| micro                    | 10.0.1   | ✗      | 46148.0    | 21.18        | 8.23          |
| rayo                     | 1.4.6    | ✓      | 45706.4    | 21.36        | 8.15          |
| server-base              | 7.1.32   | ✗      | 45478.4    | 21.48        | 8.11          |
| polkadot                 | 1.0.0    | ✗      | 45240.8    | 21.61        | 8.07          |
| h3                       | 1.15.2   | ✗      | 44883.2    | 21.78        | 8.00          |
| server-base-router       | 7.1.32   | ✓      | 44517.6    | 21.97        | 7.94          |
| connect-router           | 1.3.8    | ✓      | 43759.2    | 22.35        | 7.80          |
| 0http                    | 4.2.0    | ✓      | 43716.0    | 22.38        | 7.80          |
| micro-route              | 2.5.0    | ✓      | 43015.2    | 22.74        | 7.67          |
| h3-router                | 1.15.2   | ✓      | 42954.4    | 22.78        | 7.66          |
| adonisjs                 | 7.6.0    | ✓      | 42241.6    | 23.17        | 7.53          |
| hono                     | 4.7.7    | ✓      | 41070.4    | 23.83        | 6.74          |
| restana                  | v5.0.0   | ✓      | 38392.0    | 25.55        | 6.85          |
| koa                      | 2.16.1   | ✗      | 36402.2    | 26.96        | 6.49          |
| take-five                | 2.0.0    | ✓      | 36107.0    | 27.18        | 12.98         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35025.8    | 28.04        | 6.25          |
| restify                  | 11.1.0   | ✓      | 34443.0    | 28.52        | 6.21          |
| koa-router               | 13.1.0   | ✓      | 33385.2    | 29.44        | 5.95          |
| hapi                     | 21.4.0   | ✓      | 32516.6    | 30.26        | 5.80          |
| microrouter              | 3.1.3    | ✓      | 30908.4    | 31.86        | 5.51          |
| fastify-big-json         | 5.3.2    | ✓      | 11949.4    | 83.14        | 137.48        |
| express                  | 5.1.0    | ✓      | 10021.8    | 99.16        | 1.79          |
| frourio-express          | 1.3.1    | ✓      | 9676.4     | 102.76       | 1.73          |
| express-with-middlewares | 5.1.0    | ✓      | 9086.0     | 109.43       | 3.38          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
