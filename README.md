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
* __Run:__ Mon Oct 27 2025 01:08:03 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.19.5 | ✗      | 72853.2    | 13.23        | 12.99         |
| fastify                  | 5.6.1    | ✓      | 70596.4    | 13.68        | 12.66         |
| restana                  | v5.1.0   | ✓      | 69921.2    | 13.80        | 12.47         |
| frourio                  | 1.3.1    | ✓      | 69826.8    | 13.83        | 12.52         |
| rayo                     | 1.4.6    | ✓      | 69509.2    | 13.90        | 12.40         |
| connect                  | 3.7.0    | ✗      | 69446.8    | 13.92        | 12.38         |
| polka                    | 0.5.2    | ✓      | 68915.6    | 14.03        | 12.29         |
| server-base              | 7.1.32   | ✗      | 67602.4    | 14.29        | 12.06         |
| micro                    | 10.0.1   | ✗      | 67098.4    | 14.40        | 11.97         |
| server-base-router       | 7.1.32   | ✓      | 67091.6    | 14.40        | 11.96         |
| connect-router           | 1.3.8    | ✓      | 64445.6    | 15.01        | 11.49         |
| adonisjs                 | 7.7.0    | ✓      | 61813.6    | 15.68        | 11.02         |
| micro-route              | 2.5.0    | ✓      | 61621.6    | 15.73        | 10.99         |
| 0http                    | 4.3.0    | ✓      | 61426.4    | 15.79        | 10.95         |
| polkadot                 | 1.0.0    | ✗      | 61272.8    | 15.83        | 10.93         |
| h3                       | 1.15.4   | ✗      | 59256.8    | 16.39        | 10.57         |
| h3-router                | 1.15.4   | ✓      | 56673.6    | 17.14        | 10.11         |
| hono                     | 4.10.3   | ✓      | 56002.4    | 17.36        | 9.19          |
| koa                      | 2.16.3   | ✗      | 54767.2    | 17.75        | 9.77          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 51340.8    | 18.99        | 9.16          |
| restify                  | 11.1.0   | ✓      | 50108.0    | 19.46        | 9.03          |
| take-five                | 2.0.0    | ✓      | 49616.8    | 19.65        | 17.84         |
| koa-router               | 13.1.1   | ✓      | 49078.4    | 19.88        | 8.75          |
| hapi                     | 21.4.3   | ✓      | 43123.2    | 22.69        | 7.69          |
| microrouter              | 3.1.3    | ✓      | 42740.8    | 22.89        | 7.62          |
| fastify-big-json         | 5.6.1    | ✓      | 13037.2    | 76.15        | 149.99        |
| express                  | 5.1.0    | ✓      | 12476.6    | 79.59        | 2.23          |
| frourio-express          | 1.3.1    | ✓      | 12097.6    | 82.08        | 2.16          |
| express-with-middlewares | 5.1.0    | ✓      | 11098.2    | 89.49        | 4.13          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
