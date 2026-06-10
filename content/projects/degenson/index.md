---
title: DeGenSON
description: Fork of GenSON that adds additional schema strategies for Python types that map directly to JSON Schema formats.
date: 2025-09-22
github_url: https://github.com/ryn-cx/DeGenSON
priority: 3
code: example.py
---

## Overview

DeGenSON is a fork of [GenSON](https://github.com/wolverdude/GenSON) that adds
additional schema strategies for Python types that map directly to JSON Schema formats.


## Supported Additional Strategies

| Python Type | JSON Schema Type | JSON Schema Format |
| --- | --- | --- |
| `datetime.datetime` | `string` | `date-time` |
| `datetime.date` | `string` | `date` |
| `datetime.time` | `string` | `time` |
| `datetime.timedelta` | `string` | `duration` |
| `ipaddress.IPv4Address` | `string` | `ipv4` |
| `ipaddress.IPv6Address` | `string` | `ipv6` |
| `uuid.UUID` | `string` | `uuid` |
| `re.Pattern` | `string` | `regex` |

