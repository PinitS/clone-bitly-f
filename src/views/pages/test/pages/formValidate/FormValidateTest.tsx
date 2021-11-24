import React, { useRef } from 'react'
import { useForm } from 'react-hook-form';
import { validate } from '../../../../../application/helpers/validateRegex';
import NavBarTester from '../../components/layouts/NavBarTester';

export default function FormValidateTest() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm();

  const password = useRef({});
  password.current = watch("password", "");
  const onSubmit = (data: any) => {
    console.log(data)
  };
  return (
    <div>
      <NavBarTester />
      <div className="container">
        <h3>FormValidateTest</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p>required And add defaultValue</p>
          <input {...register('text', validate.required)} defaultValue='test' />
          {/* <input {...register('text', validate.required)} defaultValue='test' /> */}
          {/* ข้างหลัง register = name input 
        ข้างหลัง , เป็น object มี regex ข้างใน */}
          <br />
          {errors.text && (
            <span className='text-danger'>{errors.text.message}</span>
          )}
          <br />
          <p>number</p>
          <input type='number' {...register('number', validate.number)} />
          <br />
          {errors.number && (
            <span className='text-danger'>{errors.number.message}</span>
          )}
          <br />
          <p>phonenumber</p>
          <input type='phonenumber' {...register('phonenumber', validate.phonenumber)} />
          <br />
          {errors.phonenumber && (
            <span className='text-danger'>{errors.phonenumber.message}</span>
          )}
          <br />
          <p>IdentificationNumber</p>
          <input type='number' {...register('IdentificationNumber', validate.IdentificationNumber)} />
          <br />
          {errors.IdentificationNumber && (
            <span className='text-danger'>{errors.IdentificationNumber.message}</span>
          )}
          <br />
          <p>email</p>
          <input type='text' {...register('email', validate.email)} />
          <br />
          {errors.email && (
            <span className='text-danger'>{errors.email.message}</span>
          )}
          <br />
          <p>password</p>
          <input type='password' {...register('password', validate.password)} />
          <br />
          {errors.password && (
            <span className='text-danger'>{errors.password.message}</span>
          )}
          <br />
          <p>password_repeat</p>
          <input type='password' {...register('password_repeat', { validate: value => value === password.current || "The passwords do not match" })} />
          <br />
          {errors.password_repeat && (
            <span className='text-danger'>{errors.password_repeat.message}</span>
          )}
          <br />
          <input type='submit' />
        </form>
        <hr />
        <hr />
        <h1>form 2</h1>
        <hr />
        <form onSubmit={handleSubmit2(onSubmit)}>
          <p>required</p>
          <input type='text' {...register2('required2', validate.required)} />
          <br />
          {errors2.required2 && (
            <span className='text-danger'>{errors2.required2.message}</span>
          )}
          <br />
          <p>required text</p>
          <input type='text' {...register2('text2', validate.required)} />
          <br />
          {errors2.text2 && (
            <span className='text-danger'>{errors2.text2.message}</span>
          )}
          <br />
          <select {...register2("gender", validate.dropDown)}>
            <option value="">Plaese Select</option>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="other">other</option>
          </select>
          <br />
          {errors2.gender && (
            <span className='text-danger'>{errors2.gender.message}</span>
          )}

          <div>
            <p>Please select your age:</p>
            <input type="radio" {...register2("age")} defaultValue={30} />
            <label htmlFor="age1">0 - 30</label><br />
            <input type="radio" {...register2("age")} defaultValue={60} />
            <label htmlFor="age2">31 - 60</label><br />
            <input type="radio" {...register2("age")} defaultValue={100} />
            <label htmlFor="age3">61 - 100</label><br />
          </div>
          <input type="checkbox" {...register2('acceptTerms')} className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''}`} />
          <br />
          {errors2.acceptTerms && (
            <span className='text-danger'>{errors2.acceptTerms.message}</span>
          )}
          <br />

          <input type='submit' />
        </form>
      </div>
    </div>
  )
}
