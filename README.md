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
* __Run:__ Mon May 11 2026 01:33:28 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 48525.6    | 20.13        | 8.65          |
| rayo                     | 1.4.6    | ✓      | 48222.4    | 20.25        | 8.60          |
| connect                  | 3.7.0    | ✗      | 48076.0    | 20.31        | 8.57          |
| frourio                  | 1.3.1    | ✓      | 47945.6    | 20.37        | 8.60          |
| server-base              | 7.1.32   | ✗      | 47622.4    | 20.48        | 8.49          |
| fastify                  | 5.8.5    | ✓      | 47511.2    | 20.55        | 8.52          |
| polka                    | 0.5.2    | ✓      | 47361.6    | 20.60        | 8.45          |
| micro                    | 10.0.1   | ✗      | 46776.0    | 20.87        | 8.34          |
| polkadot                 | 1.0.0    | ✗      | 46184.0    | 21.15        | 8.24          |
| server-base-router       | 7.1.32   | ✓      | 46118.4    | 21.17        | 8.22          |
| 0http                    | 4.4.0    | ✓      | 44536.8    | 21.96        | 7.94          |
| h3                       | 1.15.11  | ✗      | 44063.2    | 22.20        | 7.86          |
| connect-router           | 1.3.8    | ✓      | 44008.0    | 22.23        | 7.85          |
| micro-route              | 2.5.0    | ✓      | 43525.6    | 22.47        | 7.76          |
| restana                  | v5.2.0   | ✓      | 42833.6    | 22.85        | 7.64          |
| adonisjs                 | 7.8.1    | ✓      | 42479.2    | 23.04        | 7.58          |
| h3-router                | 1.15.11  | ✓      | 41640.0    | 23.51        | 7.43          |
| koa                      | 2.16.4   | ✗      | 36967.4    | 26.54        | 6.59          |
| hono                     | 4.12.18  | ✓      | 36816.6    | 26.68        | 6.04          |
| restify                  | 11.1.0   | ✓      | 35444.2    | 27.71        | 6.39          |
| take-five                | 2.0.0    | ✓      | 35124.6    | 27.97        | 12.63         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 35120.6    | 27.97        | 6.26          |
| koa-router               | 13.1.1   | ✓      | 34199.6    | 28.74        | 6.10          |
| hapi                     | 21.4.9   | ✓      | 32864.0    | 29.93        | 5.86          |
| microrouter              | 3.1.3    | ✓      | 30591.6    | 32.17        | 5.46          |
| fastify-big-json         | 5.8.5    | ✓      | 11698.8    | 84.94        | 134.60        |
| express                  | 5.2.1    | ✓      | 10087.4    | 98.54        | 1.80          |
| frourio-express          | 1.3.1    | ✓      | 9695.8     | 102.54       | 1.73          |
| express-with-middlewares | 5.2.1    | ✓      | 9030.0     | 110.06       | 3.36          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
