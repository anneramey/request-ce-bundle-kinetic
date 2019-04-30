#!/usr/bin/env bash

# Stop running the script on an error
set -e

PERSISTENT_STORAGE=/project

# Build bundle builder
# docker build -f Dockerfile.builder -t kineticdata/request-ce-bundle-kinetic-builder:latest .

# Install project dependencies
docker run --rm -v $PWD/.:$PERSISTENT_STORAGE \
  -e "PERSISTENT_STORAGE=$PERSISTENT_STORAGE" \
  -w=$PERSISTENT_STORAGE node:10-alpine yarn install
  
# Build the bundle
docker run --rm -v $PWD/.:$PERSISTENT_STORAGE \
  -e "PERSISTENT_STORAGE=$PERSISTENT_STORAGE" \
  -w=$PERSISTENT_STORAGE/packages/app node:10-alpine yarn run build