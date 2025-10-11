---
title: yt-dlapi
description: Media center software for the streaming era to recreate the feeling of having TV channels that are completely controlled by the user.
date: 2025-09-22
github_url: https://github.com/ryn-cx/yt-dlapi
homepage: 0
---

## Overview

Unofficial Python API for YouTube.com built with yt-dlp as the backend. This library provides an alternative interface to yt-dlp's Python library that is simpler to use and includes full Pydantic schemas for all responses.

## Why

[yt-dlp](https://github.com/yt-dlp/yt-dlp) is a great project and does almost exactly what I want, but it returns a dict instead of a schema model of the data. This library creates simpler functions to get information from yt-dlp with full Pydantic models returned instead of a dict which makes the data much easier to work with.

## How Does It Work?

This library uses [GAPI](/projects/good-ass-pydantic-integrator/) to automatically create and update all of the Pydantic models for the API responses. The entire library is just a thin wrapper around yt-dlp that adds Pydantic types to the responses.
