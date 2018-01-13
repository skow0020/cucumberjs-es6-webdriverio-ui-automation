#!/bin/bash
set -eu -o pipefail

cd code
echo $GRID_HOST
npm install
npm config set klic-ui-automation:host $GRID_HOST
npm run jenkins