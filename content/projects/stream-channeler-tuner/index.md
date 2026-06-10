---
title: Stream Channeler Tuner
description: Companion userscript for Stream Channeler that completes the full TV channel experience by automatically playing episodes and helping build channels directly from streaming sites, getting around the limitations they place on users.
date: 2025-09-22
github_url: https://github.com/ryn-cx/stream-channeler-tuner
priority: 2
---

## Overview

Stream Channeler Tuner is a companion [userscript](https://www.tampermonkey.net/) for
[Stream Channeler](/projects/stream-channeler/) that completes the full TV channel
experience by automatically playing episodes and helping build channels directly from
streaming sites, getting around the limitations they place on users.

There are two seperate components in Stream Channeler Tuner

- **Controller** — automatically plays through the episodes in a channel sequentially,
  detecting when each episode ends and advancing to the next one.
- **Antenna** — assists in building channels by letting add shows to channels directly
  from the streaming website.

Both features are built as a userscript so they can get around the limitations streaming
sites place on users. This started out as a desktop application until it became clear
that everything could be done with a userscript which is much easier to install and use
on any platform
