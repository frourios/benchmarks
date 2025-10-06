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
* __Run:__ Mon Oct 06 2025 01:05:27 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| polka                    | 0.5.2    | ✓      | 47710.4    | 20.47        | 8.51          |
| bare                     | v20.19.5 | ✗      | 47522.4    | 20.55        | 8.47          |
| frourio                  | 1.3.1    | ✓      | 46636.0    | 20.93        | 8.36          |
| connect                  | 3.7.0    | ✗      | 46483.2    | 21.00        | 8.29          |
| rayo                     | 1.4.6    | ✓      | 46413.6    | 21.03        | 8.28          |
| polkadot                 | 1.0.0    | ✗      | 46155.2    | 21.16        | 8.23          |
| fastify                  | 5.6.1    | ✓      | 45989.6    | 21.24        | 8.25          |
| micro                    | 10.0.1   | ✗      | 45898.4    | 21.29        | 8.19          |
| server-base-router       | 7.1.32   | ✓      | 45874.4    | 21.30        | 8.18          |
| 0http                    | 4.3.0    | ✓      | 45857.6    | 21.31        | 8.18          |
| server-base              | 7.1.32   | ✗      | 45694.4    | 21.38        | 8.15          |
| h3                       | 1.15.4   | ✗      | 44492.8    | 21.98        | 7.94          |
| micro-route              | 2.5.0    | ✓      | 43748.0    | 22.34        | 7.80          |
| h3-router                | 1.15.4   | ✓      | 42790.4    | 22.87        | 7.63          |
| restana                  | v5.1.0   | ✓      | 42636.8    | 22.96        | 7.60          |
| connect-router           | 1.3.8    | ✓      | 42635.2    | 22.95        | 7.60          |
| adonisjs                 | 7.7.0    | ✓      | 41513.6    | 23.58        | 7.40          |
| koa                      | 2.16.2   | ✗      | 37920.0    | 25.88        | 6.76          |
| hono                     | 4.9.10   | ✓      | 37119.2    | 26.44        | 6.09          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 36199.8    | 27.13        | 6.46          |
| take-five                | 2.0.0    | ✓      | 36184.2    | 27.11        | 13.01         |
| restify                  | 11.1.0   | ✓      | 35683.0    | 27.54        | 6.43          |
| koa-router               | 13.1.1   | ✓      | 34765.8    | 28.26        | 6.20          |
| hapi                     | 21.4.3   | ✓      | 32227.8    | 30.52        | 5.75          |
| microrouter              | 3.1.3    | ✓      | 30427.6    | 32.34        | 5.43          |
| fastify-big-json         | 5.6.1    | ✓      | 11819.6    | 84.04        | 135.99        |
| express                  | 5.1.0    | ✓      | 9897.6     | 100.44       | 1.77          |
| frourio-express          | 1.3.1    | ✓      | 9640.0     | 103.11       | 1.72          |
| express-with-middlewares | 5.1.0    | ✓      | 8664.0     | 114.77       | 3.22          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
