export const VALID = {
  email: 'test@gmail.com',
  password: 'Test@1234',
};

export const VALID_EMAILS = [
  { tc: 'TC-001', scenario: 'Standard valid email', email: 'test@gmail.com' },
  { tc: 'TC-002', scenario: 'Email with numbers', email: 'test123@gmail.com' },
  { tc: 'TC-003', scenario: 'Email with dots', email: 'tes.kikani@gmail.com' },
  { tc: 'TC-004', scenario: 'With different domain', email: 'hely123@yahoo.com' },
  { tc: 'TC-005', scenario: 'With Uppercase email', email: 'HELY123@GMAIL.COM' },
];

export const INVALID_EMAILS = [
  { tc: 'TC-006', scenario: 'With special character', email: 'hely#125@gmail.com' },
  { tc: 'TC-007', scenario: 'Missing @ symbol', email: 'hely25gmail.com' },
  { tc: 'TC-008', scenario: 'Missing domain', email: 'hely25@' },
  { tc: 'TC-009', scenario: 'Missing username', email: '  @gmail.com' },
  { tc: 'TC-010', scenario: 'Missing dot in domain', email: 'hely@gmailcom' },
  { tc: 'TC-011', scenario: 'Space in email', email: 'hely kikani@gmail.com' },
  { tc: 'TC-012', scenario: 'Double @ symbol', email: 'hely.kikani@@gmail.com' },
  { tc: 'TC-013', scenario: 'Empty field', email: 'test@gmailcom' },
  { tc: 'TC-014', scenario: 'Only spaces', email: ' ' },
  { tc: 'TC-015', scenario: 'SQL injection', email: "' OR 1=1 --" },
  { tc: 'TC-016', scenario: 'Very Long email', email: 'a'.repeat(300) + '@gmail.com' },
  { tc: 'TC-017', scenario: 'Already Registerd email', email: 'hely@gmail.com' },
  { tc: 'TC-018', scenario: 'Email with leading space', email: '  hely@gmail.com' },
  { tc: 'TC-019', scenario: 'Email with trailing space', email: 'hely@gmail.com  ' },
  { tc: 'TC-020', scenario: 'Emoji in email', email: 'hello😀@gmail.com' },
  { tc: 'TC-021', scenario: 'Multiple dots in doamin', email: 'hely@gmail..com' },
  { tc: 'TC-022', scenario: 'Dot at start of username', email: '.hely@gmail.com' },
  { tc: 'TC-023', scenario: 'Dot at end of username', email: 'hely.@gmail.com' },
];

