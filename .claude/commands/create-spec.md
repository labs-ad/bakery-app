# Create Spec

Create a detailed spec for a new feature with technical specifications and task breakdown

---

**Command Metadata:**

- Command: create-spec
- Description: Spec Creation Rules for Bakery App
- Usage: Custom command for AI agents to create structured feature specifications
- Version: 1.1
- Author: AI Agent System
- Category: Feature Planning
- Encoding: UTF-8

---

# Spec Creation Command

## Command Overview

Generate detailed feature specifications for bakery app features and functionality.

## Command Usage

```bash
# Invoke this command when planning a new feature
/create-spec
# The AI agent will guide you through the spec creation process
```

### Prerequisites

- Project directory initialized
- Basic feature concept defined
- Access to create documentation files

### Pre-execution Checklist

- [ ] Confirm project directory location
- [ ] Verify write permissions for spec creation
- [ ] Ensure feature scope is defined

```bash
# Execute pre-flight check
EXECUTE: @.claude/commands/pre-flight.md
```

## Command Execution Flow

### Step 1: Spec Initiation

**Required:** Yes
**Subagent:** context-fetcher

Use the context-fetcher subagent to accept and process a specific spec idea from the user.

#### Spec Input

- **Trigger:** User describes specific spec idea
- **Accept:** Any format, length, or detail level
- **Proceed:** To context gathering

---

### Step 2: Context Gathering (Conditional)

**Dependencies:** Step 1 completion
**Subagent:** context-fetcher

Use the context-fetcher subagent to gather project context from available documentation to ensure spec alignment with project requirements.

#### Context Gathering Sources

**Project Documentation:**

- README.md (if exists)
- package.json (for tech stack info)
- Any existing documentation

**Technical Context:**

- Current technology stack
- Existing project structure
- Development patterns

#### Context Analysis

- **Tech Context:** Technical requirements
- **Project Patterns:** Existing development approaches

---

### Step 3: Requirements Clarification

**Dependencies:** Step 2 completion
**Subagent:** context-fetcher

Use the context-fetcher subagent to clarify scope boundaries and technical considerations by asking numbered questions as needed to ensure clear requirements before proceeding.

#### Clarification Areas

**Scope:**

- **In Scope:** What is included
- **Out of Scope:** What is excluded (optional)

**Technical:**

- Functionality specifics
- UI/UX requirements
- Integration points

#### Decision Process

```
IF clarification_needed:
  ASK numbered_questions
  WAIT for_user_response
ELSE:
  PROCEED to_date_determination
```

---

### Step 4: Date Determination

**Dependencies:** Step 3 completion
**Subagent:** date-checker

Use the date-checker subagent to determine the current date in YYYY-MM-DD format for folder naming. The subagent will output today's date which will be used in subsequent steps.

#### Subagent Output

The date-checker subagent will provide the current date in YYYY-MM-DD format at the end of its response. Store this date for use in folder naming in step 5.

---

### Step 5: Spec Folder Creation

**Dependencies:** Step 4 completion
**Subagent:** file-creator

Use the file-creator subagent to create directory: `project/specs/YYYY-MM-DD-spec-name/` using the date from step 4.

Use kebab-case for spec name. Maximum 5 words in name.

#### Folder Naming Convention

- **Format:** YYYY-MM-DD-spec-name
- **Date:** Use stored date from step 4
- **Name Constraints:**
  - Max words: 5
  - Style: kebab-case
  - Descriptive: true

#### Example Names

- `2025-03-15-password-reset-flow`
- `2025-03-16-user-profile-dashboard`
- `2025-03-17-api-rate-limiting`

---

### Step 6: Create spec.md

**Dependencies:** Step 5 completion
**Subagent:** file-creator
**Output:** `project/specs/YYYY-MM-DD-spec-name/spec.md`

Use the file-creator subagent to create the main specification document using this template:

#### File Template Structure

```markdown
# Spec Requirements Document

> Spec: [SPEC_NAME]
> Created: [CURRENT_DATE]

## Required Sections:

- Overview
- User Stories
- Spec Scope
- Out of Scope
- Expected Deliverable
```

