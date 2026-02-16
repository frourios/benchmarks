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
* __Node:__ `v20.20.0`
* __Run:__ Mon Feb 16 2026 01:15:31 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| fastify                  | 5.7.4    | ✓      | 47694.4    | 20.47        | 8.55          |
| bare                     | v20.20.0 | ✗      | 47539.2    | 20.54        | 8.48          |
| frourio                  | 1.3.1    | ✓      | 47353.6    | 20.61        | 8.49          |
| connect                  | 3.7.0    | ✗      | 46831.2    | 20.82        | 8.35          |
| server-base              | 7.1.32   | ✗      | 45612.0    | 21.45        | 8.13          |
| micro                    | 10.0.1   | ✗      | 45416.8    | 21.52        | 8.10          |
| polka                    | 0.5.2    | ✓      | 45366.4    | 21.55        | 8.09          |
| server-base-router       | 7.1.32   | ✓      | 45332.0    | 21.56        | 8.08          |
| rayo                     | 1.4.6    | ✓      | 45312.8    | 21.58        | 8.08          |
| polkadot                 | 1.0.0    | ✗      | 45184.8    | 21.63        | 8.06          |
| 0http                    | 4.3.0    | ✓      | 44620.0    | 21.92        | 7.96          |
| h3                       | 1.15.5   | ✗      | 43724.0    | 22.38        | 7.80          |
| h3-router                | 1.15.5   | ✓      | 43331.2    | 22.58        | 7.73          |
| micro-route              | 2.5.0    | ✓      | 42983.2    | 22.76        | 7.67          |
| connect-router           | 1.3.8    | ✓      | 42542.4    | 23.03        | 7.59          |
| adonisjs                 | 7.8.0    | ✓      | 41980.0    | 23.32        | 7.49          |
| restana                  | v5.1.0   | ✓      | 40365.6    | 24.28        | 7.20          |
| koa                      | 2.16.3   | ✗      | 36830.2    | 26.64        | 6.57          |
| hono                     | 4.11.9   | ✓      | 36341.6    | 27.01        | 5.96          |
| restify                  | 11.1.0   | ✓      | 35062.8    | 28.02        | 6.32          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34869.4    | 28.16        | 6.22          |
| take-five                | 2.0.0    | ✓      | 34673.8    | 28.33        | 12.47         |
| koa-router               | 13.1.1   | ✓      | 33781.8    | 29.10        | 6.03          |
| hapi                     | 21.4.4   | ✓      | 32097.2    | 30.64        | 5.72          |
| microrouter              | 3.1.3    | ✓      | 29239.2    | 33.68        | 5.21          |
| fastify-big-json         | 5.7.4    | ✓      | 11786.8    | 84.28        | 135.61        |
| express                  | 5.2.1    | ✓      | 10141.2    | 98.02        | 1.81          |
| frourio-express          | 1.3.1    | ✓      | 9936.0     | 100.06       | 1.77          |
| express-with-middlewares | 5.2.1    | ✓      | 9274.0     | 107.20       | 3.45          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
