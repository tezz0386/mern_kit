import { useSelector, useDispatch } from "react-redux";
import { fetchProduct, handleUpdateProduct, saveProduct, updateProduct } from '../../state/ProductSlice';
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
const ProductCreate = ()=>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        dispatch(fetchProduct(id));
    }, [dispatch, id])

    const product = useSelector(state=>state.product.product);

    const handleUpdate = (key)=>(e)=>{
        const {value} = e.target;
        dispatch(handleUpdateProduct({key:key, value}));
    };


    const saveNow= (e)=>{
        e.preventDefault();
        dispatch(updateProduct(product._id, product));
        navigate('/products');
    };

    return (
        <div className="card">
            <form action="#" method="post" onSubmit={saveNow}>
                    <div className="card card-header">
                        <h1>Product Addon Form</h1>
                    </div>
                    
                    <div className="card card-body">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" className="form-control" name="title" value={product.title} onChange={handleUpdate('title')} />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="summary">Summary</label>
                                    <textarea name="summary" rows={3} className="form-control" id="summary" value={product.summary} onChange={handleUpdate('summary')}></textarea>                               
                                </div>
                            </div>


                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="description">Description</label>
                                    <textarea className="form-control" rows={5} name="description" id="description" value={product.description} onChange={handleUpdate('description')}></textarea>                                
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card card-footer">
                        <div>
                            <button className="btn btn-primary float-end ms-1 me-1">Save</button>
                            <Link to={'/products'} className="btn btn-danger float-end ms-1 me-1">Cancel</Link>
                        </div>
                    </div>
            </form>
          
        </div>
    )
}

export default ProductCreate;