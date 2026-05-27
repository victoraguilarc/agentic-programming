# syntax=docker/dockerfile:1.7

# ---------- Stage 1: build ----------
FROM node:20-alpine AS builder

ENV PNPM_HOME=/pnpm \
    PATH=/pnpm:$PATH \
    NODE_ENV=development

RUN corepack enable

WORKDIR /app

# Install deps with cache-friendly layering
COPY package.json pnpm-lock.yaml* ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile || pnpm install

# Copy source and build static SPA
COPY . .
RUN pnpm run build --base /

# ---------- Stage 2: runtime ----------
FROM nginx:1.27-alpine AS runtime

# Drop privileges where possible and harden defaults
RUN rm -rf /usr/share/nginx/html/* \
    && rm /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD wget -qO- http://127.0.0.1:8080/ >/dev/null 2>&1 || exit 1

# nginx already drops to non-root workers; run master as non-root user
USER nginx

CMD ["nginx", "-g", "daemon off;"]
