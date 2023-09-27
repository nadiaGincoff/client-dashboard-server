# Starts with official Node base image, specifying node version 18
FROM node:18 
# Uses npm to install pnpm, with all commands being pnpm going forward
RUN npm i -g pnpm
# Specifies a working directory
WORKDIR /usr/src/app
# Copies over the minimum required files (package.json and pnpm-lock.yaml) to install dependencies
# Installs dependencies, specifying --frozen-lockfile to ensure our lock file isn’t changed
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Build the Prisma client
COPY prisma/schema.prisma ./prisma/
RUN pnpx prisma generate

# Copies over the rest of the files (excluding ignored files, which we’ll cover next)
COPY . .
# And finally, exposes a port and sets a default start command
EXPOSE 8080
CMD [ "pnpm", "start" ]