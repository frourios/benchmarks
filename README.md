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
* __Run:__ Mon Jul 06 2026 01:29:22 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 49985.6    | 19.51        | 8.91          |
| fastify                  | 5.10.0   | ✓      | 49745.6    | 19.59        | 8.92          |
| frourio                  | 1.3.1    | ✓      | 49463.2    | 19.74        | 8.87          |
| connect                  | 3.7.0    | ✗      | 48416.8    | 20.15        | 8.63          |
| polka                    | 0.5.2    | ✓      | 47635.2    | 20.48        | 8.50          |
| 0http                    | 4.4.0    | ✓      | 47578.4    | 20.53        | 8.48          |
| server-base-router       | 7.1.32   | ✓      | 47264.8    | 20.66        | 8.43          |
| server-base              | 7.1.32   | ✗      | 47216.0    | 20.68        | 8.42          |
| polkadot                 | 1.0.0    | ✗      | 47113.6    | 20.72        | 8.40          |
| rayo                     | 1.4.6    | ✓      | 46682.4    | 20.91        | 8.32          |
| micro                    | 10.0.1   | ✗      | 45773.6    | 21.34        | 8.16          |
| restana                  | v5.2.0   | ✓      | 45086.4    | 21.69        | 8.04          |
| connect-router           | 1.3.8    | ✓      | 44658.4    | 21.90        | 7.96          |
| h3                       | 1.15.11  | ✗      | 44458.4    | 22.00        | 7.93          |
| micro-route              | 2.5.0    | ✓      | 43708.8    | 22.37        | 7.79          |
| adonisjs                 | 7.8.1    | ✓      | 43140.0    | 22.68        | 7.69          |
| h3-router                | 1.15.11  | ✓      | 42370.4    | 23.10        | 7.56          |
| koa                      | 2.16.4   | ✗      | 37798.6    | 25.96        | 6.74          |
| hono                     | 4.12.27  | ✓      | 36553.6    | 26.86        | 6.00          |
| restify                  | 11.1.0   | ✓      | 35909.8    | 27.34        | 6.47          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35808.6    | 27.41        | 6.39          |
| take-five                | 2.0.0    | ✓      | 35688.2    | 27.52        | 12.83         |
| koa-router               | 13.1.1   | ✓      | 34642.2    | 28.36        | 6.18          |
| hapi                     | 21.4.9   | ✓      | 33948.4    | 28.97        | 6.05          |
| microrouter              | 3.1.3    | ✓      | 30750.4    | 32.00        | 5.48          |
| fastify-big-json         | 5.10.0   | ✓      | 11898.4    | 83.50        | 136.89        |
| express                  | 5.2.1    | ✓      | 10268.8    | 96.81        | 1.83          |
| frourio-express          | 1.3.1    | ✓      | 9868.0     | 100.71       | 1.76          |
| express-with-middlewares | 5.2.1    | ✓      | 9212.5     | 107.91       | 3.43          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
