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
* __Run:__ Mon Sep 08 2025 01:05:49 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| fastify                  | 5.6.0    | ✓      | 46379.2    | 21.06        | 8.31          |
| frourio                  | 1.3.1    | ✓      | 46276.8    | 21.10        | 8.30          |
| rayo                     | 1.4.6    | ✓      | 45851.2    | 21.31        | 8.18          |
| connect                  | 3.7.0    | ✗      | 45775.2    | 21.34        | 8.16          |
| polka                    | 0.5.2    | ✓      | 45651.2    | 21.40        | 8.14          |
| bare                     | v20.19.4 | ✗      | 45570.2    | 21.44        | 8.13          |
| server-base              | 7.1.32   | ✗      | 45545.6    | 21.45        | 8.12          |
| server-base-router       | 7.1.32   | ✓      | 45139.2    | 21.66        | 8.05          |
| micro                    | 10.0.1   | ✗      | 44900.8    | 21.77        | 8.01          |
| 0http                    | 4.3.0    | ✓      | 44348.0    | 22.05        | 7.91          |
| polkadot                 | 1.0.0    | ✗      | 44004.0    | 22.23        | 7.85          |
| connect-router           | 1.3.8    | ✓      | 43745.6    | 22.35        | 7.80          |
| h3                       | 1.15.4   | ✗      | 42465.6    | 23.06        | 7.57          |
| micro-route              | 2.5.0    | ✓      | 42317.6    | 23.13        | 7.55          |
| adonisjs                 | 7.7.0    | ✓      | 41852.0    | 23.39        | 7.46          |
| h3-router                | 1.15.4   | ✓      | 41495.2    | 23.61        | 7.40          |
| restana                  | v5.1.0   | ✓      | 40067.2    | 24.46        | 7.15          |
| koa                      | 2.16.2   | ✗      | 36940.8    | 26.56        | 6.59          |
| hono                     | 4.9.6    | ✓      | 36405.6    | 26.97        | 5.97          |
| take-five                | 2.0.0    | ✓      | 34991.8    | 28.07        | 12.58         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34721.8    | 28.30        | 6.19          |
| restify                  | 11.1.0   | ✓      | 34109.6    | 28.81        | 6.15          |
| koa-router               | 13.1.1   | ✓      | 33964.0    | 28.94        | 6.06          |
| hapi                     | 21.4.3   | ✓      | 31215.2    | 31.53        | 5.57          |
| microrouter              | 3.1.3    | ✓      | 30510.8    | 32.27        | 5.44          |
| fastify-big-json         | 5.6.0    | ✓      | 11994.8    | 82.80        | 138.00        |
| express                  | 5.1.0    | ✓      | 10211.0    | 97.34        | 1.82          |
| frourio-express          | 1.3.1    | ✓      | 9642.6     | 103.07       | 1.72          |
| express-with-middlewares | 5.1.0    | ✓      | 9017.8     | 110.24       | 3.35          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
