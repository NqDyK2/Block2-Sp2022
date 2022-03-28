import React from 'react'
import { Link } from 'react-router-dom';
import { ProductType } from '../types/product'

type ProductManagerProps = {
  products: ProductType[];
  onRemove: (_id: number) => void
}

const ProductManager = (props: ProductManagerProps) => {
  return (
      <div className="relative overflow-x-auto shadow-md -ml-96 sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Remove</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {props.products.map((item, index) => {
              return <tr className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  {item.name}
                </th>
                <td className="px-6 py-4">
                  Color
                </td>
                <td className="px-6 py-4">
                  Category
                </td>
                <td className="px-6 py-4">
                  {item.price}
                </td>
                <td className="px-6 py-4 text-right">
                  <button><Link to={`/admin/product/${item._id}/edit`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link></button>
                </td>
                <td className="px-6 py-4 text-left">
                  <button type='submit' onClick={() => props.onRemove(item._id)} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Remove</button>
                </td>
              </tr>
            })}
          </tbody>
        </table>

    </div>
  )
}

export default ProductManager