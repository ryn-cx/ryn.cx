---
title: Good Ass Pydantic Integrator (GAPI)
description: GAPI is a python library that generates Pydantic v2 models from raw JSON data (or JSON schemas), lets you customize the result, and provides a base client that automatically regenerates models when the schema changes.
date: 2025-09-23
github_url: https://github.com/ryn-cx/good-ass-pydantic-integrator
homepage: 0
code: example.py
---

## Overview

GAPI is a python library that generates Pydantic v2 models from raw JSON data (or JSON
schemas), lets you customize the result, and provides a base client that automatically
regenerates models when the schema changes.


## Why

[datamodel-code-generator](https://github.com/koxudaxi/datamodel-code-generator) is an
excellent tool for generating Pydantic schemas, but it was missing some features that
are added by GAPI.

- **No directory input support for JSON files**: While not explicitly stated in the
  documentation, attempting to process a directory of JSON files [will raise an
  error](https://github.com/koxudaxi/datamodel-code-generator/blob/ab2fb6ddc04f45ad04a2726f37134a307c9532de/src/datamodel_code_generator/__init__.py#L346).

- **No string-to-object parsing**: When using JSON files as input, it doesn't detect
  objects saved as strings that could be parsed into more complex types like datetime,
  date, time, timedelta, IPv4Address, IPv6Address, UUID, etc.


## GAPIClient

GAPIClient is a base class that builds Pydantic models from sets of JSON files. It can
be used to create models for API endpoints that regenerate automatically when the schema
changes, keeping them in sync without any manual updates.

## Usage

GAPI is the foundation for the following API projects:

- [chirashi](/projects/chirashi/)
- [diving-board](/projects/diving-board/)
- [just-scrape](/projects/just-scrape/)
- [not-ytdlp](/projects/not-ytdlp/)
- [yt-dlp](/projects/yt-dlp/)
