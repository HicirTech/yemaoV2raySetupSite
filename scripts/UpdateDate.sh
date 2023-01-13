#!/bin/bash

echo "Updating last update time"

nowDateTime=$(date +"%Y-%m-%dT%H:%M:%S%z")

echo $nowDateTime

sed -i '' "s/VITE_LAST_UPDATED=.*/VITE_LAST_UPDATED=$nowDateTime/g" .env
