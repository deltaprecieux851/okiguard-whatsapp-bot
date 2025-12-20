#!/usr/bin/env bash
# simple health check script
curl -f http://localhost:3000/health || exit 1
echo "OK"