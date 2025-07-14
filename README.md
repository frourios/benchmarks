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
* __Run:__ Mon Jul 14 2025 01:09:03 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| frourio                  | 1.3.1    | ✓      | 47173.6    | 20.69        | 8.46          |
| polka                    | 0.5.2    | ✓      | 46365.6    | 21.04        | 8.27          |
| fastify                  | 5.4.0    | ✓      | 46238.4    | 21.12        | 8.29          |
| server-base-router       | 7.1.32   | ✓      | 46082.4    | 21.18        | 8.22          |
| micro                    | 10.0.1   | ✗      | 45738.4    | 21.36        | 8.16          |
| bare                     | v20.19.3 | ✗      | 45705.6    | 21.38        | 8.15          |
| rayo                     | 1.4.6    | ✓      | 45687.2    | 21.38        | 8.15          |
| polkadot                 | 1.0.0    | ✗      | 45159.2    | 21.65        | 8.05          |
| server-base              | 7.1.32   | ✗      | 45021.6    | 21.73        | 8.03          |
| connect                  | 3.7.0    | ✗      | 44942.4    | 21.76        | 8.02          |
| connect-router           | 1.3.8    | ✓      | 43368.0    | 22.56        | 7.73          |
| h3                       | 1.15.3   | ✗      | 43251.2    | 22.62        | 7.71          |
| h3-router                | 1.15.3   | ✓      | 42516.0    | 23.02        | 7.58          |
| 0http                    | 4.2.1    | ✓      | 42512.0    | 23.03        | 7.58          |
| micro-route              | 2.5.0    | ✓      | 42496.8    | 23.02        | 7.58          |
| adonisjs                 | 7.7.0    | ✓      | 40807.2    | 24.01        | 7.28          |
| restana                  | v5.0.0   | ✓      | 38004.8    | 25.82        | 6.78          |
| hono                     | 4.8.4    | ✓      | 37593.6    | 26.08        | 6.17          |
| koa                      | 2.16.1   | ✗      | 37336.0    | 26.30        | 6.66          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35726.2    | 27.48        | 6.37          |
| take-five                | 2.0.0    | ✓      | 35555.4    | 27.61        | 12.78         |
| restify                  | 11.1.0   | ✓      | 34667.6    | 28.33        | 6.25          |
| koa-router               | 13.1.1   | ✓      | 34663.6    | 28.35        | 6.18          |
| hapi                     | 21.4.0   | ✓      | 32109.2    | 30.63        | 5.73          |
| microrouter              | 3.1.3    | ✓      | 30000.8    | 32.83        | 5.35          |
| fastify-big-json         | 5.4.0    | ✓      | 11829.6    | 83.96        | 136.11        |
| express                  | 5.1.0    | ✓      | 9953.8     | 99.86        | 1.78          |
| frourio-express          | 1.3.1    | ✓      | 9807.8     | 101.35       | 1.75          |
| express-with-middlewares | 5.1.0    | ✓      | 9336.8     | 106.50       | 3.47          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
