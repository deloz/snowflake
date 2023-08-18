# @deloz/snowflake

A TypeScript library for generating Snowflake IDs.

Snowflake is a distributed unique ID generation algorithm, commonly used to generate unique identifiers in distributed systems. This library provides a TypeScript class that makes it easy to generate Snowflake IDs.

## Language Versions

- [English](README.md)
- [中文](README_ZH.md)

## Installation

Install using npm:

```bash
npm install @deloz/snowflake --save
```

## Usage

```typescript
import Snowflake from "@deloz/snowflake";

// Create an instance of Snowflake with custom datacenter ID, machine ID, and optional epoch
const snowflake = new Snowflake(datacenterId, machineId, "2023-01-01");

const id = snowflake.generateId();
console.log(id); // Output the generated Snowflake ID
```

## Issues and Support

If you encounter any issues or have questions, feel free to raise them in the [Issues](https://github.com/deloz/snowflake/issues) section on GitHub.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
