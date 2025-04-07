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
* __Run:__ Mon Apr 07 2025 01:04:58 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.0 | ✗      | 47168.8    | 20.71        | 8.41          |
| fastify                  | 5.2.2    | ✓      | 46701.6    | 20.91        | 8.37          |
| polka                    | 0.5.2    | ✓      | 46566.4    | 20.97        | 8.30          |
| frourio                  | 1.3.1    | ✓      | 46184.0    | 21.15        | 8.28          |
| rayo                     | 1.4.6    | ✓      | 46083.2    | 21.19        | 8.22          |
| connect                  | 3.7.0    | ✗      | 46024.0    | 21.23        | 8.21          |
| server-base-router       | 7.1.32   | ✓      | 45832.8    | 21.31        | 8.17          |
| server-base              | 7.1.32   | ✗      | 45607.2    | 21.44        | 8.13          |
| 0http                    | 4.2.0    | ✓      | 45462.4    | 21.50        | 8.11          |
| polkadot                 | 1.0.0    | ✗      | 44584.8    | 21.94        | 7.95          |
| micro                    | 10.0.1   | ✗      | 44441.6    | 22.00        | 7.93          |
| h3                       | 1.15.1   | ✗      | 43612.0    | 22.43        | 7.78          |
| connect-router           | 1.3.8    | ✓      | 43103.2    | 22.70        | 7.69          |
| micro-route              | 2.5.0    | ✓      | 42805.6    | 22.85        | 7.63          |
| adonisjs                 | 7.6.0    | ✓      | 40792.0    | 24.02        | 7.27          |
| h3-router                | 1.15.1   | ✓      | 40291.2    | 24.33        | 7.19          |
| hono                     | 4.7.5    | ✓      | 39532.8    | 24.80        | 6.49          |
| restana                  | v5.0.0   | ✓      | 38735.2    | 25.32        | 6.91          |
| koa                      | 2.16.1   | ✗      | 37065.0    | 26.48        | 6.61          |
| take-five                | 2.0.0    | ✓      | 35373.8    | 27.77        | 12.72         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35227.8    | 27.88        | 6.28          |
| restify                  | 11.1.0   | ✓      | 35006.6    | 28.06        | 6.31          |
| koa-router               | 13.1.0   | ✓      | 32952.0    | 29.84        | 5.88          |
| hapi                     | 21.4.0   | ✓      | 31378.0    | 31.36        | 5.60          |
| microrouter              | 3.1.3    | ✓      | 29876.4    | 32.96        | 5.33          |
| fastify-big-json         | 5.2.2    | ✓      | 11849.4    | 83.84        | 136.33        |
| express                  | 5.1.0    | ✓      | 9906.2     | 100.34       | 1.77          |
| frourio-express          | 1.3.1    | ✓      | 9561.8     | 103.96       | 1.71          |
| express-with-middlewares | 5.1.0    | ✓      | 9185.0     | 108.27       | 3.42          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
