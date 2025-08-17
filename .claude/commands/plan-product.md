# Plan Product

A comprehensive AI agent command for planning new software projects with automated documentation generation.

---
**Command Metadata:**
- Command: plan-product
- Description: Automated product planning and documentation generator
- Usage: Custom command for AI agents to create structured project documentation
- Version: 4.1
- Author: AI Agent System
- Category: Project Planning
- Encoding: UTF-8
---

# Product Planning Command

## Command Overview

This command generates comprehensive product documentation for new software projects, creating a complete planning foundation that includes:

- **Mission Document:** Product vision, target users, and key features
- **Technical Stack:** Complete technology specifications and architecture decisions
- **Development Roadmap:** Phased implementation plan with effort estimates
- **Lite Mission:** Condensed version optimized for AI context consumption

## Command Usage

```bash
# Invoke this command when starting a new project
/plan-product
# The AI agent will guide you through the planning process
```

### Prerequisites
- Project directory initialized
- Basic project concept defined
- Access to create documentation files

### Pre-execution Checklist
- [ ] Confirm project directory location
- [ ] Verify write permissions for documentation creation
- [ ] Ensure project scope is defined

## Command Execution Flow

### Step 1: Gather Project Requirements
- **Required:** Yes

Use the context-fetcher subagent, collect comprehensive project requirements from the user with validation to ensure all critical information is captured before proceeding.

#### Required Information
1. **Project Name** (required)
2. **Main Idea/Concept** (required)
3. **Key Features** (minimum 3, required)
4. **Target Users** (minimum 1 persona, required)
5. **Tech Stack Preferences** (optional, fallback available)
6. **Project Status** (new vs existing project)

#### Data Sources Priority
- **Primary:** Direct user input via interactive prompts
- **Secondary Fallback:**
  1. Global `.claude/CLAUDE.md` configuration
  2. Project-specific tech preferences
  3. Standard technology defaults

#### Validation & Error Handling
**Missing Information Prompt:**
```
🚨 Missing Required Information

To generate your project documentation, please provide:

1. Project Name: [REQUIRED]
2. Main Product Idea: [REQUIRED - 1-2 sentences]
3. Key Features: [REQUIRED - minimum 3]
4. Target Users: [REQUIRED - at least 1 user persona]
5. Tech Stack Preferences: [OPTIONAL - will use defaults if not provided]
6. Project Status: [new/existing project in current directory]

Please provide the missing information above to continue.
```

---

### Step 2: Initialize Documentation Structure
**Dependencies:** Step 1 completion

Using the file-creator subagent, create the project documentation directory structure with proper validation and safety checks.

#### Target Directory Structure
```
<project-root>/
└── docs/
      ├── mission.md          # Complete product vision and strategy
      ├── mission-lite.md     # AI-optimized condensed mission
      ├── tech-stack.md       # Technology decisions and architecture
      └── roadmap.md          # Phased development plan
```

#### Safety Validations
- ✅ Check write permissions to target directory
- ✅ Backup existing files if they exist
- ✅ Create directory structure if missing
- ✅ Verify no conflicts with existing documentation

---

### Step 3: Generate Mission Document
**Output:** `@docs/product/mission.md`
**Dependencies:** Steps 1-2 completion

Using the file-creator subagent, generate comprehensive mission documentation using collected requirements and structured templates.

#### Document Structure
```markdown
# [PROJECT_NAME] - Product Mission

## Executive Summary
[Auto-generated from user inputs]

## Required Sections:
1. **Elevator Pitch** - Core value proposition
2. **Target Users** - User personas and segments
3. **Problem Analysis** - Market problems being solved
4. **Competitive Differentiators** - Unique advantages
5. **Core Features** - Key functionality breakdown
6. **Success Metrics** - Measurable goals
```

#### Section Templates

**Elevator Pitch Template:**
```markdown
## Elevator Pitch

[PROJECT_NAME] is a [PRODUCT_TYPE] that helps [TARGET_USERS] [SOLVE_PROBLEM] by providing [KEY_VALUE_PROPOSITION].

*Example: "TaskFlow is a project management platform that helps remote development teams coordinate work efficiently by providing real-time collaboration and automated workflow tracking."*
```

**Generation Rules:**
- Length: 1-2 sentences maximum
- Style: Clear, compelling elevator pitch
- Focus: Core value proposition

**Target Users Template:**
```markdown
## Target Users

### Primary User Segments
- **[SEGMENT_NAME]:** [DETAILED_DESCRIPTION]
- **[SEGMENT_NAME]:** [DETAILED_DESCRIPTION]

### User Personas

#### [PERSONA_NAME] ([AGE_RANGE])
- **Role:** [JOB_TITLE/FUNCTION]
- **Context:** [WORK_ENVIRONMENT_AND_SITUATION]
- **Pain Points:** 
  - [SPECIFIC_PROBLEM_1]
  - [SPECIFIC_PROBLEM_2]
- **Goals & Motivations:**
  - [PRIMARY_GOAL]
  - [SECONDARY_GOAL]
- **Tech Comfort Level:** [BEGINNER/INTERMEDIATE/ADVANCED]
```

