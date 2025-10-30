# Use a standard Go image as a base
FROM golang:1.21-alpine AS builder

# 1. PocketBase ko download aur build karo
WORKDIR /src
RUN wget https://github.com/pocketbase/pocketbase/releases/download/v0.22.0/pocketbase_0.22.0_linux_amd64.zip -O /tmp/pb.zip \
    && unzip /tmp/pb.zip -d /src/ \
    && rm /tmp/pb.zip

# 2. Final Minimal Image
FROM alpine:latest

# Install ca-certificates for HTTPS
RUN apk --no-cache add ca-certificates

# Working directory set karo
WORKDIR /pb

# 3. PocketBase binary ko copy karo
COPY --from=builder /src/pocketbase .

# Run permissions
RUN chmod +x ./pocketbase

# 🔥 CRITICAL: Persistent data directory banao
RUN mkdir -p /pb/pb_data /pb/pb_public

# 🔥 Volume mount point (Render disk yahan mount hoga)
VOLUME ["/pb/pb_data"]

# Configuration
EXPOSE 8080

# 🔥 Server ko data directory ke saath start karo
CMD ["./pocketbase", "serve", "--http=0.0.0.0:8080", "--dir=/pb/pb_data"]
