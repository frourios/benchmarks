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
* __Run:__ Mon Apr 14 2025 01:06:07 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.0 | ✗      | 48063.2    | 20.32        | 8.57          |
| fastify                  | 5.3.0    | ✓      | 46858.4    | 20.84        | 8.40          |
| frourio                  | 1.3.1    | ✓      | 46579.2    | 20.97        | 8.35          |
| polka                    | 0.5.2    | ✓      | 46555.2    | 20.97        | 8.30          |
| connect                  | 3.7.0    | ✗      | 46275.2    | 21.09        | 8.25          |
| rayo                     | 1.4.6    | ✓      | 46208.8    | 21.13        | 8.24          |
| polkadot                 | 1.0.0    | ✗      | 45827.2    | 21.32        | 8.17          |
| 0http                    | 4.2.0    | ✓      | 45714.4    | 21.39        | 8.15          |
| server-base-router       | 7.1.32   | ✓      | 45634.4    | 21.41        | 8.14          |
| micro                    | 10.0.1   | ✗      | 45576.8    | 21.44        | 8.13          |
| server-base              | 7.1.32   | ✗      | 45453.6    | 21.50        | 8.11          |
| connect-router           | 1.3.8    | ✓      | 43634.4    | 22.41        | 7.78          |
| h3                       | 1.15.1   | ✗      | 43056.8    | 22.73        | 7.68          |
| micro-route              | 2.5.0    | ✓      | 42370.4    | 23.12        | 7.56          |
| h3-router                | 1.15.1   | ✓      | 42192.0    | 23.20        | 7.52          |
| adonisjs                 | 7.6.0    | ✓      | 42072.8    | 23.27        | 7.50          |
| restana                  | v5.0.0   | ✓      | 40770.4    | 24.03        | 7.27          |
| hono                     | 4.7.6    | ✓      | 39129.6    | 25.06        | 6.42          |
| koa                      | 2.16.1   | ✗      | 37001.6    | 26.53        | 6.60          |
| restify                  | 11.1.0   | ✓      | 35488.6    | 27.68        | 6.40          |
| take-five                | 2.0.0    | ✓      | 35169.8    | 27.93        | 12.64         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34774.6    | 28.25        | 6.20          |
| koa-router               | 13.1.0   | ✓      | 32768.4    | 30.02        | 5.84          |
| hapi                     | 21.4.0   | ✓      | 30573.2    | 32.20        | 5.45          |
| microrouter              | 3.1.3    | ✓      | 29077.6    | 33.88        | 5.19          |
| fastify-big-json         | 5.3.0    | ✓      | 11858.0    | 83.77        | 136.43        |
| express                  | 5.1.0    | ✓      | 10049.8    | 98.91        | 1.79          |
| frourio-express          | 1.3.1    | ✓      | 9783.2     | 101.60       | 1.74          |
| express-with-middlewares | 5.1.0    | ✓      | 8968.9     | 110.87       | 3.34          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
