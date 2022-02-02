import { stringify } from 'query-string';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const FormAddress = () => {

  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log((data))
  console.log(register, 'ss')

  return (
    <div>
      <h2>Address</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input {...register("name")} placeholder='name' />
          <input {...register("street_address")} placeholder='street address' />
          <input {...register("city")} placeholder='city' />
        </div>
        <div>
          <input {...register("state")} placeholder='state' />
          <input {...register("zip_code")} placeholder='zip code' />
        </div>

        <input type="submit" />
      </form>
    </div>
  )
};

export default FormAddress;
