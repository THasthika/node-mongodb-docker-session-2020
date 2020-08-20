## Create Docker Image

`docker build -t [tag1] [tag2] ... [directory]`

eg: `docker build -t my-hello-world-image .`

## Run a Docker Instance

`docker run `


## Running MongoDB Server Locally through docker

`docker run -d -p 27017:27107 -v ~/data:/data/db mongo --name todo-db`

### Without persistant storage

`docker run -d -p 27017:27107 mongo --name todo-db`