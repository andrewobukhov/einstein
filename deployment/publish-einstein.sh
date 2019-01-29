#! /bin/bash

DOCKER_HOST=$1

echo "\n\n ------ Creating docker container for einstein: HOST: $DOCKER_HOST   ------- \n\n"
set -e

cd .. && \

npm install --silent

rm -rf dist && \

ng build --prod  && \

cd deployment && \
rm -rf ./docker/einstein/dist && \
mkdir ./docker/einstein/dist && \

cp -rf ./docker/einstein/conf/nginx.conf ./docker/einstein/conf/http.conf && \
cp -rf ../dist/* ./docker/einstein/dist/



docker build -t $DOCKER_HOST/einstein:latest ./docker/einstein
docker push $DOCKER_HOST/einstein:latest



