import { useEffect, useRef, useState, type FormEvent } from 'react';
import styles from './Form.module.css';
import type { TFormErrors, TUserData } from '../../utils/types';
import { countries } from '../../utils/constants';
import { validateForm } from '../../utils/validateForm';
import { v4 as uuidv4 } from 'uuid';

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
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const payload: TUserData = {
        name: String(formData.get('name') ?? ''),
        age: Number(formData.get('age') ?? ''),
        email: String(formData.get('email') ?? ''),
        password: String(formData.get('password') ?? ''),
        gender: String(formData.get('gender') ?? ''),
        terms: formData.get('terms') === 'on',
        country: String(formData.get('country') ?? ''),
        id: uuidv4(),
      };

      handleSubmitData(payload);
    }
  };

  return (
    <>
      <h2 className={styles.title}>Classic</h2>
      <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
        <div>
          <label htmlFor="name">Name:</label>
          <input ref={firstInputRef} type="text" id="name" name="name" />
          <p className={styles.error}>{errors.name}</p>
        </div>

        <div>
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" name="age" />
          <p className={styles.error}>{errors.age}</p>
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
          <p className={styles.error}>{errors.email}</p>
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
          <p className={styles.error}>{errors.password}</p>
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm password:</label>
          <input type="password" id="confirmPassword" name="confirmPassword" />

          <p className={styles.error}>{errors.confirmPassword}</p>
        </div>

        <div>
          <label>Gender:</label>
          <label>
            <input type="radio" name="gender" value="male" /> Male
          </label>
          <label>
            <input type="radio" name="gender" value="female" /> Female
          </label>
          <p className={styles.error}>{errors.gender}</p>
        </div>

        <div>
          <label htmlFor="terms">
            <input type="checkbox" id="terms" name="terms" />I accept the terms
          </label>
          <p className={styles.error}>{errors.terms}</p>
        </div>

        <div>
          <label htmlFor="country">Country:</label>
          <input type="text" id="country" name="country" list="countries" />
          <datalist id="countries">
            {countries.map((country, index) => (
              <option value={country} key={index} />
            ))}
          </datalist>
          <p className={styles.error}>{errors.country}</p>
        </div>

        <button type="submit">Send</button>
      </form>
    </>
  );
};
