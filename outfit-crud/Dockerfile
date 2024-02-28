FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 433

# Use the official .NET SDK image as a build stage
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["./outfit-crud/outfit-crud.csproj", "./"]
RUN dotnet restore "./outfit-crud.csproj"
COPY ./outfit-crud .

# BUILD
RUN dotnet build "outfit-crud.csproj" -c Release -o /app/build
# PUBLISH
FROM build as publish
RUN dotnet publish "outfit-crud.csproj" -c Release -o /app/publish

# Use a smaller image for the runtime environment
FROM base AS runtime
WORKDIR /app
COPY --from=publish /app/publish .

# Set the entry point for the application
ENTRYPOINT ["dotnet", "outfit-crud.dll"]