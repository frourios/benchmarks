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
* __Run:__ Mon Jan 19 2026 01:10:22 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.6 | ✗      | 47392.8    | 20.60        | 8.45          |
| fastify                  | 5.7.1    | ✓      | 46438.4    | 21.03        | 8.33          |
| polka                    | 0.5.2    | ✓      | 45752.8    | 21.34        | 8.16          |
| frourio                  | 1.3.1    | ✓      | 45652.8    | 21.39        | 8.19          |
| connect                  | 3.7.0    | ✗      | 45356.8    | 21.56        | 8.09          |
| rayo                     | 1.4.6    | ✓      | 45263.2    | 21.60        | 8.07          |
| server-base              | 7.1.32   | ✗      | 45148.8    | 21.66        | 8.05          |
| polkadot                 | 1.0.0    | ✗      | 44989.6    | 21.74        | 8.02          |
| 0http                    | 4.3.0    | ✓      | 44614.4    | 21.92        | 7.96          |
| server-base-router       | 7.1.32   | ✓      | 44016.8    | 22.22        | 7.85          |
| micro                    | 10.0.1   | ✗      | 43874.4    | 22.29        | 7.82          |
| h3                       | 1.15.5   | ✗      | 43314.4    | 22.59        | 7.72          |
| connect-router           | 1.3.8    | ✓      | 43075.2    | 22.70        | 7.68          |
| adonisjs                 | 7.8.0    | ✓      | 42085.6    | 23.26        | 7.51          |
| micro-route              | 2.5.0    | ✓      | 41993.6    | 23.32        | 7.49          |
| restana                  | v5.1.0   | ✓      | 41476.8    | 23.61        | 7.40          |
| h3-router                | 1.15.5   | ✓      | 41030.4    | 23.88        | 7.32          |
| hono                     | 4.11.4   | ✓      | 36785.6    | 26.69        | 6.03          |
| koa                      | 2.16.3   | ✗      | 36408.8    | 26.96        | 6.49          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34670.2    | 28.34        | 6.18          |
| take-five                | 2.0.0    | ✓      | 34244.0    | 28.69        | 12.31         |
| restify                  | 11.1.0   | ✓      | 34208.2    | 28.73        | 6.17          |
| koa-router               | 13.1.1   | ✓      | 33698.4    | 29.17        | 6.01          |
| hapi                     | 21.4.4   | ✓      | 31356.0    | 31.38        | 5.59          |
| microrouter              | 3.1.3    | ✓      | 28951.2    | 34.03        | 5.16          |
| fastify-big-json         | 5.7.1    | ✓      | 11600.4    | 85.63        | 133.46        |
| express                  | 5.2.1    | ✓      | 9767.3     | 101.77       | 1.74          |
| frourio-express          | 1.3.1    | ✓      | 9694.4     | 102.54       | 1.73          |
| express-with-middlewares | 5.2.1    | ✓      | 8984.4     | 110.69       | 3.34          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
