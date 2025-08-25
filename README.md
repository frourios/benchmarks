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
* __Node:__ `v20.19.4`
* __Run:__ Mon Aug 25 2025 01:06:40 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| frourio                  | 1.3.1    | ✓      | 47628.0    | 20.50        | 8.54          |
| bare                     | v20.19.4 | ✗      | 47120.8    | 20.71        | 8.40          |
| polka                    | 0.5.2    | ✓      | 46750.4    | 20.88        | 8.34          |
| rayo                     | 1.4.6    | ✓      | 46624.8    | 20.95        | 8.31          |
| fastify                  | 5.5.0    | ✓      | 46536.8    | 20.98        | 8.34          |
| polkadot                 | 1.0.0    | ✗      | 46220.0    | 21.14        | 8.24          |
| connect                  | 3.7.0    | ✗      | 45916.8    | 21.27        | 8.19          |
| server-base-router       | 7.1.32   | ✓      | 45788.0    | 21.33        | 8.17          |
| server-base              | 7.1.32   | ✗      | 44786.4    | 21.83        | 7.99          |
| 0http                    | 4.3.0    | ✓      | 44734.4    | 21.85        | 7.98          |
| h3                       | 1.15.4   | ✗      | 44728.0    | 21.86        | 7.98          |
| micro                    | 10.0.1   | ✗      | 44713.6    | 21.86        | 7.97          |
| connect-router           | 1.3.8    | ✓      | 43229.6    | 22.63        | 7.71          |
| adonisjs                 | 7.7.0    | ✓      | 43176.0    | 22.66        | 7.70          |
| micro-route              | 2.5.0    | ✓      | 42304.8    | 23.13        | 7.54          |
| restana                  | v5.1.0   | ✓      | 42278.4    | 23.15        | 7.54          |
| h3-router                | 1.15.4   | ✓      | 40553.6    | 24.17        | 7.23          |
| koa                      | 2.16.2   | ✗      | 36961.6    | 26.56        | 6.59          |
| hono                     | 4.9.4    | ✓      | 36614.4    | 26.81        | 6.01          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35441.8    | 27.71        | 6.32          |
| take-five                | 2.0.0    | ✓      | 35040.2    | 28.04        | 12.60         |
| restify                  | 11.1.0   | ✓      | 34650.6    | 28.35        | 6.25          |
| koa-router               | 13.1.1   | ✓      | 34322.8    | 28.63        | 6.12          |
| hapi                     | 21.4.3   | ✓      | 31225.0    | 31.52        | 5.57          |
| microrouter              | 3.1.3    | ✓      | 30291.2    | 32.50        | 5.40          |
| fastify-big-json         | 5.5.0    | ✓      | 12294.8    | 80.75        | 141.46        |
| express                  | 5.1.0    | ✓      | 10122.2    | 98.22        | 1.81          |
| frourio-express          | 1.3.1    | ✓      | 9915.8     | 100.25       | 1.77          |
| express-with-middlewares | 5.1.0    | ✓      | 8998.9     | 110.50       | 3.35          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
