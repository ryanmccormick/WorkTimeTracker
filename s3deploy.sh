#!/bin/bash

# Configure aws-cli for s3 deployment
aws configure set aws_access_key_id ${AWS_ACCESS_KEY_ID}
aws configure set aws_secret_access_key ${AWS_SECRET_ACCESS_KEY}
aws configure set default.region ${S3_WORKTIME_REGION}

# Upload Files
aws s3 sync ./dist s3://${S3_WORKTIME_BUCKET} --delete --include "*" --exclude "*.css" --metadata-directive REPLACE

# Set MIME type for CSS files
aws s3 sync ./dist s3://${S3_WORKTIME_BUCKET} --delete --exclude "*" --include "*.css" --content-type "text/css;charset=utf-8" --metadata-directive REPLACE
