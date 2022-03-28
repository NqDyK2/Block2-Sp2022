import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { read, update } from '../api/product';
import { ProductType } from '../types/product';

type ProductEditProps = {
    onUpdate: (product: ProductType) => void
}
type FormInputs = {
    name: string,
    price: number
}

const ProductEdit = (props: ProductEditProps) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
    const { _id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(_id);
            reset(data);
        }
        getProduct();
    }, []);

    const onSubmit: SubmitHandler<FormInputs> = data => {
        props.onUpdate(data)
        navigate("/admin/product");
    }
    return (

        <form action="" className=' -ml-96' onSubmit={handleSubmit(onSubmit)}>

            <div className="mb-6">
                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register('name', { required: true })} />
                {errors.name && <span>Bắt buộc phải nhập trường này!</span>}
            </div>
            <div className="mb-6">
                <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Price</label>
                <input type="number" {...register('price')} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
            </div>
            <button>Update</button>
        </form>
    )
}

export default ProductEdit