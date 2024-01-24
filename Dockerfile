# Use an official Nginx runtime as a base image
FROM nginx:1.25.3-alpine-slim

# Set the working directory to the default Nginx web root
WORKDIR /usr/share/nginx/html

# Remove default Nginx static files
RUN rm -rf ./*

# Copy the contents of the 'dist' directory into the container at the working directory
COPY dist/ .

# Expose the port that Nginx will run on
EXPOSE 80
