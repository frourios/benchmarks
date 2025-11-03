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
* __Run:__ Mon Nov 03 2025 01:07:26 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.5 | ✗      | 48268.8    | 20.24        | 8.61          |
| fastify                  | 5.6.1    | ✓      | 48040.8    | 20.34        | 8.61          |
| frourio                  | 1.3.1    | ✓      | 47506.4    | 20.55        | 8.52          |
| 0http                    | 4.3.0    | ✓      | 47209.6    | 20.68        | 8.42          |
| rayo                     | 1.4.6    | ✓      | 47085.6    | 20.73        | 8.40          |
| polka                    | 0.5.2    | ✓      | 46860.8    | 20.83        | 8.36          |
| server-base              | 7.1.32   | ✗      | 46797.6    | 20.86        | 8.35          |
| polkadot                 | 1.0.0    | ✗      | 46625.6    | 20.95        | 8.31          |
| server-base-router       | 7.1.32   | ✓      | 46189.6    | 21.14        | 8.24          |
| connect                  | 3.7.0    | ✗      | 46034.4    | 21.21        | 8.21          |
| micro                    | 10.0.1   | ✗      | 45385.6    | 21.53        | 8.09          |
| h3-router                | 1.15.4   | ✓      | 44055.2    | 22.20        | 7.86          |
| h3                       | 1.15.4   | ✗      | 43840.8    | 22.31        | 7.82          |
| connect-router           | 1.3.8    | ✓      | 43567.2    | 22.44        | 7.77          |
| micro-route              | 2.5.0    | ✓      | 43104.0    | 22.68        | 7.69          |
| restana                  | v5.1.0   | ✓      | 42888.0    | 22.82        | 7.65          |
| adonisjs                 | 7.7.0    | ✓      | 42080.8    | 23.27        | 7.50          |
| koa                      | 2.16.3   | ✗      | 37521.0    | 26.16        | 6.69          |
| hono                     | 4.10.4   | ✓      | 37247.2    | 26.36        | 6.11          |
| take-five                | 2.0.0    | ✓      | 36139.0    | 27.15        | 12.99         |
| restify                  | 11.1.0   | ✓      | 35309.8    | 27.82        | 6.36          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35234.6    | 27.88        | 6.28          |
| koa-router               | 13.1.1   | ✓      | 34271.8    | 28.68        | 6.11          |
| hapi                     | 21.4.3   | ✓      | 32750.2    | 30.03        | 5.84          |
| microrouter              | 3.1.3    | ✓      | 29754.0    | 33.10        | 5.31          |
| fastify-big-json         | 5.6.1    | ✓      | 11876.4    | 83.64        | 136.64        |
| express                  | 5.1.0    | ✓      | 10212.4    | 97.31        | 1.82          |
| frourio-express          | 1.3.1    | ✓      | 9796.5     | 101.47       | 1.75          |
| express-with-middlewares | 5.1.0    | ✓      | 9201.9     | 108.06       | 3.42          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
