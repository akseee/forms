# Forms Application

## Description

A React app with two forms (uncontrolled and React Hook Form) displayed via a reusable modal using React Portals. Form data is stored in Redux and shown on the main page after submission.

## Features

- Main page with buttons to open two modals.
- Universal modal with:
  - Close on ESC or outside click
  - Focus management
  - Portal rendering
- Forms collect:
  - Name, Age, Email
  - Two passwords
  - Gender, Terms & Conditions
  - Picture upload (PNG/JPEG → base64)
  - Country autocomplete
- Validation with Yup o
  - React Hook Form: live validation, disables submit if invalid
  - Uncontrolled: validate on submit only

  - Testing