#### Section Templates

**Overview Section:**

```markdown
## Overview

[1-2_SENTENCE_GOAL_AND_OBJECTIVE]
```

- **Length:** 1-2 sentences
- **Content:** Goal and objective
- **Example:** Implement a secure password reset functionality that allows users to regain account access through email verification. This feature will reduce support ticket volume and improve user experience by providing self-service account recovery.

**User Stories Section:**

```markdown
## User Stories

### [STORY_TITLE]

As a [USER_TYPE], I want to [ACTION], so that [BENEFIT].

[DETAILED_WORKFLOW_DESCRIPTION]
```

- **Count:** 1-3 stories
- **Include:** Workflow and problem solved
- **Format:** Title + story + details

**Spec Scope Section:**

```markdown
## Spec Scope

1. **[FEATURE_NAME]** - [ONE_SENTENCE_DESCRIPTION]
2. **[FEATURE_NAME]** - [ONE_SENTENCE_DESCRIPTION]
```

- **Count:** 1-5 features
- **Format:** Numbered list
- **Description:** One sentence each

**Out of Scope Section:**

```markdown
## Out of Scope

- [EXCLUDED_FUNCTIONALITY_1]
- [EXCLUDED_FUNCTIONALITY_2]
```

- **Purpose:** Explicitly exclude functionalities

**Expected Deliverable Section:**

```markdown
## Expected Deliverable

1. [TESTABLE_OUTCOME_1]
2. [TESTABLE_OUTCOME_2]
```

- **Count:** 1-3 expectations
- **Focus:** Browser-testable outcomes

---

### Step 7: Create spec-lite.md

**Dependencies:** Step 6 completion
**Subagent:** file-creator
**Output:** `project/specs/YYYY-MM-DD-spec-name/spec-lite.md`

Use the file-creator subagent to create a condensed spec for efficient AI context usage.

#### File Template

```markdown
# Spec Summary (Lite)

[1-3_SENTENCES_SUMMARIZING_SPEC_GOAL_AND_OBJECTIVE]
```

#### Content Structure

**Spec Summary:**

- **Source:** Step 6 spec.md overview section
- **Length:** 1-3 sentences
- **Content:** Core goal and objective of the feature

#### Example Output

```markdown
# Spec Summary (Lite)

Implement secure password reset via email verification to reduce support tickets and enable self-service account recovery. Users can request a reset link, receive a time-limited token via email, and set a new password following security best practices.
```

---

### Step 8: Create Technical Specification

**Dependencies:** Step 7 completion
**Subagent:** file-creator
**Output:** `sub-specs/technical-spec.md`

Use the file-creator subagent to create comprehensive technical documentation.

#### File Template

```markdown
# Technical Specification

This is the technical specification for the spec detailed in @project/specs/YYYY-MM-DD-spec-name/spec.md

## Technical Requirements

- [SPECIFIC_TECHNICAL_REQUIREMENT]
- [SPECIFIC_TECHNICAL_REQUIREMENT]

## External Dependencies (Conditional)

[ONLY_IF_NEW_DEPENDENCIES_NEEDED]

- **[LIBRARY_NAME]** - [PURPOSE]
- **Justification:** [REASON_FOR_INCLUSION]
```

#### Spec Sections

**Technical Requirements:**

- Functionality details
- UI/UX specifications
- Integration requirements
- Performance criteria

**External Dependencies (Conditional):**

- Only include if new dependencies needed
- New libraries/packages
- Justification for each
- Version requirements

#### Conditional Logic

```
IF spec_requires_new_external_dependencies:
  INCLUDE "External Dependencies" section
ELSE:
  OMIT section entirely
```

---

### Step 9: Create Database Schema (Conditional)

**Dependencies:** Step 8 completion
**Subagent:** file-creator
**Output:** `sub-specs/database-schema.md`

Use the file-creator subagent to create database schema documentation ONLY IF database changes needed for this task.

#### Decision Tree

```
IF spec_requires_database_changes:
  CREATE sub-specs/database-schema.md
ELSE:
  SKIP this_step
```

