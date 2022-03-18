import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import {useNavigate } from 'react-router-dom'

type Inputs = {
    name: string,
    price: number,
};

type ProductAddProps = {
    name: string,
    onAdd: (product: Inputs) => void
}

const ProductAdd = (props: ProductAddProps) => {
    const {register , handleSubmit, formState: { errors }} = useForm<Inputs>();
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<Inputs> = (dataInputs) => {
        console.log(dataInputs);
        props.onAdd(dataInputs)
        navigate("/")
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('name')} placeholder='Name' />
            <input type="number" {...register('price')} placeholder='Price' />
            <button>Add</button>
        </form>
    </div>
  )
}

export default ProductAdd