import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

type Inputs = { // kiểu dữ liệu của từng input
    name: string,
    price: number,
    desc: string,
  };
  
type ProductAddProps = {
    onAdd: (product: Inputs) => void
}
const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: { errors}} = useForm<Inputs>()
    // sử dụng hook useNavigate để chuyển sang
    const navigate = useNavigate()
    const onSubmit: SubmitHandler<Inputs>  = (dataInput) => {
        props.onAdd(dataInput);
        // chuyển trang
        navigate("/admin/product");
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register('name')} placeholder='Tên sản phẩm' />
            <input type="number"  {...register('price')} placeholder='Giá sản phẩm' />
            <input type="text" {...register('desc')} placeholder='Mô tả '/>
            <button>Thêm</button>
        </form>
    </div>
  )
}

export default ProductAdd