#!/bin/bash
cd /home/kavia/workspace/code-generation/universal-react-application-145085-145094/main_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

