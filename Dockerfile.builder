# This image currently does not make use of
# any caching optimizations. This will be
# looked at later on how best to accomplish it.

FROM alpine:latest

RUN apk add --no-cache curl bash

# Needed so that apt-get install npm runs/builds correctly
RUN curl -sL https://deb.nodesource.com/setup_9.x | bash -

RUN apt-get update && apt-get install -y \
  nodejs \
  npm

RUN npm install yarn -g