**Persona Requirements:**
- Minimum 1 detailed persona required
- Include specific job context and pain points
- Focus on how the product solves their problems

**Problem Analysis Template:**
```markdown
## Problem Analysis

### [PROBLEM_CATEGORY]
**Problem:** [CLEAR_PROBLEM_DESCRIPTION]
**Impact:** [QUANTIFIABLE_IMPACT_WITH_METRICS]
**Current Solutions:** [EXISTING_ALTERNATIVES_AND_LIMITATIONS]
**Our Approach:** [HOW_THIS_PROJECT_SOLVES_IT_DIFFERENTLY]

### Market Opportunity
- **Market Size:** [ESTIMATED_ADDRESSABLE_MARKET]
- **Growth Trend:** [MARKET_DIRECTION_AND_DRIVERS]
- **Timing:** [WHY_NOW_IS_THE_RIGHT_TIME]
```

**Problem Analysis Requirements:**
- 2-4 core problems maximum
- Include quantifiable impact where possible
- Connect problems directly to user personas
- Explain why existing solutions are insufficient

**Competitive Differentiators Template:**
```markdown
## Competitive Differentiators

### [DIFFERENTIATOR_CATEGORY]
**Competitor/Alternative:** [EXISTING_SOLUTION]
**Our Advantage:** [SPECIFIC_UNIQUE_CAPABILITY]
**User Benefit:** [MEASURABLE_IMPROVEMENT_FOR_USERS]
**Evidence:** [SUPPORTING_DATA_OR_REASONING]

### Unique Value Propositions
1. **[UVP_1]:** [EXPLANATION_OF_UNIQUENESS]
2. **[UVP_2]:** [EXPLANATION_OF_UNIQUENESS]
3. **[UVP_3]:** [EXPLANATION_OF_UNIQUENESS]
```

**Differentiator Requirements:**
- 2-3 key differentiators maximum
- Must be specific and measurable
- Include evidence or logical reasoning
- Focus on sustainable competitive advantages

**Core Features Template:**
```markdown
## Core Features

### MVP Features (Phase 1)
- **[FEATURE_NAME]:** [USER_BENEFIT_AND_FUNCTIONALITY]
- **[FEATURE_NAME]:** [USER_BENEFIT_AND_FUNCTIONALITY]
- **[FEATURE_NAME]:** [USER_BENEFIT_AND_FUNCTIONALITY]

### Enhanced Features (Phase 2+)
- **[FEATURE_NAME]:** [USER_BENEFIT_AND_FUNCTIONALITY]
- **[FEATURE_NAME]:** [USER_BENEFIT_AND_FUNCTIONALITY]

### Integration Capabilities
- **[INTEGRATION_NAME]:** [PURPOSE_AND_BENEFIT]
- **[INTEGRATION_NAME]:** [PURPOSE_AND_BENEFIT]

### Success Metrics
- **User Engagement:** [SPECIFIC_METRICS]
- **Performance:** [TECHNICAL_BENCHMARKS]
- **Business Impact:** [REVENUE_OR_EFFICIENCY_METRICS]
```

**Feature Documentation Standards:**
- 6-10 total features across all categories
- Group by implementation phase or category
- Focus on user benefits, not just functionality
- Include measurable success criteria

---

### Step 4: Generate Technical Stack Documentation
**Output:** `@docs/product/tech-stack.md`
**Dependencies:** User tech preferences from Step 1

Using the file-creator subagent, generate comprehensive technical architecture documentation based on project requirements and modern best practices.

#### Technical Stack Categories

