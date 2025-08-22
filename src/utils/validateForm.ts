import type { TFormErrors } from './types';

const passwordStrengthRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;

export function validateForm(formData: FormData): TFormErrors {
  const errors: TFormErrors = {};

  const name = formData.get('name') as string;
  if (!name) {
    errors.name = 'Name is required';
  } else if (!/^[A-ZА-ЯЁ]/.test(name.trim())) {
    errors.name = 'Name must start with an uppercase letter';
  }

  const ageStr = formData.get('age') as string;
  const age = Number(ageStr);
  if (!ageStr) {
    errors.age = 'Age is required';
  } else if (isNaN(age) || age < 0) {
    errors.age = 'Age must be a non-negative number';
  }

  const email = formData.get('email') as string;
  if (!email) {
    errors.email = 'Email is required';
  }
  // } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  //   errors.email = 'Invalid email address';
  // }

  const password = formData.get('password') as string;
  const confirmPassword = formData.get('confirmPassword') as string;
  if (!password) {
    errors.password = 'Password is required';
  } else if (!passwordStrengthRegex.test(password)) {
    errors.password =
      'Password must have at least 4 characters, including 1 number, 1 uppercase letter, 1 lowercase letter and 1 special character';
  }

  if (password !== confirmPassword) {
    errors.confirmPassword = 'Password must match';
  }

  const gender = formData.get('gender') as string;
  if (!gender) errors.gender = 'Gender is required';

  const terms = formData.get('terms') === 'on';
  if (!terms) errors.terms = 'You must accept Terms & Conditions';

  const country = formData.get('country') as string;
  if (!country) errors.country = 'You must select your country';

  return errors;
}
