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
* __Run:__ Mon Nov 02 2026 05:34:22 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| frourio                  | 1.3.1    | ✓      | 45968.0    | 21.24        | 8.24          |
| bare                     | v20.20.2 | ✗      | 45628.8    | 21.41        | 8.14          |
| polka                    | 0.5.2    | ✓      | 45184.0    | 21.62        | 8.06          |
| fastify                  | 5.12.7   | ✓      | 44728.0    | 21.87        | 8.02          |
| server-base-router       | 7.1.32   | ✓      | 44376.8    | 22.05        | 7.91          |
| server-base              | 7.1.32   | ✗      | 44000.0    | 22.22        | 7.85          |
| rayo                     | 1.4.6    | ✓      | 43873.4    | 22.30        | 7.82          |
| connect                  | 3.7.0    | ✗      | 43540.6    | 22.47        | 7.76          |
| micro                    | 10.0.1   | ✗      | 42448.8    | 23.05        | 7.57          |
| polkadot                 | 1.0.0    | ✗      | 42156.0    | 23.22        | 7.52          |
| 0http                    | 4.4.0    | ✓      | 41664.6    | 23.51        | 7.43          |
| connect-router           | 1.3.8    | ✓      | 41636.8    | 23.53        | 7.43          |
| h3-router                | 1.15.11  | ✓      | 41429.4    | 23.64        | 7.39          |
| micro-route              | 2.5.0    | ✓      | 41395.2    | 23.66        | 7.38          |
| adonisjs                 | 7.8.1    | ✓      | 40388.8    | 24.26        | 7.20          |
| restana                  | v5.2.0   | ✓      | 39152.4    | 25.04        | 6.98          |
| h3                       | 1.15.11  | ✗      | 38579.0    | 25.43        | 6.88          |
| hono                     | 4.13.16  | ✓      | 37977.6    | 25.83        | 6.23          |
| koa                      | 2.16.4   | ✗      | 35772.0    | 27.46        | 6.38          |
| take-five                | 2.0.0    | ✓      | 34000.6    | 28.91        | 12.22         |
| restify                  | 11.1.0   | ✓      | 33811.8    | 29.08        | 6.09          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 33454.8    | 29.40        | 5.97          |
| koa-router               | 13.1.1   | ✓      | 32356.0    | 30.40        | 5.77          |
| hapi                     | 21.4.12  | ✓      | 30891.2    | 31.86        | 5.51          |
| microrouter              | 3.1.3    | ✓      | 28619.2    | 34.44        | 5.10          |
| fastify-big-json         | 5.12.7   | ✓      | 11651.4    | 85.28        | 134.07        |
| frourio-express          | 1.3.1    | ✓      | 9996.4     | 99.44        | 1.78          |
| express                  | 5.3.0    | ✓      | 9714.1     | 102.35       | 1.73          |
| express-with-middlewares | 5.3.0    | ✓      | 8144.6     | 122.08       | 3.03          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
