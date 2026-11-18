# MindBridge Education – Jira Cloud Bug Triage & Risk Analysis

## 📌 Project Overview
This repository documents a structured **Defect Triage** exercise conducted in **Jira Cloud** for the **MindBridge Education** platform. The goal was to separate **Technical Severity** (how badly it breaks the software) from **Business Priority** (how soon the business must fix it) and communicate clear, non-jargon recommendations to Product Owners.

## 🛠️ Tools & Methodology
* **Defect Management:** Jira Cloud (CSV Issue Import, Custom Severity Labels, Priority Workflows)
* **QA Concepts:** Severity vs. Priority Matrix, Risk-Based Testing, Stakeholder Communication

## 📊 Triage Summary Matrix

| Ticket ID | Bug Summary | Severity Label | Priority Field | Matrix Quadrant |
| :--- | :--- | :--- | :--- | :--- |
| **MB-201** | Homepage course title typo | `severity-low` | **High** | Low Severity / High Priority |
| **MB-202** | Checkout "Place Order" crash | `severity-critical` | **High** | High Severity / High Priority |
| **MB-203** | Admin report crash on IE 10 | `severity-high` | **Low** | High Severity / Low Priority |
| **MB-204** | Settings button misalignment | `severity-low` | **Low** | Low Severity / Low Priority |
| **MB-205** | Catalog search filter inaccurate | `severity-medium` | **Medium** | Medium Severity / Medium Priority |

## 📝 Triage Justifications (Product Owner Ready)

* **MB-201 (Low Severity / High Priority):** Cosmetic typo only; all links and course enrollment functions work properly. However, it appears prominently in the homepage hero banner seen by every visitor, requiring a quick fix to protect brand credibility.
* **MB-202 (High Severity / High Priority):** Complete workflow failure returning an HTTP 500 error across all browsers with no workaround. Every user is blocked from paying or enrolling, halting revenue immediately.
* **MB-203 (High Severity / Low Priority):** The reporting feature freezes and crashes when filtering by 'Last 3 Years', but it is isolated to internal admin users on Internet Explorer 10 (an officially deprecated browser), while all supported browsers work properly.
* **MB-204 (Low Severity / Low Priority):** Minor 2–3 pixel visual misalignment between Save and Cancel buttons on a low-traffic settings page; functionality and user experience remain intact.
* **MB-205 (Medium Severity / Medium Priority):** The 'Level: Advanced' filter includes Beginner courses, but a valid workaround exists since Advanced courses still appear and users can enroll. Suitable for a planned release.
