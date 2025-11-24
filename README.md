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
* __Run:__ Mon Nov 24 2025 01:08:13 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| 0http                    | 4.3.0    | ✓      | 46156.8    | 21.17        | 8.23          |
| fastify                  | 5.6.2    | ✓      | 46014.4    | 21.22        | 8.25          |
| frourio                  | 1.3.1    | ✓      | 45936.0    | 21.26        | 8.24          |
| polkadot                 | 1.0.0    | ✗      | 45870.4    | 21.30        | 8.18          |
| bare                     | v20.19.5 | ✗      | 45702.6    | 21.37        | 8.15          |
| polka                    | 0.5.2    | ✓      | 45599.2    | 21.43        | 8.13          |
| rayo                     | 1.4.6    | ✓      | 45480.0    | 21.49        | 8.11          |
| connect                  | 3.7.0    | ✗      | 45466.4    | 21.51        | 8.11          |
| server-base              | 7.1.32   | ✗      | 45380.0    | 21.54        | 8.09          |
| micro                    | 10.0.1   | ✗      | 45124.0    | 21.66        | 8.05          |
| server-base-router       | 7.1.32   | ✓      | 44699.2    | 21.88        | 7.97          |
| h3                       | 1.15.4   | ✗      | 44464.8    | 21.99        | 7.93          |
| connect-router           | 1.3.8    | ✓      | 43018.4    | 22.73        | 7.67          |
| restana                  | v5.1.0   | ✓      | 42652.0    | 22.95        | 7.61          |
| h3-router                | 1.15.4   | ✓      | 42432.8    | 23.07        | 7.57          |
| micro-route              | 2.5.0    | ✓      | 41947.2    | 23.34        | 7.48          |
| adonisjs                 | 7.7.0    | ✓      | 41152.8    | 23.80        | 7.34          |
| koa                      | 2.16.3   | ✗      | 37057.8    | 26.48        | 6.61          |
| hono                     | 4.10.6   | ✓      | 36523.4    | 26.88        | 5.99          |
| restify                  | 11.1.0   | ✓      | 35203.8    | 27.90        | 6.35          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34393.0    | 28.56        | 6.13          |
| take-five                | 2.0.0    | ✓      | 34262.0    | 28.69        | 12.32         |
| koa-router               | 13.1.1   | ✓      | 33367.6    | 29.46        | 5.95          |
| hapi                     | 21.4.4   | ✓      | 31376.6    | 31.36        | 5.60          |
| microrouter              | 3.1.3    | ✓      | 29124.8    | 33.83        | 5.19          |
| fastify-big-json         | 5.6.2    | ✓      | 11766.0    | 84.43        | 135.38        |
| express                  | 5.1.0    | ✓      | 9908.9     | 100.32       | 1.77          |
| frourio-express          | 1.3.1    | ✓      | 9330.5     | 106.50       | 1.66          |
| express-with-middlewares | 5.1.0    | ✓      | 8927.3     | 111.41       | 3.32          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
