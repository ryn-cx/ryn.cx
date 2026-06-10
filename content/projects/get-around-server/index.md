---
title: get-around-server
description: The Cloudflare Worker proxy server that powers get-around.
date: 2026-04-03
github_url: https://github.com/ryn-cx/get-around-server
priority: 3
---

## Overview

get-around-server is the proxy server that powers
[get-around](/projects/get-around/). It works as a
[Cloudflare Worker](https://workers.cloudflare.com/) that receives each request,
forwards it, and returns the response. 
