#!/bin/bash

# 获取当前路径
current_path=$(pwd)

# 拼接dist文件夹的路径
dist_path="${current_path}/dist"

# 指定服务器的IP地址和用户名
server_ip="123.56.155.30"
username="root"
port="10022"
taget_path="/msfz/"


# 使用scp命令将dist文件夹内容复制到指定服务器的/msfz目录下  scp -r -P "10022" "E:/Desktop/msfz/dist" "root@123.56.155.30:/msfz/"
scp -r -P "${port}" "${dist_path}" "${username}@${server_ip}:${taget_path}"