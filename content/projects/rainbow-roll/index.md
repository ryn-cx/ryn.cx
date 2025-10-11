---
title: Rainbow Roll
description: Unofficial Python API for Crunchyroll.Com to easily extract data from their website
date: 2025-08-28
github_url: https://github.com/ryn-cx/just-scrape
homepage: 0
---

## Overview

Unofficial Python API for Crunchyroll.com to easily extract data from their website. Uses their internal API with requests designed to be identical to the ones used by the website.

## Why

[crunpyroll](https://github.com/stefanodvx/crunpyroll) exists, but has a lot of small problems that [I fixed in my fork of crunpyroll](https://github.com/ryn-cx/crunpyroll). I then got to the point where I needed to add a new API endpoint that was not already built into crunpyroll and realized I would need to manually build the type information for the returned API response which I didn't want to have to do manually when I could just use [GAPI](/projects/good-ass-pydantic-integrator/) to do that autoamtically for me. I could have shoehorned GAPI into crunpyroll for just that API endpoint, but decided it would be easier to just make a new library completely built around GAPI.

## How Does It Work?

This library uses [GAPI](/projects/good-ass-pydantic-integrator/) to automatically create and update all of the Pydantic models for the API responses. The API requests are designed to duplicate the ones created by the official website as closely as possible.