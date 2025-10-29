# Use a standard Go image as a base
FROM golang:1.21-alpine AS builder

# 1. PocketBase ko download aur build karo (Isse 100% sahi Linux file banegi)
# ‼️ NOTE: Hum isse seedha website se download kar rahe hain
WORKDIR /src
RUN wget https://github.com/pocketbase/pocketbase/releases/download/v0.22.0/pocketbase_0.22.0_linux_amd64.zip -O /tmp/pb.zip \
    && unzip /tmp/pb.zip -d /src/ \
    && rm /tmp/pb.zip

# 2. Final Minimal Image (Security aur Size ke liye)
FROM alpine:latest

# Working directory set karo
WORKDIR /pb

# 3. Data aur history files ko copy karo
# NOTE: Ab PocketBase ki file builder se aa rahi hai
COPY --from=builder /src/pocketbase .

# 4. Aapki files (Jo aapne GitHub par push ki hain)
# In folders ko GitHub par khaali ya naye versions ke saath rakho
COPY pb_data ./pb_data
COPY pb_migrations ./pb_migrations

# Run permissions
RUN chmod +x ./pocketbase

# Configuration
EXPOSE 8080
# Server ko chalu karo
CMD ["./pocketbase", "serve", "--http=0.0.0.0:8080"]