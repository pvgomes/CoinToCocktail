# CoinToCocktail

CoinToCocktail is a web application that transforms cryptocurrency data into cocktail recipes. This project utilizes Bootstrap for styling and is designed to be easily deployable using Docker.

## Project Structure

```
CoinToCocktail
├── src
│   ├── index.html
│   ├── css
│   │   └── styles.css
│   ├── js
│   │   └── scripts.js
├── Dockerfile
├── README.md
```

## Getting Started

To get started with the CoinToCocktail project, follow the instructions below to build and run the project using Docker.

### Prerequisites

- Docker installed on your machine.

### Building the Docker Image

1. Open a terminal and navigate to the root directory of the project (where the Dockerfile is located).
2. Run the following command to build the Docker image:

   ```
   docker build -t cointococktail .
   ```

### Running the Docker Container

1. After the image is built, run the following command to start a container:

   ```
   docker run -d -p 8080:80 cointococktail
   ```

2. Open your web browser and go to `http://localhost:8080` to view the application.

### Stopping the Docker Container

To stop the running container, you can use the following command:

```
docker ps
```

Find the container ID of the running container and then run:

```
docker stop <container_id>
```

## Contributing

If you would like to contribute to the CoinToCocktail project, feel free to submit a pull request or open an issue for discussion.

## License

This project is licensed under the MIT License. See the LICENSE file for details.