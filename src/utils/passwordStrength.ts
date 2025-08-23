export const getPasswordStrength = (password: string) => {
  let score = 0;

  if (/[0-9]/.test(password)) score += 1;
  if (/[a-z]/.test(password)) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/[^a-zA-Z0-9]/.test(password)) score += 1;
  if (password.length >= 8) score += 1;

  if (score <= 2) return 'Weak';
  if (score === 3 || score === 4) return 'Medium';
  return 'Strong';
};
