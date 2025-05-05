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
* __Node:__ `v20.19.1`
* __Run:__ Mon May 05 2025 01:07:04 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.1 | ✗      | 46141.6    | 21.17        | 8.23          |
| frourio                  | 1.3.1    | ✓      | 45952.0    | 21.26        | 8.24          |
| fastify                  | 5.3.2    | ✓      | 45304.0    | 21.57        | 8.12          |
| server-base              | 7.1.32   | ✗      | 45292.8    | 21.58        | 8.08          |
| connect                  | 3.7.0    | ✗      | 45266.4    | 21.58        | 8.07          |
| polka                    | 0.5.2    | ✓      | 45228.8    | 21.60        | 8.07          |
| server-base-router       | 7.1.32   | ✓      | 44918.4    | 21.77        | 8.01          |
| rayo                     | 1.4.6    | ✓      | 44733.6    | 21.86        | 7.98          |
| micro                    | 10.0.1   | ✗      | 43852.0    | 22.30        | 7.82          |
| polkadot                 | 1.0.0    | ✗      | 43630.4    | 22.43        | 7.78          |
| 0http                    | 4.2.0    | ✓      | 43298.4    | 22.60        | 7.72          |
| connect-router           | 1.3.8    | ✓      | 42393.6    | 23.08        | 7.56          |
| micro-route              | 2.5.0    | ✓      | 42209.6    | 23.19        | 7.53          |
| h3                       | 1.15.3   | ✗      | 41204.0    | 23.77        | 7.35          |
| adonisjs                 | 7.6.0    | ✓      | 40594.4    | 24.13        | 7.24          |
| h3-router                | 1.15.3   | ✓      | 40258.4    | 24.34        | 7.18          |
| hono                     | 4.7.8    | ✓      | 39930.4    | 24.53        | 6.55          |
| restana                  | v5.0.0   | ✓      | 38696.8    | 25.35        | 6.90          |
| koa                      | 2.16.1   | ✗      | 37013.0    | 26.52        | 6.60          |
| restify                  | 11.1.0   | ✓      | 34605.4    | 28.39        | 6.24          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34340.2    | 28.62        | 6.12          |
| take-five                | 2.0.0    | ✓      | 34071.2    | 28.85        | 12.25         |
| koa-router               | 13.1.0   | ✓      | 32744.6    | 30.03        | 5.84          |
| hapi                     | 21.4.0   | ✓      | 30699.6    | 32.07        | 5.47          |
| microrouter              | 3.1.3    | ✓      | 28762.0    | 34.26        | 5.13          |
| fastify-big-json         | 5.3.2    | ✓      | 11615.6    | 85.52        | 133.63        |
| express                  | 5.1.0    | ✓      | 10013.2    | 99.27        | 1.79          |
| frourio-express          | 1.3.1    | ✓      | 9347.5     | 106.37       | 1.67          |
| express-with-middlewares | 5.1.0    | ✓      | 8775.1     | 113.33       | 3.26          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
