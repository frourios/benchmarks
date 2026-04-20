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
* __Run:__ Mon Apr 20 2026 01:24:34 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 72451.6    | 13.32        | 12.92         |
| frourio                  | 1.3.1    | ✓      | 71105.2    | 13.57        | 12.75         |
| polka                    | 0.5.2    | ✓      | 70233.2    | 13.75        | 12.53         |
| connect                  | 3.7.0    | ✗      | 69977.2    | 13.78        | 12.48         |
| rayo                     | 1.4.6    | ✓      | 69428.4    | 13.90        | 12.38         |
| fastify                  | 5.8.5    | ✓      | 67897.6    | 14.22        | 12.17         |
| server-base              | 7.1.32   | ✗      | 67508.0    | 14.31        | 12.04         |
| server-base-router       | 7.1.32   | ✓      | 67074.8    | 14.41        | 11.96         |
| micro                    | 10.0.1   | ✗      | 66259.6    | 14.59        | 11.82         |
| connect-router           | 1.3.8    | ✓      | 66110.0    | 14.64        | 11.79         |
| micro-route              | 2.5.0    | ✓      | 63240.8    | 15.32        | 11.28         |
| adonisjs                 | 7.8.1    | ✓      | 62749.6    | 15.43        | 11.19         |
| polkadot                 | 1.0.0    | ✗      | 62684.0    | 15.47        | 11.18         |
| 0http                    | 4.4.0    | ✓      | 61424.8    | 15.80        | 10.96         |
| restana                  | v5.2.0   | ✓      | 59192.0    | 16.39        | 10.56         |
| h3                       | 1.15.11  | ✗      | 55254.4    | 17.60        | 9.85          |
| hono                     | 4.12.14  | ✓      | 54239.2    | 17.94        | 8.90          |
| h3-router                | 1.15.11  | ✓      | 53755.2    | 18.11        | 9.59          |
| koa                      | 2.16.4   | ✗      | 53529.6    | 18.18        | 9.55          |
| take-five                | 2.0.0    | ✓      | 51706.4    | 18.84        | 18.59         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 51564.0    | 18.89        | 9.20          |
| restify                  | 11.1.0   | ✓      | 50410.4    | 19.33        | 9.09          |
| koa-router               | 13.1.1   | ✓      | 47926.4    | 20.36        | 8.55          |
| hapi                     | 21.4.8   | ✓      | 44048.0    | 22.20        | 7.86          |
| microrouter              | 3.1.3    | ✓      | 44029.6    | 22.22        | 7.85          |
| fastify-big-json         | 5.8.5    | ✓      | 12759.8    | 77.83        | 146.81        |
| express                  | 5.2.1    | ✓      | 12319.6    | 80.60        | 2.20          |
| frourio-express          | 1.3.1    | ✓      | 11896.0    | 83.48        | 2.12          |
| express-with-middlewares | 5.2.1    | ✓      | 10909.8    | 91.05        | 4.06          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
