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
* __Run:__ Mon Nov 17 2025 01:07:10 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| frourio                  | 1.3.1    | ✓      | 48831.2    | 19.97        | 8.76          |
| fastify                  | 5.6.2    | ✓      | 47739.2    | 20.45        | 8.56          |
| bare                     | v20.19.5 | ✗      | 47211.2    | 20.68        | 8.42          |
| connect                  | 3.7.0    | ✗      | 47208.0    | 20.68        | 8.42          |
| rayo                     | 1.4.6    | ✓      | 46221.6    | 21.12        | 8.24          |
| polka                    | 0.5.2    | ✓      | 46102.4    | 21.18        | 8.22          |
| server-base              | 7.1.32   | ✗      | 46101.6    | 21.19        | 8.22          |
| server-base-router       | 7.1.32   | ✓      | 46005.6    | 21.24        | 8.20          |
| micro                    | 10.0.1   | ✗      | 45918.4    | 21.29        | 8.19          |
| 0http                    | 4.3.0    | ✓      | 45682.4    | 21.39        | 8.15          |
| polkadot                 | 1.0.0    | ✗      | 45444.8    | 21.51        | 8.10          |
| h3                       | 1.15.4   | ✗      | 44847.2    | 21.80        | 8.00          |
| connect-router           | 1.3.8    | ✓      | 43587.2    | 22.42        | 7.77          |
| h3-router                | 1.15.4   | ✓      | 43259.2    | 22.62        | 7.71          |
| restana                  | v5.1.0   | ✓      | 42824.0    | 22.85        | 7.64          |
| micro-route              | 2.5.0    | ✓      | 42270.4    | 23.16        | 7.54          |
| adonisjs                 | 7.7.0    | ✓      | 42078.4    | 23.26        | 7.50          |
| koa                      | 2.16.3   | ✗      | 37513.6    | 26.15        | 6.69          |
| hono                     | 4.10.6   | ✓      | 36939.2    | 26.55        | 6.06          |
| take-five                | 2.0.0    | ✓      | 35490.6    | 27.66        | 12.76         |
| restify                  | 11.1.0   | ✓      | 35404.6    | 27.73        | 6.38          |
| koa-isomorphic-router    | 1.0.1    | ✓      | 34835.0    | 28.21        | 6.21          |
| koa-router               | 13.1.1   | ✓      | 33504.8    | 29.34        | 5.98          |
| hapi                     | 21.4.4   | ✓      | 31932.4    | 30.82        | 5.69          |
| microrouter              | 3.1.3    | ✓      | 30130.4    | 32.68        | 5.37          |
| fastify-big-json         | 5.6.2    | ✓      | 12017.2    | 82.66        | 138.27        |
| express                  | 5.1.0    | ✓      | 10038.4    | 99.02        | 1.79          |
| frourio-express          | 1.3.1    | ✓      | 9586.2     | 103.72       | 1.71          |
| express-with-middlewares | 5.1.0    | ✓      | 8997.0     | 110.51       | 3.35          |
| trpc-router              | 10.45.2  | ✓      | N/A        | N/A          | N/A           |
