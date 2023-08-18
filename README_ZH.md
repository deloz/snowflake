# @deloz/snowflake

一个用于生成 Snowflake ID 的 TypeScript 库。

Snowflake 是一种分布式唯一 ID 生成算法，通常用于在分布式系统中生成唯一的标识符。本库提供了一个 TypeScript 类，可以轻松地生成 Snowflake ID。

## 语言版本

- [English](README.md)
- [中文](README_ZH.md)

## 安装

使用 npm 安装：

```bash
npm install @deloz/snowflake --save
```

## 使用方法

```typescript
import Snowflake from "@deloz/snowflake";

// 创建一个 Snowflake 实例，传入自定义的数据中心 ID、机器 ID 和可选的起始时间
const snowflake = new Snowflake(datacenterId, machineId, "2023-01-01");

const id = snowflake.generateId();
console.log(id); // 输出生成的 Snowflake ID
```

## 问题和支持

如果你在使用过程中遇到问题，或有任何疑问，请在 GitHub 上的 [Issues](https://github.com/deloz/snowflake/issues) 中提出。

## 许可证

本项目使用 MIT 许可证。详情请查阅 [LICENSE](LICENSE) 文件。
