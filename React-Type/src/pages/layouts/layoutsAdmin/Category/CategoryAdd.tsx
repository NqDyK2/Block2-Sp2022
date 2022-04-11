import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import {useNavigate} from 'react-router-dom'

type Inputs = {
  name: string, 
}
type CategoryAddProps = {
  onAdd: (category : Inputs) => void
}
const CategoryAdd = (props: CategoryAddProps) => {
  const {register , handleSubmit , formState:{errors}} = useForm<Inputs>()
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<Inputs> = (dataInput) => {
    props.onAdd(dataInput);
    navigate("/admin/category")
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('name')} placeholder="Name Category" />
        <button>Add More</button>
      </form>
    </div>
  )
}

export default CategoryAdd