---
sidebar_position: 2
---

# How to Define Your Compliance Scope

**Task**: Define the boundaries of your compliance program.

This guide provides specific steps to define your compliance scope for ISO 27001 or SOC 2. Follow these steps to create a clear, defensible scope that meets your business needs and audit requirements.

## Before You Start

**What you need**:
- Understanding of your organization's structure
- Access to key stakeholders
- Knowledge of your systems and processes
- 1-2 hours for scope definition

**What you'll get**:
- Clear scope statement
- System boundaries defined
- Stakeholder alignment
- Audit-ready documentation

## Step 1: Understand Scope Requirements (15 minutes)

### ISO 27001 Scope Requirements

ISO 27001 requires you to define:

**Organizational Scope**: Which parts of your organization are included
**System Scope**: Which systems, processes, and data are included
**Geographic Scope**: Which locations are included
**Temporal Scope**: The time period for implementation

### SOC 2 Scope Requirements

SOC 2 requires you to define:

**System Description**: What your system does and includes
**System Boundaries**: What's in and out of scope
**Subservice Organizations**: Third-party services you use
**Trust Services Criteria**: Which criteria you're addressing

**Action**: Review the scope requirements for your chosen standard.

## Step 2: Map Your Organization (30 minutes)

### Identify Organizational Units

Create an organizational map:

```markdown
# Organizational Scope Template

**In Scope**:
- [ ] IT Department
- [ ] Security Team
- [ ] Development Team
- [ ] Customer Support
- [ ] Finance (for customer data processing)

**Out of Scope**:
- [ ] Marketing (no access to customer data)
- [ ] Sales (limited system access)
- [ ] Legal (separate systems)
- [ ] HR (separate systems)

**Rationale**: [Explain why each unit is in or out of scope]
```

**Action**: Complete your organizational scope mapping.

### Identify Systems and Applications

Create a system inventory:

```markdown
# System Scope Template

**In Scope Systems**:
| System | Purpose | Data Types | Criticality |
|--------|---------|------------|-------------|
| Customer Database | Store customer data | PII, Business | High |
| Payment System | Process payments | Financial | High |
| User Portal | Customer access | PII, Business | Medium |
| Admin Tools | System management | Configuration | Medium |

**Out of Scope Systems**:
| System | Purpose | Reason for Exclusion |
|--------|---------|---------------------|
| Marketing CRM | Lead management | No customer data |
| Internal Wiki | Documentation | No sensitive data |
| Development Tools | Code management | Separate environment |
```

**Action**: Complete your system scope mapping.

## Step 3: Define Geographic Boundaries (15 minutes)

### Identify Locations

Map your geographic scope:

```markdown
# Geographic Scope Template

**In Scope Locations**:
- [ ] Primary office (San Francisco)
- [ ] Secondary office (New York)
- [ ] Data center (AWS US-East-1)
- [ ] Cloud regions (AWS, GCP)

**Out of Scope Locations**:
- [ ] Home offices (BYOD policy applies)
- [ ] Partner locations (separate agreements)
- [ ] Legacy systems (scheduled for retirement)

**Rationale**: [Explain geographic scope decisions]
```

**Action**: Define your geographic boundaries.

### Consider Data Residency

For data residency requirements:

```markdown
# Data Residency Assessment

**Data Types by Region**:
- **US**: Customer data, business data
- **EU**: EU customer data only
- **Other**: Limited business data

**Compliance Requirements**:
- **GDPR**: EU data processing
- **CCPA**: California data
- **Industry**: [Specific requirements]
```

**Action**: Document data residency requirements.

## Step 4: Define System Boundaries (30 minutes)

### Create System Description

Write your system description:

```markdown
# System Description Template

**System Name**: [Your System Name]
**System Overview**: [What your system does]

**System Boundaries**:
**Included**:
- Customer-facing web application
- Customer data processing
- Payment processing
- User authentication
- Data storage and backup

**Excluded**:
- Marketing systems
- Internal HR systems
- Development environments
- Legacy systems

**Key System Components**:
- Web servers (AWS EC2)
- Database (AWS RDS)
- Load balancer (AWS ALB)
- CDN (CloudFront)
- Monitoring (CloudWatch)

**Key Subservice Organizations**:
- AWS (infrastructure)
- Stripe (payments)
- SendGrid (email)
- Datadog (monitoring)
```

**Action**: Complete your system description.

### Define Data Flows

Map your data flows:

