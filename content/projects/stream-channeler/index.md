---
title: Stream Channeler
description: Media center software for the streaming era to recreate the feeling of having TV channels that are completely controlled by the user.
date: 2025-09-22
github_url: https://github.com/ryn-cx/stream-channeler
relative_image_url: "stream-channeler.png"
homepage: 1
---

## Overview

Media center software for the streaming era to recreate the feeling of having TV channels that are completely controlled by the user. The application allows users to create an unlimited number of TV channels, choose exactly what media each channel should contain, and set parameters to determine playback order.

Users can then tune into the channels they created to watch just like traditional TV channels, but without worrying about when things air because the channel only airs when you want it to.

Hundreds of different media sources are supported through the plugin architecture that makes it simple and easy for anyone to create plugins to support additional media sources.

## Why

This is software I always wished existed, but could never find. It has the perfect balance between choosing what you watch and letting algorithms decide what you should watch because the user gets to design a specific algorithm for every channel they create. It doesn't try to do anything annoying like recommending shows you don't want to watch—it only shows you exactly what you want to see and nothing more.

I use this software on a daily basis and would be completely lost without it. It helps me stay up to date when new seasons/episodes of a TV show are released, and it helps me keep track of what I have watched and when I watched it. It's an extremely simple concept but it is by far the most useful software I have ever made.

## How Does It Work?

Stream Channeler backend uses FastAPI, SQLModel, Alembic, Pydantic, PostgreSQL, and supports JWT authorization. The frontend uses TypeScript, React, Vite, and ChakraUI (with dark mode support). The development and production environments are controlled by Docker Compose, and it uses Traefik as a reverse proxy and load balancer.

## Project Status

Stream Channeler can be downloaded and used from GitHub, but it currently requires self-hosting. In the future, I plan to provide a publicly hosted version that anyone can use without needing to set up their own instance.