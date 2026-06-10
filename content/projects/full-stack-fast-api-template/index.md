---
title: Full Stack FastAPI Template
description: Full stack, modern web application template. Using FastAPI, React, SQLModel, PostgreSQL, Docker, GitHub Actions, automatic HTTPS and more following FastAPI Best Practices.
date: 2025-07-04
github_url: https://github.com/ryn-cx/full-stack-fastapi-template
iframe: https://kon.cx/
image: full-stack-fastapi-template.png
priority: 2
---

## Overview

Full stack, modern web application template. Using FastAPI, React, SQLModel, PostgreSQL, Docker, GitHub Actions, automatic HTTPS and more following FastAPI Best Practices.


## Why

There is an official [Full Stack FastAPI
Template](https://github.com/fastapi/full-stack-fastapi-template) that works really
well, but it does not follow some of the commonly accepted [FastAPI Best
Practices](https://github.com/zhanymkanov/fastapi-best-practices). This fork makes the
project more closely follow these best practices as well as other minor quality of life
improvements.

## Projects Using This Template

- [My Waifu Loves Me](/projects/old/my-waifu-loves-me/)
- [Getcha Life Right](/projects/getcha-life-right/)
- [Stream Channeler](/projects/old/stream-channeler/)

## Backend Changes in this Fork

- 📁 Restructure the project to more closely follow
  [zhanymkanov/fastapi-best-practices](https://github.com/zhanymkanov/fastapi-best-practices)
  and [Netflix/dispatch](https://github.com/Netflix/dispatch).
- 📧 Support case-insensitive email addresses.
    - The original template intentionally [does not support case-insensitive email
      addresses](https://github.com/fastapi/full-stack-fastapi-template/pull/1450#issuecomment-2668483669)
      because [RFC 5321](https://www.rfc-editor.org/rfc/rfc5321#section-2.3.11) allows
      email addresses to be case-sensitive. In practice, most websites ignore the
      standard for a smoother end-user experience.
- ⚡ (Optional) Automatically load models and routers based on the project folder structure.
- 🧪 Run automated tests against a separate test database.
    - The original template ran backend tests against the local database, and would
      delete all entries when the tests completed. A dedicated test database leaves the
      local data intact so it can act as consistent reference data during development.
- 🏠 Default to the root domain instead of the dashboard subdomain.
- 📙 Use timestamp-based file names for Alembic migrations.

## Frontend Changes in this Fork

- 🤞 Optimistic updates when modifying items and users.
- 📄 Client-side pagination, filtering, and sorting.
    - In the original template, the backend paginated results but the frontend had no
      way to load data past the first page. TanStack Table [handles 100,000 rows
      comfortably](https://tanstack.com/table/v8/docs/guide/pagination), and most
      projects using this template will stay well under that, so client-side pagination
      is the default. The backend pagination code is retained, so server-side
      pagination can be reinstated with minimal frontend changes if needed.
- 🧪 Run automated frontend tests against a dedicated test database in test-specific
  Docker containers.
    - This also fixes a local-only issue where a prior backend test run would delete
      the first superuser the frontend tests depend on, causing those tests to fail.

## Other Changes

- 🏗️ Derive all port assignments from a configurable `PROJECT_NUMBER` so multiple
  projects using this template can run side by side without port conflicts.

