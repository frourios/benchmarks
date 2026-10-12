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
* __Run:__ Mon Oct 12 2026 05:30:16 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| server-base-router       | 7.1.32   | ✓      | 86432.0    | 11.09        | 15.42         |
| server-base              | 7.1.32   | ✗      | 85956.8    | 11.15        | 15.33         |
| frourio                  | 1.3.1    | ✓      | 84276.8    | 11.38        | 15.11         |
| micro                    | 10.0.1   | ✗      | 82864.0    | 11.57        | 14.78         |
| bare                     | v20.20.2 | ✗      | 82696.0    | 11.59        | 14.75         |
| fastify                  | 5.12.5   | ✓      | 81110.4    | 11.83        | 14.54         |
| connect                  | 3.7.0    | ✗      | 81022.4    | 11.84        | 14.45         |
| rayo                     | 1.4.6    | ✓      | 80592.0    | 11.91        | 14.37         |
| polka                    | 0.5.2    | ✓      | 79987.2    | 12.00        | 14.27         |
| micro-route              | 2.5.0    | ✓      | 79680.0    | 12.05        | 14.21         |
| hono                     | 4.13.13  | ✓      | 79014.4    | 12.16        | 12.96         |
| connect-router           | 1.3.8    | ✓      | 76734.4    | 12.53        | 13.69         |
| take-five                | 2.0.0    | ✓      | 74017.6    | 12.99        | 26.61         |
| adonisjs                 | 7.8.1    | ✓      | 74016.4    | 13.03        | 13.20         |
| restify                  | 11.1.0   | ✓      | 70849.2    | 13.62        | 12.77         |
| koa                      | 2.16.4   | ✗      | 69801.2    | 13.83        | 12.45         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 68290.4    | 14.15        | 12.18         |
| polkadot                 | 1.0.0    | ✗      | 66790.4    | 14.48        | 11.91         |
| koa-router               | 13.1.1   | ✓      | 65875.6    | 14.69        | 11.75         |
| h3-router                | 1.15.11  | ✓      | 65408.0    | 14.79        | 11.66         |
| 0http                    | 4.4.0    | ✓      | 64923.2    | 14.91        | 11.58         |
| hapi                     | 21.4.10  | ✓      | 64359.2    | 15.02        | 11.48         |
| restana                  | v5.2.0   | ✓      | 63943.2    | 15.14        | 11.40         |
| microrouter              | 3.1.3    | ✓      | 61030.0    | 15.89        | 10.88         |
| h3                       | 1.15.11  | ✗      | 59914.4    | 16.19        | 10.68         |
| fastify-big-json         | 5.12.5   | ✓      | 22084.0    | 44.76        | 254.09        |
| express                  | 5.3.0    | ✓      | 20063.2    | 49.31        | 3.58          |
| frourio-express          | 1.3.1    | ✓      | 19901.6    | 49.72        | 3.55          |
| express-with-middlewares | 5.3.0    | ✓      | 18151.2    | 54.57        | 6.75          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
