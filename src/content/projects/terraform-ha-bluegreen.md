---
title: "Terraform HA Blue/Green Web Tier (SSM-Only)"
summary: "Enterprise-style HA web tier using ALB weighted routing + blue/green ASGs in private subnets with SSM-only access (no SSH) and IMDSv2."
github: "https://github.com/clorenz-git/terraform-ha-bluegreen"
tags: ["AWS", "Terraform", "ALB", "Auto Scaling", "EC2", "SSM", "Amazon Linux 2023", "IMDSv2"]
diagram: "/projects/aws-bluegreen-architecture.png"
date: "2025-12-28"
status: "completed"
---

## Problem
I wanted a practical, enterprise-style Terraform project that goes beyond “spin up an EC2 instance” and focuses on real deployment and resiliency patterns: high availability across subnets, secure access without SSH, and a blue/green workflow that supports fast, low-risk cutovers.

## Approach
- Build a VPC layout with public subnets for the load balancer and private subnets for compute.
- Deploy an internet-facing Application Load Balancer with two target groups (Blue / Green) and weighted forwarding.
- Provision two Auto Scaling Groups (Blue / Green) behind the ALB using launch templates and bootstrap scripts.
- Use Amazon Linux 2023 + systemd to run a lightweight web service that shows the environment color and instance ID.
- Manage instances through AWS Systems Manager Session Manager and disable SSH on hosts.

## Key Decisions
- ALB weighted forwarding for safe traffic shifting.
- SSM-only access (no SSH keys, no bastion host).
- IMDSv2 enforced.
- Keep costs low (no NAT Gateway, no WAF).
- ASG instance refresh enabled for immutable-style updates.

## Results
- Fully working HA web tier managed end-to-end with Terraform.
- Verified cutover by shifting ALB weights.
- Verified SSM access + SSH disabled on instances.
- Modular structure that can be extended into a v2 (failover/monitoring).
