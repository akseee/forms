import type { TFormErrors, TUserFormInputs } from './types';

const passwordStrengthRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;

export function validateForm(user: TUserFormInputs): TFormErrors {
  const errors: TFormErrors = {};
  const {
    name,
    age,
    email,
    password,
    gender,
    country,
    confirmPassword,
    terms,
  } = user;

  if (!name) {
    errors.name = 'Name is required';
  } else if (!/^[A-ZА-ЯЁ]/.test(name.trim())) {
    errors.name = 'Name must start with an uppercase letter';
  }

  if (!age) {
    errors.age = 'Age is required';
  } else if (isNaN(age) || age < 0) {
    errors.age = 'Age must be a non-negative number';
  }

  if (!email) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Invalid email address';
  }

  if (!password) {
    errors.password = 'Password is required';
  } else if (!passwordStrengthRegex.test(password)) {
    errors.password =
      'Password must have at least 4 characters, including 1 number, 1 uppercase letter, 1 lowercase letter and 1 special character';
  }

  if (password !== confirmPassword) {
    errors.confirmPassword = 'Password must match';
  }

  if (!gender) errors.gender = 'Gender is required';

  if (!terms) errors.terms = 'You must accept Terms & Conditions';

  if (!country) errors.country = 'You must select your country';

  return errors;
}