#### File Template

````markdown
# Database Schema

This is the database schema implementation for the spec detailed in @project/specs/YYYY-MM-DD-spec-name/spec.md

## Schema Changes

### New Tables

- [TABLE_NAME]: [PURPOSE_AND_STRUCTURE]

### New Columns

- [TABLE.COLUMN]: [DATA_TYPE_AND_PURPOSE]

### Modifications

- [EXISTING_CHANGE]: [RATIONALE]

## Implementation Details

### SQL/Migration Syntax

```sql
-- Exact SQL or migration syntax
-- Indexes and constraints
-- Foreign key relationships
```
````

### Rationale

- Reason for each change
- Performance considerations
- Data integrity rules

```

#### Schema Sections
**Changes:**
- New tables
- New columns
- Modifications
- Migrations

**Specifications:**
- Exact SQL or migration syntax
- Indexes and constraints
- Foreign key relationships

**Rationale:**
- Reason for each change
- Performance considerations
- Data integrity rules

---

### Step 10: Create API Specification (Conditional)
**Dependencies:** Step 9 completion
**Subagent:** file-creator
**Output:** `sub-specs/api-spec.md`

Use the file-creator subagent to create API specification ONLY IF API changes needed.

#### Decision Tree
```

IF spec_requires_api_changes:
CREATE sub-specs/api-spec.md
ELSE:
SKIP this_step

````

#### File Template
```markdown
# API Specification

This is the API specification for the spec detailed in @project/specs/YYYY-MM-DD-spec-name/spec.md

## Endpoints

### [HTTP_METHOD] [ENDPOINT_PATH]

**Purpose:** [DESCRIPTION]
**Parameters:** [LIST]
**Response:** [FORMAT]
**Errors:** [POSSIBLE_ERRORS]

## Controllers

### [CONTROLLER_NAME]
- **Action Names:** [LIST_OF_ACTIONS]
- **Business Logic:** [CORE_FUNCTIONALITY]
- **Error Handling:** [ERROR_STRATEGIES]
````

#### API Sections

**Routes:**

- HTTP method
- Endpoint path
- Parameters
- Response format

**Controllers:**

- Action names
- Business logic
- Error handling

**Purpose:**

- Endpoint rationale
- Integration with features

---

### Step 11: User Review

**Dependencies:** Steps 1-10 completion

Request user review of spec.md and all sub-specs files, waiting for approval or revision requests before proceeding to task creation.

#### Review Request Format

```
I've created the spec documentation:

- Spec Requirements: @project/specs/YYYY-MM-DD-spec-name/spec.md
- Spec Summary: @project/specs/YYYY-MM-DD-spec-name/spec-lite.md
- Technical Spec: @project/specs/YYYY-MM-DD-spec-name/sub-specs/technical-spec.md
[LIST_OTHER_CREATED_SPECS]

Please review and let me know if any changes are needed before I create the task breakdown.
```

---

### Step 12: Create tasks.md

**Dependencies:** User approval from Step 11
**Subagent:** file-creator
**Output:** `tasks.md`

Use the file-creator subagent to await user approval from step 11 and then create the task breakdown file.

#### File Template

```markdown
# Spec Tasks

## Tasks

- [ ] 1. [MAJOR_TASK_DESCRIPTION]
  - [ ] 1.1 Write tests for [COMPONENT]
  - [ ] 1.2 [IMPLEMENTATION_STEP]
  - [ ] 1.3 [IMPLEMENTATION_STEP]
  - [ ] 1.4 Verify all tests pass

- [ ] 2. [MAJOR_TASK_DESCRIPTION]
  - [ ] 2.1 Write tests for [COMPONENT]
  - [ ] 2.2 [IMPLEMENTATION_STEP]
