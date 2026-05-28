<h1 align="center">🧪 QA Automation Practice</h1>
 
<p align="center">
  <em>One element or feature a day — test cases written manually, then automated with Playwright.</em>
</p>
<p align="center">
  <img src="https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/EventHub-0052CC?style=for-the-badge&logoColor=white" />
  <img src="https://img.shields.io/badge/Manual%20Testing-2D6A4F?style=for-the-badge&logoColor=white" />
</p>
---
 
## 📌 What This Repo Is
 
Daily QA practice built one element or feature at a time.
 
Every day I pick one element or feature on [EventHub — Rahul Shetty Academy](https://eventhub.rahulshettyacademy.com), write all the test cases manually first, then automate them using Playwright with TypeScript. Each day's work is committed and pushed — building both my testing instinct and automation skills simultaneously.
 
---
 
## 🗂️ Repo Structure
 
```
qa-automation-practice/
│
├── elements/                          ← UI element level testing
│   │
│   ├── text-box/
│   │   ├── test-cases.md
│   │   └── text-box.spec.ts
│   │
│   ├── radio-button/
│   │   ├── test-cases.md
│   │   └── radio-button.spec.ts
│   │
│   ├── checkbox/
│   │   ├── test-cases.md
│   │   └── checkbox.spec.ts
│   │
│   ├── dropdown/
│   │   ├── test-cases.md
│   │   └── dropdown.spec.ts
│   │
│   ├── date-picker/
│   │   ├── test-cases.md
│   │   └── date-picker.spec.ts
│   │
│   ├── file-upload/
│   │   ├── test-cases.md
│   │   └── file-upload.spec.ts
│   │
│   ├── alerts/
│   │   ├── test-cases.md
│   │   └── alerts.spec.ts
│   │
│   ├── modal/
│   │   ├── test-cases.md
│   │   └── modal.spec.ts
│   │
│   ├── data-tables/
│   │   ├── test-cases.md
│   │   └── data-tables.spec.ts
│   │
│   ├── drag-and-drop/
│   │   ├── test-cases.md
│   │   └── drag-and-drop.spec.ts
│   │
│   ├── slider/
│   │   ├── test-cases.md
│   │   └── slider.spec.ts
│   │
│   └── tabs/
│       ├── test-cases.md
│       └── tabs.spec.ts
│
│
├── features/                          ← Feature / flow level testing
│   │
│   ├── login/
│   │   ├── test-cases.md
│   │   └── login.spec.ts
│   │
│   ├── register/
│   │   ├── test-cases.md
│   │   └── register.spec.ts
│   │
│   ├── forgot-password/
│   │   ├── test-cases.md
│   │   └── forgot-password.spec.ts
│   │
│   ├── search-events/
│   │   ├── test-cases.md
│   │   └── search-events.spec.ts
│   │
│   ├── book-event/
│   │   ├── test-cases.md
│   │   └── book-event.spec.ts
│   │
│   ├── event-details/
│   │   ├── test-cases.md
│   │   └── event-details.spec.ts
│   │
│   ├── my-bookings/
│   │   ├── test-cases.md
│   │   └── my-bookings.spec.ts
│   │
│   ├── cancel-booking/
│   │   ├── test-cases.md
│   │   └── cancel-booking.spec.ts
│   │
│   ├── profile-update/
│   │   ├── test-cases.md
│   │   └── profile-update.spec.ts
│   │
│   └── logout/
│       ├── test-cases.md
│       └── logout.spec.ts
│
│
├── bug-reports/
│   └── bugs-found.md
│
├── playwright.config.ts
├── tsconfig.json
└── README.md
```
 
---
 
## ⚙️ Setup
 
```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/qa-automation-practice.git
cd qa-automation-practice
 
# Install dependencies
npm init -y
npm install -D @playwright/test typescript
 
# Install browsers
npx playwright install
 
# Run all tests
npx playwright test
 
# Run only elements
npx playwright test elements/
 
# Run only features
npx playwright test features/
 
# Run specific element
npx playwright test elements/text-box/text-box.spec.ts
 
# Run specific feature
npx playwright test features/login/login.spec.ts
```
 
---
 
## 🧪 Test Case Format
 
Each `test-cases.md` follows this format:
 
```
| TC ID  | Test Scenario                | Test Data         | Expected Result   | Status |
|--------|------------------------------|-------------------|-------------------|--------|
| TC-001 | Valid login accepted         | valid credentials | Goes to dashboard | Pass   |
| TC-002 | Empty email shows error      | (blank)           | Required error    | Pass   |
| TC-003 | Wrong password shows error   | wrongpass123      | Invalid error     | Pass   |
```
 
---
 
## 🐛 Bug Reports
 
Any bugs found during testing are logged in `bug-reports/bugs-found.md`:
 
```
Bug ID   : BUG-001
Feature  : Login
Summary  : Login button stays clickable after successful submit
Steps    : 1. Enter valid credentials  2. Click Login  3. Click again immediately
Expected : Button disables after first click
Actual   : Form submits twice
Severity : Medium
```
 
---
 
## 🛠️ Tech Stack
 
| Tool | Purpose |
|------|---------|
| Playwright | Test automation framework |
| TypeScript | Scripting language |
| eventhub.rahulshettyacademy.com | Website under test |
 
---
 
## 🙋 Author
 
**Kikani Hely** 
