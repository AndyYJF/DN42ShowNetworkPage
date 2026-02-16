# Docker Deployment Guide

## Prerequisites

Make sure Docker and Docker Compose are installed on your Linux server:

```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Install Docker Compose
sudo apt install docker-compose -y

# Add your user to docker group (optional, to run without sudo)
sudo usermod -aG docker $USER
# Log out and back in for this to take effect
```

## Deployment Steps

### 1. Upload Project to Server

From your local machine:

```bash
# Create a tar archive (excluding node_modules)
tar -czf dn42-show.tar.gz --exclude=node_modules --exclude=dist --exclude=.git .

# Upload to server
scp dn42-show.tar.gz user@your-server:~/

# On server, extract
ssh user@your-server
mkdir -p ~/dn42-show
cd ~/dn42-show
tar -xzf ../dn42-show.tar.gz
```

Or use git:

```bash
# On server
git clone <your-repo-url> ~/dn42-show
cd ~/dn42-show
```

### 2. Build and Start Container

```bash
cd ~/dn42-show

# Build and start in detached mode
docker-compose up -d --build

# View logs
docker-compose logs -f

# Check status
docker-compose ps
```

### 3. Verify Deployment

```bash
# Check if container is running
docker ps

# Test the website
curl http://localhost

# Check container logs
docker logs dn42-show
```

## Container Management

### Start/Stop/Restart

```bash
# Stop container
docker-compose stop

# Start container
docker-compose start

# Restart container
docker-compose restart

# Stop and remove container
docker-compose down

# Stop and remove container + volumes
docker-compose down -v
```

### View Logs

```bash
# Follow logs
docker-compose logs -f

# Last 100 lines
docker-compose logs --tail=100

# Specific service logs
docker logs dn42-show
```

### Update Deployment

When you make changes to the code:

```bash
# Rebuild and restart
docker-compose up -d --build

# Or force rebuild
docker-compose build --no-cache
docker-compose up -d
```

## Auto-start on Server Boot

Docker Compose with `restart: unless-stopped` automatically starts containers on boot.

To ensure Docker itself starts on boot:

```bash
sudo systemctl enable docker
```

## Using Different Port

Edit `docker-compose.yml` to change the port:

```yaml
ports:
  - "8080:80"  # Access on port 8080 instead of 80
```

Then restart:

```bash
docker-compose up -d
```

## SSL/HTTPS with Nginx Reverse Proxy

If you want HTTPS, add a reverse proxy:

### Create `docker-compose.prod.yml`:

```yaml
version: '3.8'

services:
  dn42-show:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: dn42-show
    restart: unless-stopped
    networks:
      - dn42-network

  nginx-proxy:
    image: nginx:alpine
    container_name: nginx-proxy
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx-proxy.conf:/etc/nginx/conf.d/default.conf
      - ./ssl:/etc/nginx/ssl
    networks:
      - dn42-network
    depends_on:
      - dn42-show

networks:
  dn42-network:
    driver: bridge
```

### Create `nginx-proxy.conf`:

```nginx
upstream dn42_backend {
    server dn42-show:80;
}

server {
    listen 80;
    server_name your-domain.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name your-domain.com;

    ssl_certificate /etc/nginx/ssl/cert.pem;
    ssl_certificate_key /etc/nginx/ssl/key.pem;

    location / {
        proxy_pass http://dn42_backend;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## Resource Limits

To limit container resources, add to `docker-compose.yml`:

```yaml
services:
  dn42-show:
    # ... existing config ...
    deploy:
      resources:
        limits:
          cpus: '0.5'
          memory: 512M
        reservations:
          cpus: '0.25'
          memory: 256M
```

## Backup

```bash
# Backup container image
docker save dn42-show:latest | gzip > dn42-show-backup.tar.gz

# Restore
docker load < dn42-show-backup.tar.gz
```

## Monitoring

```bash
# Container stats
docker stats dn42-show

# Health check status
docker inspect --format='{{.State.Health.Status}}' dn42-show
```

## Troubleshooting

### Container won't start:

```bash
# Check logs
docker-compose logs

# Check Docker daemon
sudo systemctl status docker

# Rebuild from scratch
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

### Port already in use:

```bash
# Find what's using port 80
sudo lsof -i :80

# Or use different port in docker-compose.yml
```

### Permission issues:

```bash
# Fix file permissions
sudo chown -R $USER:$USER ~/dn42-show
```

## Quick Commands Reference

```bash
# Deploy
docker-compose up -d --build

# Stop
docker-compose down

# Restart
docker-compose restart

# Logs
docker-compose logs -f

# Update
git pull && docker-compose up -d --build

# Clean up old images
docker image prune -a
```
