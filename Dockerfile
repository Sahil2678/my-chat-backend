# Use a standard Go image as a base
FROM alpine/git:latest as builder

# 1. PocketBase ko download karo
RUN wget https://github.com/pocketbase/pocketbase/releases/download/v0.22.0/pocketbase_0.22.0_linux_amd64.zip -O /tmp/pb.zip \
    && unzip /tmp/pb.zip -d /usr/local/bin/ \
    && rm /tmp/pb.zip \
    && mv /usr/local/bin/pocketbase /usr/local/bin/pocketbase.exe \
    && chmod +x /usr/local/bin/pocketbase.exe

# 2. Main app image
FROM alpine:latest

# Working directory set karo
WORKDIR /pb

# 3. Code aur Data Files ko copy karo
# Yeh copy karne se pehle, Render/Docker 'git lfs pull' chala chuka hoga,
# isliye aapki badi data file (auxiliary.db) automatically download ho jaayegi.
COPY --from=builder /usr/local/bin/pocketbase.exe .

# Aapki files GitHub se aayengi, lekin hum inhe Docker build mein daal dete hain
# ‼️ NAYI LINE: Data folder aur migrations copy karo
COPY pb_data ./pb_data
COPY pb_migrations ./pb_migrations

# Expose port aur command chalao
EXPOSE 8080
CMD ["./pocketbase.exe", "serve", "--http=0.0.0.0:8080"]