import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate, useParams } from 'react-router-dom';
import { get_current } from '../JS/actions/authActions';
import { deleteProduct, showproduct } from '../JS/actions/prodActions';
import './assets/prod.css'


const ProductCard = () => {
  const product=useSelector(state=>state.prodReducer.product)
  const user=useSelector(state=>state.authReducer.user)

  const dispatch=useDispatch()
  const {id}=useParams()
  useEffect(()=>{
    dispatch(get_current())},[]);
useEffect(() => {
  dispatch(showproduct(id));
}, []);
const navigate=useNavigate()


  return (
    <div className="product-card-details-container-outer">
    <div className="container">
      <div className="product-card-details-container">
        <div className="product-card-details row">
          <div className="col-md-5 p-1">
            <img className="product-card-details-img" src={`/uploads/${product.imageUrl}`} alt="..." />
          </div>
          <div className="col-md-7 p-1">
            <div className="product-card-details-content">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <h2 className="product-card-details-product-name">{product.name}</h2>
                </li>
                <li className="list-group-item">
                  <h6>Product Description:</h6>
                  <h6 className="product-card-details-product-desc">{product.description}
                  </h6>
                </li>
                <li className="list-group-item">
                  <h6>Category Tags: <span className="badge bg-black">White</span>  </h6>
                </li>
                <li className="list-group-item">
                  <h6>${product.price}</h6>
                </li>
                <li className="list-group-item">
                  <h6>{product.shopUrl}</h6>
                </li>
              {product.userId==user._id && <li className="list-group-item">
                  
                  <button  onClick={() => dispatch(deleteProduct(id),navigate('/profile'))}  className="btn btn-dark">Delete Product</button>
                  <button onClick={()=>navigate(`/editproduct/${id}`)} className="btn btn-dark">Edit Product</button>
                </li>}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductCard