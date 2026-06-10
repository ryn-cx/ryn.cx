---
title: Getcha Life Right
description: Website for discovering new anime/manga using a graph based interface.
date: 2025-10-04
github_url: https://github.com/ryn-cx/my-waifu-loves-me
project_url: https://getchaliferight.com/
iframe: https://getchaliferight.com/?ids=[%2210165%22%2C%22181841%22%2C%2298444%22]
image: getcha-life-right.png
priority: 2
---

## Overview

A personal todo app built to fit a specific set of requirements that no existing todo app
fully met.

## Features

- **Tasks** with title, description, category, start datetime, and due datetime.
- **Recurrence**: Intervals have precision down to the second. Monthly and
  yearly recurrence preserves the original day-of-month across short months and
  leap years.
  - **Repeat on completion**: the next occurrence is scheduled relative to when
    the task is completed.
  - **Repeat on set dates**: occurrences are scheduled on fixed dates
    regardless of when the task is completed.
- **Categories**: user-defined groups for tasks.
- **Calendar view**: full-month grid. Tasks render as bars from start to due,
  stacked into lanes when they overlap, with start/end times shown at the
  edges.
- **List view**: sortable, paginated, filterable table.
- **Completions**: every completion is recorded; history is viewable
  per-task and across all tasks.
- **Dark mode.**
