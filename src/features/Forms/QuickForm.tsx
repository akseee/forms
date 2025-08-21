import { yupResolver } from '@hookform/resolvers/yup';
import { countries } from '../../utils/constants';
import type { TUserData, TUserFormInputs } from '../../utils/types';
import styles from './Form.module.css';
import { useForm } from 'react-hook-form';
import { schema } from '../../utils/schema';
import { useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface IQuickFormProps {
  handleSubmitData: (data: TUserData) => void;
}

export const QuickForm = ({ handleSubmitData }: IQuickFormProps) => {
  const firstInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (formData: TUserFormInputs) => {
    const data: TUserData = {
      name: formData.name,
      age: formData.age,
      email: formData.email,
      password: formData.password,
      gender: formData.gender,
      terms: formData.terms,
      country: formData.country,
      id: uuidv4(),
    };
    handleSubmitData(data);
  };

  useEffect(() => {
    firstInputRef.current?.focus();
  }, []);

  return (
    <>
      <h2 className={styles.title}>Quick form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            {...register('name')}
            type="text"
            id="name"
            ref={firstInputRef}
          />
          <p className={styles.error}>{errors.name?.message}</p>
        </div>

        <div>
          <label htmlFor="age">Age:</label>
          <input {...register('age')} type="number" id="age" />
          <p className={styles.error}>{errors.age?.message}</p>
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input {...register('email')} type="email" id="email" />
          <p className={styles.error}>{errors.email?.message}</p>
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input {...register('password')} type="password" id="password" />
          <p className={styles.error}>{errors.password?.message}</p>
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm password:</label>
          <input
            {...register('confirmPassword')}
            type="password"
            id="confirmPassword"
          />
          <p className={styles.error}>{errors.confirmPassword?.message}</p>
        </div>

        <div>
          <label>Gender:</label>
          <label>
            <input {...register('gender')} type="radio" value="male" />
            Male
          </label>
          <label>
            <input {...register('gender')} type="radio" value="female" /> Female
          </label>
          <p className={styles.error}>{errors.gender?.message}</p>
        </div>

        <div>
          <label htmlFor="terms">
            <input
              {...register('terms')}
              type="checkbox"
              id="terms"
              name="terms"
            />
            I accept the terms
          </label>
          <p className={styles.error}>{errors.terms?.message}</p>
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input
            {...register('country')}
            type="text"
            id="country"
            list="countries"
          />
          <datalist id="countries">
            {countries.map((country, index) => (
              <option value={country} key={index} />
            ))}
          </datalist>
          <p className={styles.error}>{errors.country?.message}</p>
        </div>

        <button type="submit">Send</button>
      </form>
    </>
  );
};
