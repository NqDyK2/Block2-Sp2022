import React, { useEffect } from 'react'
import { CategoryType } from '../../../../types/category'
import { SubmitHandler, useForm } from 'react-hook-form';
import { readCate } from "../../../../api/category"
import { useNavigate, useParams } from 'react-router-dom';


type CategoryEditProps = {
  onUpdateCate: (category: CategoryType) => void
}

type FormInputs = {
  name: string,
  price: number,
}


const CategoryEdit = (props: CategoryEditProps) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
  const { _id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getCategory = async () => {
      const { data } = await readCate(_id);
      reset(data);
    }
    getCategory();
  }, []);
  const onSubmit: SubmitHandler<FormInputs> = data => {
    props.onUpdateCate(data)
    navigate("/admin/category")
  }
  return (
    <div>
      <form action="" className=' -ml-96' onSubmit={handleSubmit(onSubmit)}>

        <div className="mb-6">
          <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
          <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...register('name', { required: true })} />
          {errors.name && <span>Bắt buộc phải nhập trường này!</span>}
        </div>
        <button>Update</button>
      </form>
    </div>
  )
}

export default CategoryEdit