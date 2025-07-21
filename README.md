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
* __Node:__ `v20.19.3`
* __Run:__ Mon Jul 21 2025 01:09:57 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| fastify                  | 5.4.0    | ✓      | 48138.4    | 20.30        | 8.63          |
| bare                     | v20.19.3 | ✗      | 48040.8    | 20.33        | 8.57          |
| frourio                  | 1.3.1    | ✓      | 47373.6    | 20.60        | 8.49          |
| polka                    | 0.5.2    | ✓      | 47071.2    | 20.74        | 8.39          |
| connect                  | 3.7.0    | ✗      | 46644.8    | 20.91        | 8.32          |
| rayo                     | 1.4.6    | ✓      | 46431.2    | 21.01        | 8.28          |
| polkadot                 | 1.0.0    | ✗      | 45924.0    | 21.27        | 8.19          |
| server-base-router       | 7.1.32   | ✓      | 45875.2    | 21.29        | 8.18          |
| 0http                    | 4.2.1    | ✓      | 45779.2    | 21.34        | 8.16          |
| server-base              | 7.1.32   | ✗      | 45686.4    | 21.40        | 8.15          |
| micro                    | 10.0.1   | ✗      | 45560.8    | 21.44        | 8.12          |
| connect-router           | 1.3.8    | ✓      | 44756.0    | 21.86        | 7.98          |
| micro-route              | 2.5.0    | ✓      | 43680.8    | 22.37        | 7.79          |
| h3                       | 1.15.3   | ✗      | 43261.6    | 22.62        | 7.72          |
| adonisjs                 | 7.7.0    | ✓      | 43166.4    | 22.67        | 7.70          |
| h3-router                | 1.15.3   | ✓      | 41820.0    | 23.42        | 7.46          |
| restana                  | v5.0.0   | ✓      | 39620.8    | 24.74        | 7.07          |
| koa                      | 2.16.1   | ✗      | 38441.0    | 25.50        | 6.86          |
| hono                     | 4.8.5    | ✓      | 37231.0    | 26.38        | 6.11          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35877.8    | 27.38        | 6.40          |
| take-five                | 2.0.0    | ✓      | 35674.6    | 27.54        | 12.83         |
| restify                  | 11.1.0   | ✓      | 35430.2    | 27.73        | 6.39          |
| koa-router               | 13.1.1   | ✓      | 35205.8    | 27.89        | 6.28          |
| hapi                     | 21.4.0   | ✓      | 32650.0    | 30.12        | 5.82          |
| microrouter              | 3.1.3    | ✓      | 30309.2    | 32.48        | 5.41          |
| fastify-big-json         | 5.4.0    | ✓      | 12241.0    | 81.16        | 140.83        |
| express                  | 5.1.0    | ✓      | 10279.2    | 96.69        | 1.83          |
| frourio-express          | 1.3.1    | ✓      | 9607.5     | 103.47       | 1.71          |
| express-with-middlewares | 5.1.0    | ✓      | 9325.0     | 106.63       | 3.47          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
