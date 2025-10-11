---
title: MyWaifuLoves.Me
description: Website for discovering new anime/manga by allowing the user to put in a few anime/manga that they like, then they are shown a graph of relationships to help them find something new to read or watch.
date: 2025-10-04
github_url: https://github.com/ryn-cx/my-waifu-loves-me
project_url: https://mywaifuloves.me/
relative_image_url: "my-waifu-loves-me.png"
homepage: 1
---

## Overview

Website for discovering new anime/manga. The user puts in a list of anime/manga that they like, and a graph is shown that they can explore and modify to help them find something to read or watch. It integrates with AniList to allow the user to import their media list and filter the results based on anime/manga they have or have not read/watched.

## Why

Sometimes I want to watch an anime that is like anime X, Y, and Z. I can easily put those three entries into the website to be shown a graph that gives me recommendations for anime that has elements from all three of these. It's really convenient to find new anime to watch when you don't really bother keeping up with the news of what new shows come out.

I also really like the feeling you get as you explore the graph. I have slowly built up a bigger and bigger graph as I add more and more entries to it, and the color of the graph slowly changes from gray (anime that have never been seen) to a beautiful rainbow of colors.

## How Does It Work?

This project uses my full stack FastAPI template which uses FastAPI, SQLModel, Pydantic, PostgreSQL, React, TypeScript, Chakra UI, Docker, and Sigma.js. The data backend for this project is AniList's GraphQL API.
