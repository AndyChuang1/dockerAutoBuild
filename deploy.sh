#!/bin/bash
echo Stop Running
sudo docker stop autoBuild

echo Remove container and Image 
sudo docker rm -f autoBuild
sudo docker rmi -f bboy81905/node-server-auto-build 

echo Start pulling and running

sudo docker run -p 3333:8080 --name autoBuild -d bboy81905/node-server-auto-build