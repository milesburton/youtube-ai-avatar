FROM node:18-bullseye

# Install system dependencies
RUN apt-get update && \
    apt-get install -y \
    git \
    curl \
    python3 \
    make \
    g++ && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Install global packages as root
RUN npm install -g npm@latest && \
    npm install -g typescript ts-node nodemon && \
    npm cache clean --force

# Set working directory
WORKDIR /workspace