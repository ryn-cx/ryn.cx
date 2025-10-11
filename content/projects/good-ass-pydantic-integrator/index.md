---
title: GAPI
description: A Python library that automatically generates Pydantic models from JSON data sources, featuring intelligent object detection and support for multiple input formats.
date: 2025-09-23
github_url: https://github.com/ryn-cx/gapi
homepage: 0
---

## Overview

A Python library that automatically generates Pydantic models from JSON data sources, featuring intelligent object detection and support for multiple input formats.

## Why

[datamodel-code-generator](https://github.com/koxudaxi/datamodel-code-generator) is a capable tool, but it couldn't create the output I needed. I had various JSON responses from an API endpoint and wanted to generate Pydantic models from these files. However, datamodel-code-generator doesn't support this workflow for two key reasons:

- **No directory input support for JSON files**: While not explicitly stated in the documentation, attempting to process a directory of JSON files [will raise an error](https://github.com/koxudaxi/datamodel-code-generator/blob/ab2fb6ddc04f45ad04a2726f37134a307c9532de/src/datamodel_code_generator/__init__.py#L346). Multiple JSON input files are necessary because some files may contain objects missing from others—for example, one file might have an empty list while another contains a list of complex objects.

- **No string-to-object parsing**: When using JSON files as input, it doesn't detect objects saved as strings that could be parsed into more complex types like dates. This parsing capability is essential because it makes the output data much easier to work with, eliminating the need for manual parsing throughout the codebase.

## How Does It Work?

To understand how gapi works, you first need to understand how datamodel-code-generator works. When datamodel-code-generator receives a JSON file, it sends the input to [GenSON](https://github.com/wolverdude/GenSON) to generate a JSON schema, then uses that schema to build Pydantic models.

With this in mind, the most practical solution was to convert the JSON files into a JSON schema that examines every string to determine whether it's truly a string or actually a more complex object (like a date) stored as a string. I then pass this enhanced schema to datamodel-code-generator to generate the Pydantic models.

Since GenSON was already being used for this purpose, I [forked GenSON](https://github.com/ryn-cx/DeGenSON) and added the ability to detect objects stored as strings, generate a JSON Schema that properly identifies them, and send this to datamodel-code-generator to create the Pydantic models.
