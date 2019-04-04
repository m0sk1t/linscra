## Installation

Please install `docker` and `docker-compose` tools first. [docker](https://docs.docker.com/install/linux/docker-ce/ubuntu/), [compose](https://docs.docker.com/compose/install/)

## Running&Stopping

Call

    docker-compose -f docker-compose-dev.yml up
    docker-compose -f docker-compose-dev.yml down

or

    make dev-up
    make dev-down

## Usage

Go to `http://localhost:3000/job/{company_name}/{tag_name}` to create a job, and refresh the page to watch the job status
