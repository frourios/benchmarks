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
* __Run:__ Mon Apr 27 2026 01:27:04 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| bare                     | v20.20.2 | ✗      | 70049.2    | 13.79        | 12.49         |
| connect                  | 3.7.0    | ✗      | 69912.4    | 13.81        | 12.47         |
| frourio                  | 1.3.1    | ✓      | 69905.2    | 13.82        | 12.53         |
| fastify                  | 5.8.5    | ✓      | 69491.6    | 13.89        | 12.46         |
| polka                    | 0.5.2    | ✓      | 69136.4    | 13.97        | 12.33         |
| server-base              | 7.1.32   | ✗      | 68184.4    | 14.16        | 12.16         |
| server-base-router       | 7.1.32   | ✓      | 68047.6    | 14.19        | 12.13         |
| rayo                     | 1.4.6    | ✓      | 67911.2    | 14.22        | 12.11         |
| micro                    | 10.0.1   | ✗      | 66304.8    | 14.60        | 11.82         |
| connect-router           | 1.3.8    | ✓      | 64002.4    | 15.13        | 11.41         |
| micro-route              | 2.5.0    | ✓      | 63362.8    | 15.29        | 11.30         |
| adonisjs                 | 7.8.1    | ✓      | 62975.2    | 15.37        | 11.23         |
| polkadot                 | 1.0.0    | ✗      | 60473.6    | 16.03        | 10.78         |
| 0http                    | 4.4.0    | ✓      | 59743.2    | 16.24        | 10.65         |
| restana                  | v5.2.0   | ✓      | 57765.6    | 16.83        | 10.30         |
| h3                       | 1.15.11  | ✗      | 55352.0    | 17.57        | 9.87          |
| hono                     | 4.12.15  | ✓      | 54753.6    | 17.76        | 8.98          |
| h3-router                | 1.15.11  | ✓      | 54272.8    | 17.93        | 9.68          |
| koa                      | 2.16.4   | ✗      | 53968.0    | 18.03        | 9.62          |
| take-five                | 2.0.0    | ✓      | 52396.0    | 18.58        | 18.84         |
| koa-isomorphic-router    | 1.0.1    | ✓      | 51585.6    | 18.88        | 9.20          |
| restify                  | 11.1.0   | ✓      | 50665.6    | 19.23        | 9.13          |
| koa-router               | 13.1.1   | ✓      | 48724.0    | 20.02        | 8.69          |
| hapi                     | 21.4.8   | ✓      | 43778.4    | 22.35        | 7.81          |
| microrouter              | 3.1.3    | ✓      | 43693.6    | 22.38        | 7.79          |
| fastify-big-json         | 5.8.5    | ✓      | 12692.2    | 78.23        | 146.02        |
| express                  | 5.2.1    | ✓      | 12138.8    | 81.81        | 2.16          |
| frourio-express          | 1.3.1    | ✓      | 12018.6    | 82.66        | 2.14          |
| express-with-middlewares | 5.2.1    | ✓      | 11289.0    | 88.02        | 4.20          |
| trpc-router              | 10.45.4  | ✓      | N/A        | N/A          | N/A           |
