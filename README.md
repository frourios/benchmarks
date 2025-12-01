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
* __Node:__ `v20.19.5`
* __Run:__ Mon Dec 01 2025 01:12:29 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| fastify                  | 5.6.2    | ✓      | 71910.4    | 13.41        | 12.89         |
| connect                  | 3.7.0    | ✗      | 70880.4    | 13.62        | 12.64         |
| frourio                  | 1.3.1    | ✓      | 70138.0    | 13.76        | 12.57         |
| bare                     | v20.19.5 | ✗      | 69629.2    | 13.87        | 12.42         |
| polka                    | 0.5.2    | ✓      | 69618.8    | 13.87        | 12.41         |
| rayo                     | 1.4.6    | ✓      | 69569.2    | 13.88        | 12.41         |
| server-base              | 7.1.32   | ✗      | 68415.6    | 14.13        | 12.20         |
| server-base-router       | 7.1.32   | ✓      | 68082.4    | 14.19        | 12.14         |
| micro                    | 10.0.1   | ✗      | 67305.2    | 14.36        | 12.00         |
| connect-router           | 1.3.8    | ✓      | 64563.2    | 14.99        | 11.51         |
| micro-route              | 2.5.0    | ✓      | 63433.2    | 15.27        | 11.31         |
| adonisjs                 | 7.7.0    | ✓      | 62819.2    | 15.42        | 11.20         |
| polkadot                 | 1.0.0    | ✗      | 61285.6    | 15.82        | 10.93         |
| 0http                    | 4.3.0    | ✓      | 60540.8    | 16.03        | 10.80         |
| h3                       | 1.15.4   | ✗      | 58579.2    | 16.58        | 10.45         |
| restana                  | v5.1.0   | ✓      | 58040.8    | 16.74        | 10.35         |
| hono                     | 4.10.7   | ✓      | 57004.8    | 17.05        | 9.35          |
| h3-router                | 1.15.4   | ✓      | 56668.8    | 17.15        | 10.11         |
| koa                      | 2.16.3   | ✗      | 55464.0    | 17.54        | 9.89          |
| restify                  | 11.1.0   | ✓      | 50709.6    | 19.22        | 9.14          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 50480.8    | 19.31        | 9.00          |
| koa-router               | 13.1.1   | ✓      | 50109.6    | 19.46        | 8.94          |
| take-five                | 2.0.0    | ✓      | 50056.0    | 19.48        | 18.00         |
| microrouter              | 3.1.3    | ✓      | 44024.0    | 22.22        | 7.85          |
| hapi                     | 21.4.4   | ✓      | 43244.0    | 22.63        | 7.71          |
| fastify-big-json         | 5.6.2    | ✓      | 12969.0    | 76.54        | 149.22        |
| express                  | 5.1.0    | ✓      | 12060.2    | 82.33        | 2.15          |
| frourio-express          | 1.3.1    | ✓      | 11993.6    | 82.81        | 2.14          |
| express-with-middlewares | 5.1.0    | ✓      | 11225.2    | 88.52        | 4.17          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
