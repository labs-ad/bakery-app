---
description: Rules to execute a task and its sub-tasks
globs:
alwaysApply: false
version: 1.0
encoding: UTF-8
---

# Task Execution Rules

## Overview

Execute a specific task along with its sub-tasks systematically following a TDD development workflow.

**Pre-flight Check:**
EXECUTE: @/.claude/commands/pre-flight.md

## Process Flow

### Step 1: Task Understanding

Read and analyze the given parent task and all its sub-tasks from tasks.md to gain complete understanding of what needs to be built.

**Task Analysis:**
- Parent task description
- All sub-task descriptions  
- Task dependencies
- Expected outcomes

**Instructions:**
- ACTION: Read the specific parent task and all its sub-tasks
- ANALYZE: Full scope of implementation required
- UNDERSTAND: Dependencies and expected deliverables
- NOTE: Test requirements for each sub-task

### Step 2: Technical Specification Review

Search and extract relevant sections from technical-spec.md to understand the technical implementation approach for this task.

**Search Technical Spec:**
FIND sections in technical-spec.md related to:
- Current task functionality
- Implementation approach for this feature
- Integration requirements
- Performance criteria

**Instructions:**
- ACTION: Search technical-spec.md for task-relevant sections
- EXTRACT: Only implementation details for current task
- SKIP: Unrelated technical specifications
- FOCUS: Technical approach for this specific feature

### Step 3: Best Practices Review
*Subagent: context-fetcher*

Use the context-fetcher subagent to retrieve relevant sections from @/.claude/docs/best-practices.md that apply to the current task's technology stack and feature type.

**Search Best Practices:**
FIND sections relevant to:
- Task's technology stack
- Feature type being implemented
- Testing approaches needed
- Code organization patterns

**Instructions:**
- ACTION: Use context-fetcher subagent
- REQUEST: "Find best practices sections relevant to:
  - Task's technology stack: [CURRENT_TECH]
  - Feature type: [CURRENT_FEATURE_TYPE]
  - Testing approaches needed
  - Code organization patterns"
- PROCESS: Returned best practices
- APPLY: Relevant patterns to implementation

### Step 4: Code Style Review
*Subagent: context-fetcher*

Use the context-fetcher subagent to retrieve relevant code style rules from @/.claude/docs/code-style.md for the languages and file types being used in this task.

**Search Code Style:**
FIND style rules for:
- Languages used in this task
- File types being modified
- Component patterns being implemented
- Testing style guidelines

**Instructions:**
- ACTION: Use context-fetcher subagent
- REQUEST: "Find code style rules for:
  - Languages: [LANGUAGES_IN_TASK]
  - File types: [FILE_TYPES_BEING_MODIFIED]
  - Component patterns: [PATTERNS_BEING_IMPLEMENTED]
  - Testing style guidelines"
- PROCESS: Returned style rules
- APPLY: Relevant formatting and patterns

### Step 5: Task and Sub-task Execution

Execute the parent task and all sub-tasks in order using test-driven development (TDD) approach.

**Typical Task Structure:**
- **First subtask:** Write tests for [feature]
- **Middle subtasks:** Implementation steps
- **Final subtask:** Verify all tests pass

**Execution Order:**

**Subtask 1 Tests:**
IF sub-task 1 is "Write tests for [feature]":
- Write all tests for the parent feature
- Include unit tests, integration tests, edge cases
- Run tests to ensure they fail appropriately
- Mark sub-task 1 complete

**Middle Subtasks Implementation:**
FOR each implementation sub-task (2 through n-1):
- Implement the specific functionality
- Make relevant tests pass
- Update any adjacent/related tests if needed
- Refactor while keeping tests green
- Mark sub-task complete

**Final Subtask Verification:**
IF final sub-task is "Verify all tests pass":
- Run entire test suite
- Fix any remaining failures
- Ensure no regressions
- Mark final sub-task complete

**Test Management:**

**New Tests:**
- Written in first sub-task
- Cover all aspects of parent feature
- Include edge cases and error handling

**Test Updates:**
- Made during implementation sub-tasks
- Update expectations for changed behavior
- Maintain backward compatibility

**Instructions:**
- ACTION: Execute sub-tasks in their defined order
- RECOGNIZE: First sub-task typically writes all tests
- IMPLEMENT: Middle sub-tasks build functionality
- VERIFY: Final sub-task ensures all tests pass
- UPDATE: Mark each sub-task complete as finished

### Step 6: Task-Specific Test Verification
*Subagent: test-runner*

Use the test-runner subagent to run and verify only the tests specific to this parent task (not the full test suite) to ensure the feature is working correctly.

**Focused Test Execution:**

**Run Only:**
- All new tests written for this parent task
- All tests updated during this task
- Tests directly related to this feature

**Skip:**
- Full test suite (done later in @/.claude/commands/execute-tasks.md)
- Unrelated test files

**Final Verification:**
IF any test failures:
- Debug and fix the specific issue
- Re-run only the failed tests

ELSE:
- Confirm all task tests passing
- Ready to proceed

**Instructions:**
- ACTION: Use test-runner subagent
- REQUEST: "Run tests for [this parent task's test files]"
- WAIT: For test-runner analysis
- PROCESS: Returned failure information
- VERIFY: 100% pass rate for task-specific tests
- CONFIRM: This feature's tests are complete

### Step 7: Task Status Updates

Update the tasks.md file immediately after completing each task to track progress.

**Update Format:**
- **Completed:** `- [x] Task description`
- **Incomplete:** `- [ ] Task description`
- **Blocked:** `- [ ] Task description` followed by `⚠️ Blocking issue: [DESCRIPTION]`

**Blocking Criteria:**
- **Attempts:** maximum 3 different approaches
- **Action:** document blocking issue
- **Emoji:** ⚠️

**Instructions:**
- ACTION: Update tasks.md after each task completion
- MARK: [x] for completed items immediately
- DOCUMENT: Blocking issues with ⚠️ emoji
- LIMIT: 3 attempts before marking as blocked
