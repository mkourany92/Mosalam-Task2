# mkourany-web-platform

Production-style Docker platform with:
- React frontend
- Node.js Express backend
- MySQL persistence
- Nginx reverse proxy
- cAdvisor, Prometheus, Grafana monitoring

## Structure

- `frontend/` — React app and frontend image build
- `backend/` — Node API and app image build
- `mysql/` — DB init scripts and backup helpers
- `nginx/` — reverse proxy config
- `monitoring/` — observability configs
- `compose/` — Docker Compose manifests
- `scripts/` — operational helpers
- `docs/` — architecture and runbook notes

## Quick start

```bash
docker compose -f compose/docker-compose.yml up -d


### .env
Add only non-secret config needed by Compose:
```env
COMPOSE_PROJECT_NAME=mkourany_web_platform
MYSQL_ROOT_PASSWORD=mkP@ss54321
MYSQL_DATABASE=appdb
MYSQL_USER=appuser
MYSQL_PASSWORD=appsecret
BACKEND_PORT=3000
FRONTEND_PORT=80
NGINX_PORT=8080