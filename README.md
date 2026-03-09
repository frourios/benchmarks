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
* __Node:__ `v20.20.0`
* __Run:__ Mon Mar 09 2026 01:14:55 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| fastify                  | 5.8.2    | ✓      | 46455.2    | 21.02        | 8.33          |
| micro                    | 10.0.1   | ✗      | 46114.4    | 21.19        | 8.22          |
| server-base-router       | 7.1.32   | ✓      | 45522.4    | 21.48        | 8.12          |
| frourio                  | 1.3.1    | ✓      | 45323.2    | 21.56        | 8.13          |
| bare                     | v20.20.0 | ✗      | 45215.8    | 21.61        | 8.06          |
| 0http                    | 4.3.0    | ✓      | 45041.6    | 21.71        | 8.03          |
| server-base              | 7.1.32   | ✗      | 44939.2    | 21.77        | 8.01          |
| connect                  | 3.7.0    | ✗      | 44670.4    | 21.89        | 7.97          |
| polka                    | 0.5.2    | ✓      | 44580.0    | 21.94        | 7.95          |
| rayo                     | 1.4.6    | ✓      | 44394.4    | 22.03        | 7.92          |
| connect-router           | 1.3.8    | ✓      | 43438.4    | 22.51        | 7.75          |
| adonisjs                 | 7.8.0    | ✓      | 42809.6    | 22.88        | 7.63          |
| polkadot                 | 1.0.0    | ✗      | 42356.8    | 23.11        | 7.55          |
| h3-router                | 1.15.6   | ✓      | 42261.6    | 23.16        | 7.54          |
| h3                       | 1.15.6   | ✗      | 41836.0    | 23.40        | 7.46          |
| micro-route              | 2.5.0    | ✓      | 41789.6    | 23.43        | 7.45          |
| restana                  | v5.1.0   | ✓      | 40374.4    | 24.27        | 7.20          |
| koa                      | 2.16.4   | ✗      | 37163.4    | 26.41        | 6.63          |
| hono                     | 4.12.5   | ✓      | 36586.2    | 26.84        | 6.00          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35354.8    | 27.78        | 6.31          |
| take-five                | 2.0.0    | ✓      | 35230.0    | 27.88        | 12.67         |
| restify                  | 11.1.0   | ✓      | 34063.0    | 28.85        | 6.14          |
| koa-router               | 13.1.1   | ✓      | 33302.0    | 29.53        | 5.94          |
| hapi                     | 21.4.7   | ✓      | 32236.6    | 30.52        | 5.75          |
| microrouter              | 3.1.3    | ✓      | 29590.4    | 33.29        | 5.28          |
| fastify-big-json         | 5.8.2    | ✓      | 11210.2    | 88.64        | 128.99        |
| express                  | 5.2.1    | ✓      | 10516.4    | 94.52        | 1.88          |
| frourio-express          | 1.3.1    | ✓      | 10008.3    | 99.32        | 1.78          |
| express-with-middlewares | 5.2.1    | ✓      | 9029.4     | 110.12       | 3.36          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
