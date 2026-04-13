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
* __Run:__ Mon Apr 13 2026 01:24:24 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| polka                    | 0.5.2    | ✓      | 47277.6    | 20.64        | 8.43          |
| bare                     | v20.20.2 | ✗      | 47244.0    | 20.67        | 8.43          |
| frourio                  | 1.3.1    | ✓      | 46839.2    | 20.85        | 8.40          |
| fastify                  | 5.8.4    | ✓      | 46809.6    | 20.86        | 8.39          |
| rayo                     | 1.4.6    | ✓      | 46571.2    | 20.97        | 8.30          |
| connect                  | 3.7.0    | ✗      | 45700.0    | 21.38        | 8.15          |
| server-base              | 7.1.32   | ✗      | 45616.0    | 21.42        | 8.13          |
| server-base-router       | 7.1.32   | ✓      | 45533.6    | 21.46        | 8.12          |
| micro                    | 10.0.1   | ✗      | 45516.8    | 21.47        | 8.12          |
| 0http                    | 4.3.0    | ✓      | 44435.2    | 22.01        | 7.92          |
| polkadot                 | 1.0.0    | ✗      | 44151.2    | 22.15        | 7.87          |
| connect-router           | 1.3.8    | ✓      | 43691.2    | 22.38        | 7.79          |
| adonisjs                 | 7.8.0    | ✓      | 43531.2    | 22.46        | 7.76          |
| h3                       | 1.15.11  | ✗      | 43036.8    | 22.74        | 7.67          |
| micro-route              | 2.5.0    | ✓      | 42173.6    | 23.21        | 7.52          |
| h3-router                | 1.15.11  | ✓      | 41509.6    | 23.59        | 7.40          |
| restana                  | v5.1.0   | ✓      | 41225.6    | 23.75        | 7.35          |
| koa                      | 2.16.4   | ✗      | 37680.0    | 26.04        | 6.72          |
| hono                     | 4.12.12  | ✓      | 35996.2    | 27.28        | 5.90          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35290.6    | 27.83        | 6.29          |
| take-five                | 2.0.0    | ✓      | 34367.2    | 28.59        | 12.36         |
| restify                  | 11.1.0   | ✓      | 34288.2    | 28.66        | 6.18          |
| koa-router               | 13.1.1   | ✓      | 33818.4    | 29.07        | 6.03          |
| hapi                     | 21.4.8   | ✓      | 31947.0    | 30.80        | 5.70          |
| microrouter              | 3.1.3    | ✓      | 30020.0    | 32.81        | 5.35          |
| fastify-big-json         | 5.8.4    | ✓      | 10981.4    | 90.50        | 126.33        |
| express                  | 5.2.1    | ✓      | 9912.0     | 100.30       | 1.77          |
| frourio-express          | 1.3.1    | ✓      | 9540.9     | 104.15       | 1.70          |
| express-with-middlewares | 5.2.1    | ✓      | 8972.0     | 110.79       | 3.34          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
