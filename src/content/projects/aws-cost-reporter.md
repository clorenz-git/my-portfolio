---
title: "AWS Cost Reporter (Terraform + Python)"
summary: "Daily FinOps automation that pulls AWS spend from Cost Explorer, generates PNG reports (matplotlib), stores artifacts in private S3, and emails time-limited pre-signed links via SNS — all deployed with Terraform."
github: "https://github.com/clorenz-git/aws-cost-reporter"
tags:
  - AWS
  - Terraform
  - Lambda
  - EventBridge
  - S3
  - SNS
  - Python
  - matplotlib
diagram: "/projects/archetecturegraph.png"
date: "2025-12-28"
status: "completed"
---

## Overview

A daily FinOps-style automation that queries AWS Cost Explorer, generates JSON + PNG cost reports, stores them in private S3, and distributes access via SNS using time-limited pre-signed URLs.

## Key Decisions

- Terraform-first deploy/destroy lifecycle
- Private-by-default artifacts shared via pre-signed URLs
- Lambda layer strategy for matplotlib/numpy

## Results

- Automated daily report delivery
- Secure access model
- Clear upgrade path (SES HTML, PDF, alerts)
