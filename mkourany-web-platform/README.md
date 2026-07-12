# MKourany Web Platform

> A production-style Dockerized full-stack web platform demonstrating modern DevOps practices, container orchestration, reverse proxying, persistent storage, and monitoring.

---

## Overview

The **MKourany Web Platform** is a complete multi-container application built using **Docker Compose**. It demonstrates how to deploy and manage a production-style web application composed of multiple independent services.

The platform consists of:

- ⚛️ React Frontend
- 🚀 Node.js + Express Backend
- 🗄️ MySQL Database
- 🌐 Nginx Reverse Proxy
- 📊 Prometheus Monitoring
- 📈 Grafana Dashboards
- 📦 cAdvisor Container Metrics

The project follows a microservice-inspired architecture where each component runs inside its own Docker container and communicates over Docker networks.

---

# Architecture

```
                        +----------------+
                        |    Browser     |
                        +-------+--------+
                                |
                                |
                         HTTP Requests
                                |
                                ▼
                       +----------------+
                       |     Nginx      |
                       | Reverse Proxy  |
                       +-------+--------+
                               |
              +----------------+----------------+
              |                                 |
              ▼                                 ▼
      +---------------+                 +---------------+
      | React Frontend|                 | Node Backend  |
      +---------------+                 +-------+-------+
                                                |
                                                ▼
                                         +--------------+
                                         |    MySQL     |
                                         +--------------+

Monitoring Stack

cAdvisor
     │
     ▼
Prometheus
     │
     ▼
Grafana
```

---

# Technology Stack

| Component | Technology |
|------------|------------|
| Frontend | React |
| Backend | Node.js + Express |
| Database | MySQL 8 |
| Reverse Proxy | Nginx |
| Containerization | Docker |
| Orchestration | Docker Compose |
| Monitoring | Prometheus |
| Metrics | cAdvisor |
| Visualization | Grafana |

---

# Repository Structure

```text
mkourany-web-platform/
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   └── src/
│       ├── index.js
│       ├── db.js
│       ├── routes/
│       └── jobs/
│
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   ├── public/
│   └── src/
│
├── mysql/
│   ├── initdb/
│   └── backup/
│
├── nginx/
│   ├── Dockerfile
│   ├── nginx.conf
│   └── conf.d/
│
├── monitoring/
│   ├── prometheus/
│   ├── grafana/
│   └── cadvisor/
│
├── compose/
│   ├── docker-compose.yml
│   └── .env
│
├── scripts/
├── docs/
└── secrets/
```

---

# Project Components

## Frontend

The frontend is a React application responsible for the user interface.

Responsibilities:

- Display application data
- Call backend REST APIs
- Serve static assets

---

## Backend

The backend is built with Node.js and Express.

Responsibilities:

- Expose REST APIs
- Process business logic
- Connect to MySQL
- Execute scheduled background jobs

---

## MySQL

MySQL stores all persistent application data.

Features:

- Database initialization scripts
- Persistent Docker volume
- Backup support

---

## Nginx

Nginx acts as a reverse proxy.

Responsibilities:

- Route requests
- Serve frontend
- Forward API traffic to backend
- Improve security
- Centralize HTTP entry point

---

## Monitoring Stack

### cAdvisor

Collects container metrics including:

- CPU
- Memory
- Disk
- Network
- Container lifecycle

### Prometheus

Prometheus periodically scrapes metrics from cAdvisor and stores them as time-series data.

### Grafana

Grafana visualizes Prometheus metrics through dashboards.

---

# Environment Variables

Example `.env`

```env
COMPOSE_PROJECT_NAME=mkourany_web_platform

MYSQL_ROOT_PASSWORD=passwd
MYSQL_DATABASE=appdb
MYSQL_USER=appuser
MYSQL_PASSWORD=appsecret

BACKEND_PORT=3000
FRONTEND_PORT=80
NGINX_PORT=8080
```

---

# Getting Started

## Build the project

```bash
docker compose -f compose/docker-compose.yml build
```

## Start all services

```bash
docker compose -f compose/docker-compose.yml up -d
```

## Check running containers

```bash
docker ps
```

## View logs

```bash
docker compose logs -f
```

## Stop the project

```bash
docker compose down
```

## Rebuild after changes

```bash
docker compose up -d --build
```

---

# Docker Networking

All services communicate through Docker bridge networks.

Instead of IP addresses, containers communicate using service names such as:

- backend
- mysql
- prometheus
- grafana #test

---

# Persistent Storage

Docker Volumes are used for:

- MySQL data
- Grafana dashboards
- Prometheus time-series database

This ensures data survives container recreation.

---

# Monitoring Workflow

```
Docker Containers
        │
        ▼
    cAdvisor
        │
        ▼
   Prometheus
        │
        ▼
    Grafana
```

---

# Future Improvements

- HTTPS with Let's Encrypt
- CI/CD using GitHub Actions
- Automated database backups
- Centralized logging (ELK/Loki)
- Docker Swarm or Kubernetes deployment
- Unit and integration tests

---

# Author

**Mostafa Mohammed**

DevOps Engineer