# Use an official Ollama runtime as a parent image
FROM ollama/ollama:0.1.22

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Rename system_message param
RUN chmod +x setModelParams.sh && ./setModelParams.sh

# Copy the custom entry point script into the container
COPY createRunModel.sh /createRunModel.sh
RUN chmod +x /createRunModel.sh

# Create and run application
ENTRYPOINT [ "/createRunModel.sh" ]