```markdown
# Data Flow Mapping

**Data Inputs**:
- Customer registration data
- Payment information
- User activity data
- System logs

**Data Processing**:
- User authentication
- Payment processing
- Data analytics
- Reporting

**Data Outputs**:
- Customer dashboards
- Payment confirmations
- System reports
- Audit logs

**Data Storage**:
- Customer database
- Payment records
- System logs
- Backup systems
```

**Action**: Document your data flows.

## Step 5: Validate Scope with Stakeholders (30 minutes)

### Conduct Stakeholder Review

Review scope with key stakeholders:

```markdown
# Stakeholder Review Template

**Stakeholders to Consult**:
- [ ] Executive leadership
- [ ] IT management
- [ ] Security team
- [ ] Legal/compliance
- [ ] Business units
- [ ] External auditors (if available)

**Key Questions**:
1. Does this scope cover our critical systems?
2. Are we excluding anything important?
3. Is this scope manageable for implementation?
4. Will this scope meet customer requirements?
5. Are there any regulatory considerations?

**Feedback and Changes**:
- [Document stakeholder feedback]
- [Document scope adjustments]
- [Document rationale for changes]
```

**Action**: Conduct stakeholder review and document feedback.

### Address Scope Challenges

Common scope challenges and solutions:

**"Scope is too broad"**
- Focus on customer-facing systems first
- Implement in phases
- Start with highest-risk areas

**"Scope is too narrow"**
- Include all customer data processing
- Consider regulatory requirements
- Include critical business systems

**"Third-party dependencies"**
- Include subservice organizations
- Document shared responsibilities
- Establish monitoring procedures

**Action**: Address any scope challenges identified.

## Step 6: Document Final Scope (15 minutes)

### Create Scope Statement

Write your final scope statement:

```markdown
# Final Scope Statement

**Organization**: [Company Name]
**Standard**: [ISO 27001/SOC 2]
**Effective Date**: [Date]
**Review Date**: [Annual review date]

**Scope Description**:
[Clear, concise description of what's included]

**Organizational Scope**:
[Which parts of the organization are included]

**System Scope**:
[Which systems and applications are included]

**Geographic Scope**:
[Which locations are included]

**Temporal Scope**:
[Implementation timeline and review schedule]

**Exclusions**:
[What's explicitly excluded and why]

**Assumptions**:
[Key assumptions about the scope]

**Approval**:
[Management approval and signatures]
```

**Action**: Create and get approval for your final scope statement.

### Create Scope Documentation

Prepare supporting documentation:

```markdown
# Scope Documentation Checklist

**Required Documents**:
- [ ] Scope statement
- [ ] System description
- [ ] Organizational chart
- [ ] System inventory
- [ ] Data flow diagrams
- [ ] Stakeholder review notes
- [ ] Management approval

**Supporting Materials**:
- [ ] Network diagrams
- [ ] Application architecture
- [ ] Data classification
- [ ] Risk assessments
- [ ] Compliance requirements
```

**Action**: Prepare all required scope documentation.

## Success Metrics

You've succeeded when you have:

✅ Clear scope statement approved  
✅ System boundaries defined  
✅ Stakeholder alignment achieved  
✅ Documentation complete  
✅ Management approval obtained  

## Common Mistakes to Avoid

**Don't**:
- Define scope too broadly initially
- Exclude critical customer-facing systems
- Ignore third-party dependencies
- Skip stakeholder validation
- Forget to document exclusions

**Do**:
- Start with customer-facing systems
- Include all data processing activities
- Document third-party relationships
- Validate with all stakeholders
- Keep scope manageable

## Next Steps

With scope defined:

1. **Risk Assessment**: Assess risks within your defined scope
2. **Control Selection**: Select controls based on scope and risks
3. **Implementation Planning**: Plan implementation within scope
4. **Audit Preparation**: Prepare scope documentation for audit

## Scope Maintenance

### Regular Review

Review scope annually or when:

- New systems are added
- Business model changes
- Regulatory requirements change
- Customer requirements change

### Scope Changes

Document scope changes:

```markdown
# Scope Change Process

**Change Request**:
- [ ] Document proposed change
- [ ] Assess impact
- [ ] Get stakeholder approval
- [ ] Update documentation
- [ ] Communicate changes
```

---

*This how-to guide follows the Linear Method's task-oriented approach. Each step is actionable and builds toward your goal of defining a clear, defensible compliance scope.* 