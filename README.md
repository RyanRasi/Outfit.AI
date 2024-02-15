# Outfit.AI - Personalized Outfit Recommendation LLM Model

Welcome to the Personalized Outfit Recommendation LLM (Language Model) project! This system utilizes a Microsoft SQL database, a .NET 7 API Controller, a React frontend, and a Language Model for outfit recommendations. Docker Compose is used to manage the deployment of these components.

## Prerequisites
Make sure you have Docker and Docker Compose installed on your system.

- [Docker Installation](https://docs.docker.com/get-docker/)
- [Docker Compose Installation](https://docs.docker.com/compose/install/)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/outfit-recommendation-llm.git
   cd outfit-recommendation-llm
   ```
2. Build and run the containers using Docker Compose:
    ```bash
    docker-compose build
    docker-compose up
    ```
3. Access the application:
    http://localhost:3000

### Docker Containers consist of:
1. Microsoft SQL Database
Database container for storing clothing items.
2. .NET 7 API Controller
API endpoint for interacting with the database.
Manages the CRUD operations for clothing items.
3. React Frontend
User interface for adding clothing items and generating personalized outfit recommendations.
Accessible at http://localhost:3000.
4. Language Model (LLM)
Responsible for generating personalized outfit recommendations based on stored clothing items.
Usage

### How to use:
Use the form to add clothing items, providing the item name, type, and color.
Click the "Generate Recommendation" button to receive personalized outfit suggestions.