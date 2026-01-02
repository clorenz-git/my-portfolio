---
title: "Enterprise IAM Baseline (AWS Organizations + Identity Center)"
summary: "Enterprise-style identity and access baseline built with Terraform, modeling centralized SSO access, multi-account AWS Organizations, reusable permission sets, and org-level guardrails using SCPs."
github: "https://github.com/clorenz-git/enterprise-iam-baseline"
tags:
  - AWS
  - Terraform
  - IAM
  - AWS Organizations
  - Identity Center
  - SCP
  - Security
  - Enterprise
diagram: "/projects/enterprise-iam-architecture.png"
date: "2026-01-01"
status: "completed"
---

## Overview

A realistic enterprise IAM baseline built to model how **access is actually handled at scale** in AWS.

This project focuses on centralized identity via IAM Identity Center (SSO), multi-account organization structure, reusable permission sets, and enforcement above IAM using Service Control Policies (SCPs).  
No one-off IAM users. No snowflake permissions. Everything is designed to scale.

All infrastructure was built, validated, documented, and intentionally torn down.

---

## Key Decisions

- **SSO-first access model**  
  All human access flows through IAM Identity Center. No IAM users exist in workload accounts.

- **Group-based permissions**  
  Access is granted using the pattern:  
  **Group → Permission Set → Account**

- **Multi-account organization**  
  Separate accounts for security and workloads, scoped using Organizational Units.

- **Guardrails above IAM**  
  SCPs enforce restrictions that cannot be bypassed by account-level permissions.

- **Terraform-only lifecycle**  
  All resources created, validated, and destroyed using Terraform to model real operational workflows.

---

## Architecture

**Identity**
- IAM Identity Center (SSO)
- Identity Store groups:
  - PlatformAdmins
  - Developers
  - Auditors

**Accounts**
- `security` – elevated access, restricted surface area
- `workloads-dev` – development workloads only

**Enforcement**
- SCP denying IAM user and access key creation in workloads
- SCP preventing member accounts from leaving the organization

This mirrors how enterprises avoid IAM sprawl while maintaining least privilege.

---

## Results

- Centralized SSO login via AWS Access Portal
- Permission sets successfully provisioned across accounts
- Group-based access verified
- IAM user creation explicitly denied by SCP (validated enforcement)
- No lingering billable resources after teardown

---

## Why This Matters

In real AWS environments:

- IAM users don’t scale
- Permissions must be reusable
- Guardrails must exist above IAM
- Identity must be centralized

This project focuses on **those exact problems**, using patterns you’ll actually see in production AWS organizations.

---

## Notes

This project was built as a portfolio and learning exercise, but the design patterns used are directly applicable to real-world enterprise environments.

The full lifecycle — design, implementation, verification, and teardown — is intentionally documented.
