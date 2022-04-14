#!/bin/bash

API="http://localhost:4741/index"
URL_PATH="/workouts"

curl  "${API}${URL_PATH}"\
  --include \
  --request GET \

echo