# lowdb2sqlite

## 简介

这是一个将lowdb表转换成sqlite的工具

## 使用方法

1. 你需要将lowdb的json文件复制到db文件夹（如果没有自行创建）
2. 修改`index.ts`中的lowdb表的结构和sqlite表的结构保证和你的lowdb的表结构相同
3. 修改`index.ts`中插入值的语法