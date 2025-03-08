import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, fetchProducts } from '../../state/ProductSlice';
import { useEffect } from 'react';
import {Link} from 'react-router-dom';

const ProductIndex = ()=>{
    const products = useSelector(state=>state.product.products);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchProducts());
    }, [dispatch]);

    const deleteNow = (productId)=>(e)=>{
        e.preventDefault();
        dispatch(deleteProduct(productId));
    }

    
    return(
        <div>
            <div>
                <Link to={'/products/create'} className='btn btn-primary float-end'>Add Product</Link>
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Summary</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{product.title}</td>
                                    <td>{product.summary}</td>
                                    <td>
                                        <Link to={`/products/${product._id}`} className='btn btn-info btn-sm ms-1 me-1'>Edit</Link>
                                        <button type='button' className='btn btn-sm btn-danger' onClick={deleteNow(product._id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                   
                </tbody>
            </table>
        </div>
    )
}

export default ProductIndex;