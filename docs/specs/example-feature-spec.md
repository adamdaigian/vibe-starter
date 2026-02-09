# Feature Spec: [Feature Name]

> Template for feature specifications. Copy this for new features.

**Author:** [Name]  
**Status:** Draft | In Review | Approved | Implemented  
**Last Updated:** [Date]

---

## Context

### Problem
[What problem does this feature solve? Who experiences this pain?]

### Goal
[What does success look like? How will we know this feature worked?]

### Background
[Any relevant context, prior art, or research. Link to `/research/` docs if applicable.]

---

## Requirements

### Must Have (P0)
- [ ] [Requirement 1]
- [ ] [Requirement 2]

### Should Have (P1)
- [ ] [Requirement 3]
- [ ] [Requirement 4]

### Nice to Have (P2)
- [ ] [Requirement 5]

---

## User Stories

```
As a [user type],
I want to [action],
so that [benefit].
```

### Story 1: [Title]
- **User:** [Who]
- **Action:** [What they do]
- **Outcome:** [What happens]

### Story 2: [Title]
- **User:** [Who]
- **Action:** [What they do]
- **Outcome:** [What happens]

---

## Design

### UI/UX
[Wireframes, mockups, or descriptions of the user interface]

### User Flow
```
1. User navigates to [page]
2. User clicks [element]
3. System displays [response]
4. User completes [action]
```

---

## Technical Design

### Data Model

```typescript
interface FeatureEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  // ...
}
```

### API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/feature` | List all |
| POST | `/api/feature` | Create new |
| GET | `/api/feature/:id` | Get one |
| PATCH | `/api/feature/:id` | Update |
| DELETE | `/api/feature/:id` | Delete |

### State Management
[How will state be managed? Server components, React Query, Zustand, etc.]

---

## Edge Cases

| Scenario | Expected Behavior |
|----------|-------------------|
| [Edge case 1] | [What should happen] |
| [Edge case 2] | [What should happen] |
| [Empty state] | [What to show] |
| [Error state] | [How to handle] |

---

## Out of Scope

What we're explicitly NOT building in this feature:

- ❌ [Thing 1]
- ❌ [Thing 2]

---

## Security Considerations

- [ ] Authentication required?
- [ ] Authorization rules?
- [ ] Input validation?
- [ ] Rate limiting?

---

## Testing Plan

### Unit Tests
- [ ] [Test case 1]
- [ ] [Test case 2]

### Integration Tests
- [ ] [Test case 1]

### Manual QA
- [ ] [Test scenario 1]
- [ ] [Test scenario 2]

---

## Rollout Plan

1. **Phase 1:** [Internal testing]
2. **Phase 2:** [Beta users]
3. **Phase 3:** [General availability]

---

## Open Questions

- [ ] [Question 1]
- [ ] [Question 2]

---

## References

- [Link to related docs]
- [Link to design files]
- [Link to research]
