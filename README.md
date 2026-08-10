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
* __Node:__ `v20.20.2`
* __Run:__ Mon Aug 10 2026 02:33:43 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| frourio                  | 1.3.1    | ✓      | 48297.6    | 20.20        | 8.66          |
| bare                     | v20.20.2 | ✗      | 46980.8    | 20.78        | 8.38          |
| polka                    | 0.5.2    | ✓      | 46628.8    | 20.94        | 8.32          |
| rayo                     | 1.4.6    | ✓      | 46592.8    | 20.95        | 8.31          |
| server-base              | 7.1.32   | ✗      | 46372.8    | 21.06        | 8.27          |
| fastify                  | 5.11.3   | ✓      | 46326.4    | 21.09        | 8.31          |
| connect                  | 3.7.0    | ✗      | 45519.2    | 21.48        | 8.12          |
| server-base-router       | 7.1.32   | ✓      | 44852.0    | 21.81        | 8.00          |
| micro                    | 10.0.1   | ✗      | 44747.2    | 21.85        | 7.98          |
| polkadot                 | 1.0.0    | ✗      | 43554.4    | 22.47        | 7.77          |
| restana                  | v5.2.0   | ✓      | 42545.6    | 23.00        | 7.59          |
| 0http                    | 4.4.0    | ✓      | 41912.0    | 23.36        | 7.47          |
| connect-router           | 1.3.8    | ✓      | 41849.6    | 23.41        | 7.46          |
| adonisjs                 | 7.8.1    | ✓      | 41646.4    | 23.53        | 7.43          |
| micro-route              | 2.5.0    | ✓      | 41249.6    | 23.75        | 7.36          |
| h3                       | 1.15.11  | ✗      | 40065.6    | 24.45        | 7.15          |
| hono                     | 4.13.1   | ✓      | 39355.2    | 24.91        | 6.46          |
| h3-router                | 1.15.11  | ✓      | 39252.0    | 24.98        | 7.00          |
| koa                      | 2.16.4   | ✗      | 36156.6    | 27.16        | 6.45          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34955.4    | 28.11        | 6.23          |
| restify                  | 11.1.0   | ✓      | 34851.4    | 28.20        | 6.28          |
| take-five                | 2.0.0    | ✓      | 34769.8    | 28.26        | 12.50         |
| koa-router               | 13.1.1   | ✓      | 32495.8    | 30.28        | 5.79          |
| hapi                     | 21.4.10  | ✓      | 32382.2    | 30.37        | 5.77          |
| microrouter              | 3.1.3    | ✓      | 29436.8    | 33.46        | 5.25          |
| fastify-big-json         | 5.11.3   | ✓      | 11611.2    | 85.56        | 133.59        |
| frourio-express          | 1.3.1    | ✓      | 9777.8     | 101.69       | 1.74          |
| express                  | 5.2.1    | ✓      | 9675.1     | 102.72       | 1.73          |
| express-with-middlewares | 5.2.1    | ✓      | 8817.6     | 112.78       | 3.28          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
