#!/bin/bash

set -e

# 镜像与容器的默认名称
IMAGE_NAME="${IMAGE_NAME:-msfz-frontend}"
IMAGE_TAG="${IMAGE_TAG:-latest}"
CONTAINER_NAME="${CONTAINER_NAME:-msfz-frontend}"

# 对外暴露的端口（宿主机端口）
HOST_PORT="${HOST_PORT:-8080}"
CONTAINER_PORT=80

echo "==> 构建前端 Docker 镜像：${IMAGE_NAME}:${IMAGE_TAG}"
docker build -t "${IMAGE_NAME}:${IMAGE_TAG}" .

echo "==> 停止并删除旧容器（如果存在）：${CONTAINER_NAME}"
if [ "$(docker ps -aq -f name="^${CONTAINER_NAME}$")" ]; then
  docker rm -f "${CONTAINER_NAME}"
fi

echo "==> 启动新容器：${CONTAINER_NAME}"
docker run -d \
  --name "${CONTAINER_NAME}" \
  -p "${HOST_PORT}:${CONTAINER_PORT}" \
  "${IMAGE_NAME}:${IMAGE_TAG}"

echo "==> 部署完成，访问地址：http://localhost:${HOST_PORT}"