**Core Technology Stack:**
```markdown
# [PROJECT_NAME] - Technical Architecture

## Backend Architecture
- **Application Framework:** [FRAMEWORK + VERSION]
- **Runtime Environment:** [NODE.JS/PYTHON/ETC + VERSION]
- **Database System:** [PRIMARY_DATABASE + VERSION]
- **Caching Layer:** [REDIS/MEMCACHED/ETC]
- **API Architecture:** [REST/GRAPHQL/GRPC]

## Frontend Architecture
- **JavaScript Framework:** [REACT/VUE/ANGULAR + VERSION]
- **Build Tool:** [VITE/WEBPACK/ROLLUP]
- **Package Manager:** [NPM/YARN/PNPM]
- **CSS Framework:** [TAILWIND/BOOTSTRAP/ETC + VERSION]
- **UI Component Library:** [SPECIFIC_LIBRARY]
- **State Management:** [REDUX/ZUSTAND/PINIA/ETC]

## Development Tools
- **Code Repository:** [GITHUB/GITLAB_URL]
- **Package Registry:** [NPM/PRIVATE_REGISTRY]
- **Testing Framework:** [JEST/VITEST/CYPRESS]
- **Linting:** [ESLINT + PRETTIER CONFIGURATION]
- **Type Checking:** [TYPESCRIPT/JSDOC]

## Infrastructure & Deployment
- **Application Hosting:** [VERCEL/NETLIFY/AWS/ETC]
- **Database Hosting:** [PROVIDER_SPECIFIC]
- **Asset/CDN Hosting:** [CLOUDINARY/S3/ETC]
- **CI/CD Pipeline:** [GITHUB_ACTIONS/GITLAB_CI]
- **Monitoring:** [SENTRY/DATADOG/NEW_RELIC]

## Security & Compliance
- **Authentication:** [AUTH0/FIREBASE_AUTH/CUSTOM]
- **Authorization:** [RBAC/ABAC_STRATEGY]
- **Data Protection:** [ENCRYPTION_STANDARDS]
- **Compliance Requirements:** [GDPR/HIPAA/SOC2]
```

#### Technology Selection Logic

**Priority Order for Technology Decisions:**
1. **User Specified:** Use exact technologies specified by user
2. **Project Defaults:** Check `.claude/CLAUDE.md` for project preferences
3. **Best Practices:** Apply current industry standards and best practices
4. **Compatibility:** Ensure all technologies work well together

**Automatic Defaults (when not specified):**
- **Frontend:** React + TypeScript + Vite + Tailwind CSS
- **Backend:** Node.js + Express + PostgreSQL
- **Hosting:** Vercel (frontend) + Railway (backend)
- **Authentication:** Auth0 or Firebase Auth
- **Monitoring:** Basic error tracking with Sentry

#### Technology Questionnaire (for missing preferences)
```
🔧 Technical Stack Configuration

Please specify your technology preferences (or type 'default' to use recommended options):

**Backend Preferences:**
1. Application Framework: [Express.js/FastAPI/Rails/Spring/default]
2. Database: [PostgreSQL/MongoDB/MySQL/SQLite/default]
3. Authentication: [Auth0/Firebase/Custom/default]

**Frontend Preferences:**
4. Framework: [React/Vue/Angular/Svelte/default]
5. CSS Framework: [Tailwind/Bootstrap/Styled-components/default]
6. UI Library: [Material-UI/Chakra/Ant Design/Custom/default]

**Infrastructure Preferences:**
7. Hosting Platform: [Vercel/Netlify/AWS/Railway/default]
8. Database Hosting: [Railway/PlanetScale/Supabase/AWS RDS/default]
9. CI/CD: [GitHub Actions/GitLab CI/default]

Type 'default' for any category to use recommended modern stack.
```

---

### Step 5: Generate AI-Optimized Mission Summary
**Output:** `@docs/product/mission-lite.md`
**Dependencies:** Completed mission.md from Step 3

Using the file-creator subagent, create a condensed, AI-optimized version of the mission document for efficient context usage in future AI interactions.

#### AI-Optimized Structure
```markdown
# [PROJECT_NAME] - Mission (AI Context)

## Quick Summary
[SINGLE_SENTENCE_ELEVATOR_PITCH]

## Core Value
[2-3_SENTENCES_COVERING_VALUE_PROP_USERS_AND_PRIMARY_DIFFERENTIATOR]

## Key Context for AI
- **Primary Users:** [MAIN_USER_PERSONA]
- **Core Problem:** [MAIN_PROBLEM_BEING_SOLVED]
- **Unique Advantage:** [PRIMARY_DIFFERENTIATOR]
- **Success Metric:** [KEY_MEASURABLE_GOAL]
```

**Optimization Rules:**
- Maximum 150 words total
- Focus only on essential information
- Optimized for AI context windows
- No marketing language - clear, factual content

#### Generation Process
1. **Extract Core Elements** from full mission document
2. **Compress Content** while preserving essential meaning
3. **Structure for AI** with clear, parseable sections
4. **Validate Completeness** - ensure all key points covered

#### Example Output
```markdown
# TaskFlow - Mission (AI Context)

## Quick Summary
TaskFlow is a project management platform that helps remote development teams coordinate work efficiently through real-time collaboration and automated workflow tracking.

## Core Value
Serves distributed software teams needing seamless task coordination across time zones. Automatically syncs with development workflows and provides intelligent task prioritization based on team capacity and dependencies. Primary advantage over traditional PM tools is deep integration with developer workflows.

## Key Context for AI
- **Primary Users:** Remote software development teams
- **Core Problem:** Inefficient coordination across time zones
- **Unique Advantage:** Automated dev workflow integration
- **Success Metric:** 50% reduction in coordination overhead
```

