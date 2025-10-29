# Use a standard Go image as a base
FROM alpine:latest

# Set the working directory
WORKDIR /pb

# Copy the PocketBase executable
COPY pocketbase .
RUN chmod +x ./pocketbase

# ‼️ NAYI LINE: Poora data folder copy karo
COPY pb_data ./pb_data

# Expose the port PocketBase runs on
EXPOSE 8080

# Command to run PocketBase
# PocketBase apne aap 'pb_data' folder dhoondh lega
CMD ["./pocketbase", "serve", "--http=0.0.0.0:8080"]