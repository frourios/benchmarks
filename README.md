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
* __Run:__ Mon May 18 2026 01:35:27 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 56764.0    | 17.11        | 10.12         |
| connect                  | 3.7.0    | ✗      | 56610.4    | 17.16        | 10.10         |
| server-base-router       | 7.1.32   | ✓      | 56285.6    | 17.26        | 10.04         |
| frourio                  | 1.3.1    | ✓      | 56280.0    | 17.27        | 10.09         |
| polka                    | 0.5.2    | ✓      | 56130.4    | 17.31        | 10.01         |
| fastify                  | 5.8.5    | ✓      | 55084.0    | 17.65        | 9.88          |
| server-base              | 7.1.32   | ✗      | 55022.4    | 17.67        | 9.81          |
| rayo                     | 1.4.6    | ✓      | 54119.2    | 17.98        | 9.65          |
| connect-router           | 1.3.8    | ✓      | 52959.2    | 18.39        | 9.44          |
| micro                    | 10.0.1   | ✗      | 51981.6    | 18.74        | 9.27          |
| micro-route              | 2.5.0    | ✓      | 50659.2    | 19.25        | 9.03          |
| polkadot                 | 1.0.0    | ✗      | 49443.2    | 19.73        | 8.82          |
| 0http                    | 4.4.0    | ✓      | 47865.6    | 20.40        | 8.54          |
| adonisjs                 | 7.8.1    | ✓      | 47775.2    | 20.43        | 8.52          |
| h3-router                | 1.15.11  | ✓      | 47238.4    | 20.67        | 8.42          |
| h3                       | 1.15.11  | ✗      | 46272.0    | 21.11        | 8.25          |
| hono                     | 4.12.19  | ✓      | 45717.6    | 21.37        | 7.50          |
| restana                  | v5.2.0   | ✓      | 45368.8    | 21.55        | 8.09          |
| koa                      | 2.16.4   | ✗      | 44940.0    | 21.75        | 8.01          |
| take-five                | 2.0.0    | ✓      | 44001.6    | 22.23        | 15.82         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 42611.2    | 22.97        | 7.60          |
| koa-router               | 13.1.1   | ✓      | 41456.0    | 23.62        | 7.39          |
| restify                  | 11.1.0   | ✓      | 40864.8    | 23.97        | 7.37          |
| microrouter              | 3.1.3    | ✓      | 38338.6    | 25.58        | 6.84          |
| hapi                     | 21.4.9   | ✓      | 38039.2    | 25.78        | 6.78          |
| fastify-big-json         | 5.8.5    | ✓      | 11865.4    | 83.71        | 136.51        |
| frourio-express          | 1.3.1    | ✓      | 11712.2    | 84.82        | 2.09          |
| express                  | 5.2.1    | ✓      | 11488.0    | 86.46        | 2.05          |
| express-with-middlewares | 5.2.1    | ✓      | 10742.2    | 92.48        | 4.00          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
