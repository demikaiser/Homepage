#!/bin/bash

node ./src/achievementGen.js
git add . ; git commit -m "Updates." ; git push
npm run deploy

