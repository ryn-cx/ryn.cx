---
title: Just Scrape
description: Unofficial Python API for JustWatch.Com to easily extract data from their website
date: 2025-08-28
github_url: https://github.com/ryn-cx/just-scrape
homepage: 0
---

## Overview

Unofficial Python API for JustWatch.com to easily extract data from their website. Uses their internal GraphQL API with requests designed to be identical to the ones used by the website.

## Why

While some JustWatch APIs were already available, they either lacked the ability to get the data I needed or didn't attempt to make requests look like normal website traffic. This was originally built into Stream Channeler but was moved into a standalone library for broader use.

## How Does It Work?

This library uses [GAPI](/projects/good-ass-pydantic-integrator/) to automatically create and update all of the Pydantic models for the API responses. The API requests are designed to duplicate the ones created by the official website, but they have enough parameters to let users control what data they receive.