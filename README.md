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
* __Node:__ `v20.20.1`
* __Run:__ Mon Mar 23 2026 01:18:09 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.1 | ✗      | 68216.8    | 14.16        | 12.17         |
| polka                    | 0.5.2    | ✓      | 66924.0    | 14.44        | 11.93         |
| micro                    | 10.0.1   | ✗      | 66732.4    | 14.49        | 11.90         |
| fastify                  | 5.8.2    | ✓      | 66480.8    | 14.54        | 11.92         |
| frourio                  | 1.3.1    | ✓      | 66302.0    | 14.58        | 11.89         |
| connect                  | 3.7.0    | ✗      | 66194.8    | 14.60        | 11.80         |
| rayo                     | 1.4.6    | ✓      | 66150.0    | 14.61        | 11.80         |
| server-base-router       | 7.1.32   | ✓      | 65338.0    | 14.80        | 11.65         |
| server-base              | 7.1.32   | ✗      | 65189.6    | 14.84        | 11.63         |
| connect-router           | 1.3.8    | ✓      | 61571.2    | 15.73        | 10.98         |
| adonisjs                 | 7.8.0    | ✓      | 60900.0    | 15.92        | 10.86         |
| micro-route              | 2.5.0    | ✓      | 59562.4    | 16.29        | 10.62         |
| 0http                    | 4.3.0    | ✓      | 59017.6    | 16.44        | 10.53         |
| polkadot                 | 1.0.0    | ✗      | 58677.6    | 16.55        | 10.46         |
| restana                  | v5.1.0   | ✓      | 55460.8    | 17.53        | 9.89          |
| h3-router                | 1.15.10  | ✓      | 53637.6    | 18.15        | 9.56          |
| h3                       | 1.15.10  | ✗      | 53405.6    | 18.23        | 9.52          |
| hono                     | 4.12.8   | ✓      | 53125.6    | 18.32        | 8.71          |
| koa                      | 2.16.4   | ✗      | 51768.0    | 18.82        | 9.23          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 49589.6    | 19.67        | 8.84          |
| take-five                | 2.0.0    | ✓      | 48874.4    | 19.96        | 17.57         |
| restify                  | 11.1.0   | ✓      | 47961.6    | 20.35        | 8.64          |
| koa-router               | 13.1.1   | ✓      | 47681.6    | 20.47        | 8.50          |
| hapi                     | 21.4.7   | ✓      | 43786.4    | 22.35        | 7.81          |
| microrouter              | 3.1.3    | ✓      | 41757.6    | 23.45        | 7.45          |
| fastify-big-json         | 5.8.2    | ✓      | 12586.0    | 78.91        | 144.82        |
| express                  | 5.2.1    | ✓      | 11880.6    | 83.55        | 2.12          |
| frourio-express          | 1.3.1    | ✓      | 11751.2    | 84.54        | 2.10          |
| express-with-middlewares | 5.2.1    | ✓      | 10798.8    | 92.03        | 4.02          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
