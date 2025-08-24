import * as yup from 'yup';
export const schema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .matches(/^[A-Z][a-zA-Z]*$/, {
      message: 'Name must start with an uppercase letter',
      excludeEmptyString: true,
    }),
  age: yup
    .number()
    .required('Age is required')
    .typeError('Age must be a number')
    .min(0, 'Age must be a non-negative number')
    .max(120, 'Age must be real'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  password: yup
    .string()
    .matches(/[0-9]/, {
      message: 'Password must contain at least one number',
      excludeEmptyString: true,
    })
    .matches(/[A-Z]/, {
      message: 'Password must contain at least one uppercase letter',
      excludeEmptyString: true,
    })
    .matches(/[a-z]/, {
      message: 'Password must contain at least one lowercase letter',
      excludeEmptyString: true,
    })
    .matches(/[^a-zA-Z0-9]/, {
      message: 'Password must contain at least one special character',
      excludeEmptyString: true,
    })
    .required('Password is required'),

  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Password must match')
    .required('Confirm your password'),
  gender: yup.string().required('Gender is required'),
  country: yup.string().required('Country is required'),
  terms: yup
    .boolean()
    .oneOf([true], 'You must accept Terms & Conditions')
    .required(),
  picture: yup
    .mixed<FileList | File>()
    .required('Add profile picture')
    .test('fileType', 'Not a valid image type', (value) => {
      if (!value) return false;

      let file: File | undefined;

      if ('length' in value) {
        if (value.length === 0) return false;
        file = value[0];
      } else {
        file = value;
      }

      const ext = file.name.split('.').pop()?.toLowerCase();
      return ext ? ['png', 'jpg', 'jpeg'].includes(ext) : false;
    })
    .test('fileSize', 'Max size is 2MB', (value) => {
      if (!value) return false;

      let file: File | undefined;

      if ('length' in value) {
        if (value.length === 0) return false;
        file = value[0];
      } else {
        file = value;
      }

      return file.size <= 2 * 1024 * 1024;
    }),
});
