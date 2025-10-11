---
title: ActualExclusives.Com
description: Website for finding video games based on what platforms they can be played on and what countries they where released in.
date: 2023-05-22
github_url: https://github.com/ryn-cx/obsidian-theme-previews
project_url: https://actual-exclusives.com/
relative_image_url: "actual-exclusives.png"
homepage: 1
---

## Overview

Website for finding video games based on what platforms they can be played on and what countries they were released in. It allows users to easily find games that are exclusive to a specific console or region.

## Why

Here's a fun challenge: try to find a list of games that are exclusively on the Xbox Series console. Every website will have a list of games they claim are exclusive to Xbox but are actually available on Windows as well. This website provides a real [list of games that are exclusively on the Xbox Series console](https://actualexclusives.com/games?form-TOTAL_FORMS=1&form-INITIAL_FORMS=0&form-MIN_NUM_FORMS=0&form-MAX_NUM_FORMS=1000&csrfmiddlewaretoken=gHr937nS6zQRQN0uiOvHaGbvrmaXJz9zU8zTC2DLBG1jIZEszLtkPvIpWl5Ayi5S&form-0-platforms=289&form-0-platform_include=Yes&form-0-platform_search_type=Exclusive&form-0-country_include=Yes&form-0-country_search_type=Exclusive&search_type=And+Search), and it has many other filtering options like [games that are on the PS5/Xbox Series consoles but not on Windows](https://actualexclusives.com/games?form-TOTAL_FORMS=2&form-INITIAL_FORMS=0&form-MIN_NUM_FORMS=0&form-MAX_NUM_FORMS=1000&csrfmiddlewaretoken=QaSG0NqA22NGydnN3zUyCDijOJl5mfqFNWux73tA16zE6GqeN8VyswAznBXFX3xb&form-0-platforms=288&form-0-platforms=289&form-0-platform_include=Yes&form-0-platform_search_type=Or&form-0-country_include=No&form-0-country_search_type=Or&form-1-platforms=3&form-1-platforms=140&form-1-platform_include=No&form-1-platform_search_type=Or&form-1-country_include=Yes&form-1-country_search_type=Exclusive&search_type=And+Search).

## How Does It Work?

All of the data for the website is from MobyGames' official API. The project is almost entirely written in Django with a small amount of HTMX added for user interactions.

Since this was never a serious website, a silly theme design was used that prioritized making a fun and playful website instead of one optimized for efficiency and functionality.

## Project Status

This project is considered abandoned because MobyGames changed their API rules, making it impossible to update the information on the website. All results are stuck using a snapshot of their data that is no longer up to date, so many games will be missing from the results.