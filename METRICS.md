# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v20.18.2`
* __Run:__ Fri Feb 07 2025 07:43:32 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 91.64 | 126.50 |
| 1-startup-routes.cjs | 91.35 | 101.62 |
| 10-startup-routes-schema.cjs | 94.56 | 130.60 |
| 10-startup-routes.cjs | 95.23 | 106.91 |
| 100-startup-routes-schema.cjs | 104.89 | 144.69 |
| 100-startup-routes.cjs | 104.10 | 123.68 |
| 1000-startup-routes-schema.cjs | 267.16 | 368.34 |
| 1000-startup-routes.cjs | 252.42 | 363.41 |
| 10000-startup-routes-schema.cjs | 4469.99 | 4741.66 |
| 10000-startup-routes.cjs | 4614.10 | 5984.20 |
| startup-listen.cjs | 95.28 | 106.28 |