```

#### Task Structure

**Major Tasks:**

- Count: 1-5
- Format: Numbered checklist
- Grouping: By feature or component

**Subtasks:**

- Count: Up to 8 per major task
- Format: Decimal notation (1.1, 1.2)
- First subtask: Typically write tests
- Last subtask: Verify all tests pass

#### Ordering Principles

- Consider technical dependencies
- Follow TDD approach
- Group related functionality
- Build incrementally

---

### Step 13: Decision Documentation (Conditional)

**Dependencies:** Step 12 completion

Evaluate if the spec requires any significant architectural or technical decisions to be documented.

#### Decision Evaluation Criteria

- Introduces new technology dependencies
- Changes existing architecture patterns
- Impacts project structure significantly
- Requires new development approaches

#### Decision Tree

```
IF spec_requires_significant_decisions:
  ASK user: "This spec introduces significant technical decisions. Should I document these?"
  IF user_approves:
    CREATE project/specs/YYYY-MM-DD-spec-name/decisions.md
  ELSE:
    SKIP decision documentation
    PROCEED to step 14
ELSE:
  SKIP this entire step
  PROCEED to step 14
```

#### Decision Template

```markdown
## [CURRENT_DATE]: [DECISION_TITLE]

**Category:** [technical/architectural/dependency]
**Related Spec:** @project/specs/YYYY-MM-DD-spec-name/

### Decision

[DECISION_SUMMARY]

### Context

[WHY_THIS_DECISION_WAS_NEEDED]

### Considerations

[TECHNICAL_CONSIDERATIONS_AND_ALTERNATIVES]
```

---

### Step 14: Execution Readiness Check

**Dependencies:** Steps 1-13 completion

Evaluate readiness to begin implementation after completing all previous steps, presenting the first task summary and requesting user confirmation to proceed.

#### Readiness Summary

Present to user:

- Spec name and description
- First task summary from tasks.md
- Estimated complexity/scope
- Key deliverables for task 1

#### Execution Prompt

```
The spec planning is complete. The first task is:

**Task 1:** [FIRST_TASK_TITLE]
[BRIEF_DESCRIPTION_OF_TASK_1_AND_SUBTASKS]

Would you like me to proceed with implementing Task 1? I will focus only on this first task and its subtasks unless you specify otherwise.

Type 'yes' to proceed with Task 1, or let me know if you'd like to review or modify the plan first.
```

#### Execution Flow

```
IF user_confirms_yes:
  REFERENCE: @.claude/commands/execute-tasks.md
  FOCUS: Only Task 1 and its subtasks
  CONSTRAINT: Do not proceed to additional tasks without explicit user request
ELSE:
  WAIT: For user clarification or modifications
```

---

## Execution Standards

### Standards to Follow

- Project coding conventions
- Next.js and TypeScript best practices
- Existing project patterns

### Standards to Maintain

- Consistency with bakery app functionality
- Technical coherence
- Performance considerations

### Standards to Create

- Comprehensive documentation
- Clear implementation path
- Testable outcomes

### Final Checklist

- [ ] Accurate date determined via file system
- [ ] Spec folder created with correct date prefix
- [ ] spec.md contains all required sections
- [ ] All applicable sub-specs created
- [ ] User approved documentation
- [ ] tasks.md created with TDD approach
- [ ] Cross-references added to spec.md
- [ ] Strategic decisions evaluated

---

## Command Implementation Notes

### For AI Agents Using This Command

**Execution Context:**

- This command should be run when a user requests feature specification or planning
- Ensure you have file creation permissions in the target directory
- Be prepared to ask clarifying questions if user inputs are incomplete

**Key Behaviors:**

- Always validate user inputs before proceeding to file generation
- Use the exact file structure specified (`project/specs/` directory)
- Maintain consistency between all generated documents
- Provide clear feedback about what files were created and where

**Error Handling:**

- If directory creation fails, inform user and request alternative location
- If user provides incomplete information, use the specified templates to request missing details
- Always backup existing files before overwriting

**Quality Assurance:**

- Cross-reference information between documents to ensure consistency
- Verify that all generated content is relevant to the user's specific project
- Ensure technical choices are compatible and modern
- Review generated tasks for realistic implementation order

### Integration with Other Commands

This command works well with:

- Feature planning commands
- Development task execution
- Documentation generation tools
- Code review and testing workflows
