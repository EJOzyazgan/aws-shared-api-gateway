#!/bin/bash
serverless deploy
sleep 5s

cd services/auth
serverless deploy
sleep 5s

cd services/user
serverless deploy
sleep 5s

echo "Press any key to continue"
read