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
* __Node:__ `v20.18.2`
* __Run:__ Mon Feb 17 2025 01:04:00 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.18.2 | ✗      | 49438.4    | 19.71        | 8.82          |
| connect                  | 3.7.0    | ✗      | 47548.0    | 20.52        | 8.48          |
| frourio                  | 1.3.1    | ✓      | 47183.2    | 20.69        | 8.46          |
| polka                    | 0.5.2    | ✓      | 47172.8    | 20.69        | 8.41          |
| fastify                  | 5.2.1    | ✓      | 47052.8    | 20.75        | 8.44          |
| rayo                     | 1.4.6    | ✓      | 46870.4    | 20.83        | 8.36          |
| polkadot                 | 1.0.0    | ✗      | 46401.6    | 21.06        | 8.27          |
| server-base              | 7.1.32   | ✗      | 46364.0    | 21.06        | 8.27          |
| server-base-router       | 7.1.32   | ✓      | 45749.6    | 21.35        | 8.16          |
| 0http                    | 4.1.0    | ✓      | 45425.6    | 21.53        | 8.10          |
| h3                       | 1.15.0   | ✗      | 44641.6    | 21.90        | 7.96          |
| connect-router           | 1.3.8    | ✓      | 44140.0    | 22.15        | 7.87          |
| micro                    | 10.0.1   | ✗      | 43922.4    | 22.26        | 7.83          |
| h3-router                | 1.15.0   | ✓      | 43607.2    | 22.43        | 7.78          |
| micro-route              | 2.5.0    | ✓      | 42354.4    | 23.12        | 7.55          |
| adonisjs                 | 7.4.0    | ✓      | 42151.2    | 23.22        | 7.52          |
| restana                  | v5.0.0   | ✓      | 40988.0    | 23.89        | 7.31          |
| hono                     | 4.7.1    | ✓      | 40236.8    | 24.34        | 6.60          |
| koa                      | 2.15.4   | ✗      | 37361.6    | 26.27        | 6.66          |
| take-five                | 2.0.0    | ✓      | 35687.0    | 27.51        | 12.83         |
| restify                  | 11.1.0   | ✓      | 35577.4    | 27.61        | 6.41          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35214.6    | 27.90        | 6.28          |
| koa-router               | 13.1.0   | ✓      | 33195.6    | 29.63        | 5.92          |
| hapi                     | 21.3.12  | ✓      | 32328.6    | 30.43        | 5.76          |
| microrouter              | 3.1.3    | ✓      | 30069.2    | 32.75        | 5.36          |
| fastify-big-json         | 5.2.1    | ✓      | 12022.4    | 82.62        | 138.33        |
| express                  | 5.0.1    | ✓      | 10337.8    | 96.13        | 1.84          |
| frourio-express          | 1.3.1    | ✓      | 10228.4    | 97.18        | 1.82          |
| express-with-middlewares | 5.0.1    | ✓      | 9550.8     | 104.11       | 3.55          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
