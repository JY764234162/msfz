## 多阶段构建：Node 构建前端，Nginx 负责静态资源服务

# 构建阶段
FROM node:20-alpine AS build

WORKDIR /app

# 仅拷贝依赖清单，优先利用缓存（pnpm）
COPY package.json pnpm-lock.yaml ./

RUN corepack enable \
  && corepack prepare pnpm@10.13.1 --activate \
  && pnpm install --frozen-lockfile
# 拷贝源代码并构建
COPY . .

# 使用项目里的构建命令（vite build），输出目录由 vite.config.ts 决定
RUN pnpm build

# 运行阶段
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

# 清空默认静态资源
RUN rm -rf ./*

# 从构建阶段拷贝打包产物
# 默认假设 Vite 的 outDir 配置为 docs
COPY --from=build /app/dist ./msfz/

# 自定义 Nginx 配置以支持 SPA（前端路由）
COPY ./nginx.conf /etc/nginx/conf.d/default.conf


EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

