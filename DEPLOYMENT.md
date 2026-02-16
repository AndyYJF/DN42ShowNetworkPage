# Deployment Guide - Linux Server

## Method 1: Nginx Static Hosting (Recommended)

### Step 1: Build the Project

On your local machine:

```bash
cd C:\Users\21145\dn42-show
npm run build
```

This creates a `dist` folder with optimized static files.

### Step 2: Upload to Server

Upload the `dist` folder to your Linux server:

```bash
# Using SCP
scp -r dist/* user@your-server:/var/www/dn42-show/

# Or using rsync
rsync -avz dist/ user@your-server:/var/www/dn42-show/
```

### Step 3: Install and Configure Nginx

On your Linux server:

```bash
# Install Nginx (Ubuntu/Debian)
sudo apt update
sudo apt install nginx -y

# Or for CentOS/RHEL
sudo yum install nginx -y
```

Create Nginx configuration:

```bash
sudo nano /etc/nginx/sites-available/dn42-show
```

Add this configuration:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name your-domain.com;  # Replace with your domain or IP

    root /var/www/dn42-show;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

Enable the site:

```bash
# Create symlink
sudo ln -s /etc/nginx/sites-available/dn42-show /etc/nginx/sites-enabled/

# Test configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

### Step 4: Enable Auto-start

```bash
# Enable Nginx to start on boot
sudo systemctl enable nginx

# Check status
sudo systemctl status nginx
```

### Step 5: Optional - Setup SSL with Let's Encrypt

```bash
# Install certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d your-domain.com

# Auto-renewal is configured automatically
```

---

## Method 2: Docker Deployment

### Create Dockerfile

Create `Dockerfile` in project root:

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Create nginx.conf

```nginx
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

### Build and Run

```bash
# Build image
docker build -t dn42-show .

# Run container
docker run -d \
  --name dn42-show \
  --restart unless-stopped \
  -p 80:80 \
  dn42-show
```

### Docker Compose (with auto-restart)

Create `docker-compose.yml`:

```yaml
version: '3.8'
services:
  dn42-show:
    build: .
    container_name: dn42-show
    restart: unless-stopped
    ports:
      - "80:80"
```

Run:

```bash
docker-compose up -d
```

---

## Method 3: PM2 with Node Server (Alternative)

If you prefer running with Node:

### On Server:

```bash
# Install PM2 globally
npm install -g pm2

# Navigate to project directory
cd /var/www/dn42-show

# Install dependencies
npm install

# Build project
npm run build

# Start with PM2
pm2 serve dist 3000 --name dn42-show --spa

# Save PM2 configuration
pm2 save

# Setup PM2 to start on boot
pm2 startup
# Follow the command it outputs
```

---

## Quick Deployment Script

Create `deploy.sh` on your local machine:

```bash
#!/bin/bash

# Configuration
SERVER="user@your-server"
REMOTE_PATH="/var/www/dn42-show"

# Build
echo "Building project..."
npm run build

# Upload
echo "Uploading to server..."
rsync -avz --delete dist/ $SERVER:$REMOTE_PATH/

# Reload Nginx
echo "Reloading Nginx..."
ssh $SERVER "sudo systemctl reload nginx"

echo "Deployment complete!"
```

Make it executable:

```bash
chmod +x deploy.sh
```

Run deployment:

```bash
./deploy.sh
```

---

## Verification

After deployment, verify:

1. Visit your domain/IP in browser
2. Check all sections load correctly
3. Test the interactive map
4. Verify responsive design on mobile

## Troubleshooting

### Nginx not starting:
```bash
sudo nginx -t  # Check configuration
sudo systemctl status nginx  # Check status
sudo journalctl -u nginx -n 50  # Check logs
```

### Permission issues:
```bash
sudo chown -R www-data:www-data /var/www/dn42-show
sudo chmod -R 755 /var/www/dn42-show
```

### Firewall:
```bash
# Allow HTTP/HTTPS
sudo ufw allow 'Nginx Full'
```
