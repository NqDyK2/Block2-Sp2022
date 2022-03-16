import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const ProductPage = (props: Props) => {
  return (
    <div>
      <header>
        
      </header>
      <main>
      <Outlet />
      </main>
      <footer>

      </footer>
    </div>
  )
}

export default ProductPage