---

### Step 6: Generate Development Roadmap
**Output:** `@docs/product/roadmap.md`
**Dependencies:** Feature analysis from mission.md and tech-stack.md

Using the file-creator subagent, create a comprehensive, phased development plan.

#### Roadmap Structure
```markdown
# [PROJECT_NAME] - Development Roadmap

## Timeline Overview

## Phase [NUMBER]: [PHASE_NAME]
- **Goal:** [CLEAR_PHASE_OBJECTIVE]
- **Success Criteria:** [MEASURABLE_COMPLETION_CRITERIA]

### Core Deliverables
- [ ] **[FEATURE_NAME]** - [USER_STORY_FORMAT]
  - **Acceptance Criteria:** [SPECIFIC_REQUIREMENTS]
  - **Technical Notes:** [IMPLEMENTATION_CONSIDERATIONS]

### Dependencies & Blockers
- **External Dependencies:** [THIRD_PARTY_INTEGRATIONS]
- **Technical Blockers:** [POTENTIAL_CHALLENGES]
- **Resource Requirements:** [TEAM_OR_INFRASTRUCTURE_NEEDS]

### Risk Assessment
- **High Risk:** [ITEMS_WITH_UNCERTAINTY]
- **Medium Risk:** [ITEMS_WITH_SOME_RISK]
- **Mitigation Strategies:** [BACKUP_PLANS]
```

#### Phase Planning Guidelines

**Phase 1 - MVP Foundation**
- Core user authentication and basic functionality
- Essential features that prove the core value proposition
- Basic UI/UX that allows users to complete primary tasks
- Minimal viable backend architecture

**Phase 2 - Differentiation**
- Key features that set the product apart from competitors
- Enhanced user experience and interface polish
- Core integrations and API connections
- Basic analytics and monitoring

**Phase 3 - Scale & Performance**
- Performance optimization and scalability improvements
- Advanced features based on user feedback
- Enhanced security and compliance features
- Comprehensive testing and quality assurance

**Phase 4 - Growth Features**
- Advanced analytics and reporting
- Enterprise-level features and integrations
- Advanced customization and configuration options
- Mobile applications or PWA capabilities

---

## Command Completion & Validation

### Success Criteria Checklist
- [ ] All 4 documentation files created in `docs/product`
- [ ] User requirements captured and validated
- [ ] Technology stack fully specified (no missing items)
- [ ] Mission document includes all required sections
- [ ] Roadmap has clear phases and deliverables
- [ ] All files are properly formatted and readable
- [ ] Documentation is ready for development team usage

### Command Execution Sequence
1. **Input Collection** - Gather all required project information
2. **Validation** - Ensure all critical data is complete
3. **Structure Creation** - Initialize `docs/product/` directory
4. **Document Generation** - Create all 4 documentation files
5. **Cross-Reference Validation** - Ensure consistency across documents
6. **Final Review** - Verify completeness and quality
7. **Completion Confirmation** - Provide summary of generated documentation

### Post-Generation Actions
After successful completion, the AI agent should:
- Provide a summary of all created files
- Highlight any assumptions made during generation
- Suggest next steps for the development team
- Offer to clarify or expand any sections if needed

### Integration with Development Workflow
The generated documentation integrates with:
- **`.claude/CLAUDE.md`** - Project-specific AI instructions
- **Version Control** - All docs should be committed to repository
- **Team Onboarding** - New developers can quickly understand project scope
- **Future AI Sessions** - Mission-lite.md optimizes AI context for ongoing development

---

## Command Implementation Notes

### For AI Agents Using This Command

**Execution Context:**
- This command should be run when a user requests project planning or documentation
- Ensure you have file creation permissions in the target directory
- Be prepared to ask clarifying questions if user inputs are incomplete

**Key Behaviors:**
- Always validate user inputs before proceeding to file generation
- Use the exact file structure specified (`docs/` directory)
- Maintain consistency between all generated documents
- Provide clear feedback about what files were created and where

**Error Handling:**
- If directory creation fails, inform user and request alternative location
- If user provides incomplete information, use the specified templates to request missing details
- If tech stack preferences are not provided, use the recommended defaults
- Always backup existing files before overwriting

**Quality Assurance:**
- Cross-reference information between documents to ensure consistency
- Verify that all generated content is relevant to the user's specific project
- Ensure technical choices are compatible and modern
- Review generated roadmap for realistic timelines

### Integration with Other Commands
This command works well with:
- Project initialization commands
- Documentation generation tools
- Development setup automation
- CI/CD pipeline configuration

