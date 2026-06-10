---
title: get-around
description: A drop-in httpx wrapper that transparently routes requests through a custom proxy server.
date: 2026-04-03
github_url: https://github.com/ryn-cx/get-around
priority: 3
code: example.py
---

## Overview

get-around is an [httpx](https://www.python-httpx.org/) wrapper that
transparently routes requests through a custom proxy server. It mirrors httpx's request
API (`get`, `post`, `put`, `patch`, `delete`, `head`, `options`, `request`) and returns
standard `httpx.Response` objects. When configured with a proxy server and password,
requests are forwarded through that server. When no server is set, requests are sent
directly.

The companion proxy server is [get-around-server](/projects/get-around-server/).