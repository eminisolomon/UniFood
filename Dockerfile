# NodeJS Version 16
FROM node:18.13.0

# Copy Dir
COPY . ./app

LABEL fly_launch_runtime="Node.js"
# Work to Dir
WORKDIR /app

# Install Node Package
RUN yarn install --legacy-peer-deps

# Set Env
ENV NODE_ENV production

EXPOSE 3000

# Cmd script
CMD ["yarn", "run", "dev"]

