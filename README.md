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
* __Run:__ Mon Aug 18 2025 01:09:08 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.4 | ✗      | 48273.6    | 20.23        | 8.61          |
| polka                    | 0.5.2    | ✓      | 47136.8    | 20.70        | 8.41          |
| polkadot                 | 1.0.0    | ✗      | 46603.2    | 20.96        | 8.31          |
| 0http                    | 4.3.0    | ✓      | 46252.8    | 21.12        | 8.25          |
| connect                  | 3.7.0    | ✗      | 46214.4    | 21.11        | 8.24          |
| frourio                  | 1.3.1    | ✓      | 46012.8    | 21.23        | 8.25          |
| rayo                     | 1.4.6    | ✓      | 45988.8    | 21.22        | 8.20          |
| fastify                  | 5.5.0    | ✓      | 45800.8    | 21.33        | 8.21          |
| micro                    | 10.0.1   | ✗      | 45312.8    | 21.57        | 8.08          |
| h3                       | 1.15.4   | ✗      | 44837.6    | 21.81        | 8.00          |
| server-base              | 7.1.32   | ✗      | 44804.0    | 21.83        | 7.99          |
| restana                  | v5.1.0   | ✓      | 44789.6    | 21.83        | 7.99          |
| h3-router                | 1.15.4   | ✓      | 44676.8    | 21.89        | 7.97          |
| server-base-router       | 7.1.32   | ✓      | 44049.6    | 22.21        | 7.86          |
| connect-router           | 1.3.8    | ✓      | 43960.8    | 22.25        | 7.84          |
| micro-route              | 2.5.0    | ✓      | 42489.6    | 23.03        | 7.58          |
| adonisjs                 | 7.7.0    | ✓      | 41992.0    | 23.31        | 7.49          |
| hono                     | 4.9.2    | ✓      | 37432.8    | 26.21        | 6.14          |
| koa                      | 2.16.2   | ✗      | 37070.6    | 26.48        | 6.61          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35885.8    | 27.37        | 6.40          |
| restify                  | 11.1.0   | ✓      | 34812.6    | 28.22        | 6.27          |
| take-five                | 2.0.0    | ✓      | 34751.8    | 28.28        | 12.49         |
| koa-router               | 13.1.1   | ✓      | 33817.4    | 29.07        | 6.03          |
| hapi                     | 21.4.3   | ✓      | 31947.8    | 30.80        | 5.70          |
| microrouter              | 3.1.3    | ✓      | 30004.8    | 32.83        | 5.35          |
| fastify-big-json         | 5.5.0    | ✓      | 11941.0    | 83.17        | 137.38        |
| express                  | 5.1.0    | ✓      | 10208.0    | 97.39        | 1.82          |
| frourio-express          | 1.3.1    | ✓      | 9804.0     | 101.39       | 1.75          |
| express-with-middlewares | 5.1.0    | ✓      | 8878.6     | 112.00       | 3.30          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
