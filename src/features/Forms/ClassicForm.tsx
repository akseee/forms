import { useEffect, useRef, useState, type FormEvent } from 'react';
import styles from './Form.module.css';
import type {
  TFormErrors,
  TUserData,
  TUserFormInputs,
} from '../../utils/types';
import { countries } from '../../utils/constants';
import { v4 as uuidv4 } from 'uuid';
import clsx from 'clsx';
import { schema } from '../../utils/schema';
import * as yup from 'yup';
import { fileToBase64 } from '../../utils/fileToBase64';

interface IClassicFormProps {
  handleSubmitData: (data: TUserData) => void;
}

export const ClassicForm = ({ handleSubmitData }: IClassicFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  const [errors, setErrors] = useState<TFormErrors>({});

  useEffect(() => {
    firstInputRef.current?.focus();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);

    const pictureFile = formData.get('picture');
    const values: TUserFormInputs = {
      name: String(formData.get('name') ?? ''),
      age: Number(formData.get('age') ?? ''),
      email: String(formData.get('email') ?? ''),
      password: String(formData.get('password') ?? ''),
      confirmPassword: String(formData.get('confirmPassword') ?? ''),
      gender: String(formData.get('gender') ?? ''),
      terms: formData.get('terms') === 'on',
      country: String(formData.get('country') ?? ''),
      picture: pictureFile instanceof File ? pictureFile : undefined,
    };

    try {
      await schema.validate(values, { abortEarly: false });

      let pictureBase64 = '';

      if (pictureFile instanceof File) {
        pictureBase64 = await fileToBase64(pictureFile);
      }

      const payload: TUserData = {
        ...values,
        picture: pictureBase64,
        id: uuidv4(),
      };

      handleSubmitData(payload);
      form.reset();
      setErrors({});
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const errors: TFormErrors = {};
        console.log(err);
        console.log('failing');
        err.inner.forEach((error) => {
          if (error.path) {
            errors[error.path] = error.message;
          }
        });
        setErrors(errors);
      }
    }
  };

  return (
    <>
      <h2 className={styles.title}>Classic</h2>
      <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <label htmlFor="name">Name:</label>
          <input ref={firstInputRef} type="text" id="name" name="name" />
          <p className={styles.error}>{errors.name}</p>
        </div>

        <div className={styles.field}>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" />
          <p className={styles.error}>{errors.age}</p>
        </div>

        <div className={styles.field}>
          <label htmlFor="picture">Profile picture:</label>
          <input type="file" id="picture" name="picture" />
          <p className={styles.error}>{errors.picture}</p>
        </div>

        <div className={clsx(styles.field, styles.gender)}>
          <div className={styles.options}>
            <label className={styles.option}>
              <input type="radio" name="gender" value="male" /> Male
            </label>
            <label className={styles.option}>
              <input type="radio" name="gender" value="female" /> Female
            </label>
          </div>
          <p className={styles.error}>{errors.gender}</p>
        </div>

        <div className={styles.field}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <p className={styles.error}>{errors.email}</p>
        </div>

        <div className={styles.field}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <p className={styles.error}>{errors.password}</p>
        </div>

        <div className={styles.field}>
          <label htmlFor="confirmPassword">Confirm password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" />

          <p className={styles.error}>{errors.confirmPassword}</p>
        </div>

        <div className={styles.field}>
          <label htmlFor="country">Country:</label>
          <input type="text" id="country" name="country" list="countries" />
          <datalist id="countries">
            {countries.map((country, index) => (
              <option value={country} key={index} />
            ))}
          </datalist>
          <p className={styles.error}>{errors.country}</p>
        </div>

        <div className={clsx(styles.field, styles.terms)}>
          <label htmlFor="terms">
            <input type="checkbox" id="terms" name="terms" />I accept
            <a href="https://www.google.com/" target="_blank" rel="noreferrer">
              the Terms & Conditions
            </a>
          </label>
          <p className={styles.error}>{errors.terms}</p>
        </div>

        <button type="submit" className={styles.button}>
          Send
        </button>
      </form>
    </>
  );
};
