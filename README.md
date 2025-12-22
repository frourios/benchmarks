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
* __Run:__ Mon Dec 22 2025 01:09:02 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.6 | ✗      | 72075.2    | 13.38        | 12.85         |
| frourio                  | 1.3.1    | ✓      | 71692.8    | 13.45        | 12.85         |
| polka                    | 0.5.2    | ✓      | 70793.2    | 13.64        | 12.62         |
| connect                  | 3.7.0    | ✗      | 69825.2    | 13.83        | 12.45         |
| rayo                     | 1.4.6    | ✓      | 69470.0    | 13.90        | 12.39         |
| fastify                  | 5.6.2    | ✓      | 69156.4    | 13.98        | 12.40         |
| server-base-router       | 7.1.32   | ✓      | 68454.0    | 14.11        | 12.21         |
| micro                    | 10.0.1   | ✗      | 67300.8    | 14.36        | 12.00         |
| server-base              | 7.1.32   | ✗      | 66818.0    | 14.47        | 11.92         |
| connect-router           | 1.3.8    | ✓      | 65328.8    | 14.80        | 11.65         |
| micro-route              | 2.5.0    | ✓      | 61968.8    | 15.65        | 11.05         |
| polkadot                 | 1.0.0    | ✗      | 60485.6    | 16.04        | 10.79         |
| adonisjs                 | 7.7.0    | ✓      | 60027.2    | 16.17        | 10.71         |
| h3                       | 1.15.4   | ✗      | 58987.2    | 16.46        | 10.52         |
| 0http                    | 4.3.0    | ✓      | 58859.2    | 16.50        | 10.50         |
| h3-router                | 1.15.4   | ✓      | 56856.8    | 17.10        | 10.14         |
| restana                  | v5.1.0   | ✓      | 56510.4    | 17.20        | 10.08         |
| hono                     | 4.11.1   | ✓      | 56220.8    | 17.30        | 9.22          |
| koa                      | 2.16.3   | ✗      | 55591.2    | 17.50        | 9.91          |
| take-five                | 2.0.0    | ✓      | 52189.6    | 18.67        | 18.76         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 50721.6    | 19.21        | 9.05          |
| restify                  | 11.1.0   | ✓      | 49556.8    | 19.68        | 8.93          |
| koa-router               | 13.1.1   | ✓      | 48596.0    | 20.08        | 8.67          |
| hapi                     | 21.4.4   | ✓      | 43580.8    | 22.45        | 7.77          |
| microrouter              | 3.1.3    | ✓      | 43232.0    | 22.63        | 7.71          |
| fastify-big-json         | 5.6.2    | ✓      | 13250.8    | 74.92        | 152.46        |
| express                  | 5.2.1    | ✓      | 12271.8    | 80.91        | 2.19          |
| frourio-express          | 1.3.1    | ✓      | 12115.4    | 81.93        | 2.16          |
| express-with-middlewares | 5.2.1    | ✓      | 11178.0    | 88.87        | 4.16          |
| trpc-router              | 10.45.3  | ✓      | N/A        | N/A          | N/A           |
