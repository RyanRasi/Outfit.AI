# Use the official .NET SDK image as a build stage
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /app

# Copy the project files and restore dependencies
COPY ./outfit-crud/*.csproj ./
RUN dotnet restore

# Copy the remaining source code
COPY . .

# Build the application
RUN dotnet publish -c Release -o out

# Use a smaller image for the runtime environment
FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS runtime
WORKDIR /app
COPY --from=build /app/out ./

# Expose the port your app will run on
EXPOSE 7299

# Set the entry point for the application
ENTRYPOINT ["dotnet", "outfit-crud.dll"]
