---
title: "Serverless Enrichment API"
summary: "FastAPI deployed to AWS Lambda as a container image behind API Gateway, with all infrastructure managed in Terraform (ECR, IAM, Lambda, API Gateway)."
github: "https://github.com/clorenz-git/serverless-enrichment-api"
tags:
  - AWS
  - Lambda
  - API Gateway
  - Terraform
  - FastAPI
  - Docker
diagram: "/projects/enrichmentarchitecture.png"
date: "2025-12-28"
status: "completed"
---

## Overview

A production-style serverless API built with FastAPI and deployed to AWS Lambda as a container image behind API Gateway. Fully provisioned with Terraform.

## Approach

- Build FastAPI service
- Package as Docker image and push to ECR
- Deploy to Lambda using container image support
- Expose via API Gateway proxy routing
- Codify everything in Terraform

## Results

- Working serverless container API
- Reusable Terraform patterns
- Better debugging instincts for real AWS wiring issues
