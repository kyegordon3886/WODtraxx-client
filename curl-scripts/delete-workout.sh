#!/bin/bash

API="http://localhost:4741/index"
URL_PATH="/workouts"

curl "${API}${URL_PATH}/${ID}" \
--include \
--request DELETE \
--header "Authorization: Bearer ${TOKEN}"
 --data '{
    "workout": {
      "name": "'"${NAME}"'"
    }
  }'


echo