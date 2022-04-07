import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { get_current } from '../JS/actions/authActions';
import { addproducts } from '../JS/actions/prodActions';

const AddProduct = () => {
const dispatch = useDispatch()
const [name, setName] = useState("")
const [price, setprice] = useState(0)
const [shopUrl, setshopUrl] = useState("")
const [description, setdescription] = useState("")

const [imageUrl, setimageUrl] = useState(null)


  const navigate=useNavigate()


  const handleProduct = (e) => {
   
    e.preventDefault();
  
    dispatch(addproducts({name,price,description,imageUrl,shopUrl}),navigate('/profile'))
  
  }; 
  

  return (
    <div>
    <meta charSet="utf-8" />
    <title>|**BACKEND TITLE**|</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" />
    <style dangerouslySetInnerHTML={{__html: "\n      /*START GENERAL CSS FOR BACKEND*/\n      @import \"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/3.1.0/css/font-awesome.min.css\";\n      @import url(//fonts.googleapis.com/css?family=Lato:400,700,900,400italic,700italic,900italic);\n      * {\n        font-family: Lato;\n      }\n      body {\n        font-size: 16px;\n        background: #f3f3f3;\n        margin: 1px 0px 0px 0px;\n      }\n      h1, h2, h3, h4, h5, h6 {\n        letter-spacing: -0.035em;\n        margin: 0px 0px 10px 0px;\n      }\n      h1 {\n        font-size: 2.5em;\n      }\n      h2 {\n        font-size: 1.8em;\n      }\n      h3 {\n        font-size: 1.5em;\n      }\n      img, p, a {\n        margin: 0px;\n      }\n      a {\n        color: #f44236;\n        text-decoration: none;\n      }\n      a:hover,\n      a:focus,\n      a:active {\n        color: #f44236 !important;\n      }\n      button {\n        font-size: 0.8em;\n        text-transform: uppercase;\n        padding: 5px 10px;\n        margin: 0px;\n        background: #f3f3f3;\n        border: 1px solid rgba(0, 0, 0, .12);\n        border-radius: 5px;\n      }\n      button:hover {\n        cursor: pointer;\n      }\n      .header-content,\n      .body-content,\n      .footer-content {\n        height: auto;\n        max-width: 1200px;\n        margin: 0 auto;\n        padding: 0px 15px;\n      }\n      .header-section {\n        background: #fff;\n        border-bottom: 1px solid rgba(0, 0, 0, .12);\n        height: auto;\n        padding: 18px 0px;\n      }\n      .header-content {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n      }\n      .platform-logo {\n        width: auto;\n        max-width: 250px;\n        height: auto;\n        max-height: 50px;\n      }\n      .header-nav .nav-icon {\n        color: #414141;\n        font-size: 1.5em;\n        margin: 0px 8px;\n      }\n      .header-nav .nav-icon:hover {\n        color: #f44236;\n      }\n      .body-root {\n        min-height: 85.3vh;\n      }\n      .body-section {\n        padding: 25px 0px;\n      }\n      .body-content {\n        display: flex;\n      }\n      .sidebar {\n        width: 27%;\n        min-width: 200px;\n        height: auto;\n      }\n      .maina {\n        width: 73%;\n        height: auto;\n      }\n      .sidebar-menu {\n        display: flex;\n        flex-direction: column;\n        padding-top: 5px;\n      }\n      .sidebar-menu .menu-item {\n        color: #414141;\n        font-size: 1em;\n        font-weight: 700;\n        text-transform: uppercase;\n        width: auto;\n        max-width: 180px;\n        margin-bottom: 18px;\n        display: flex;\n        align-items: center;\n      }\n      .sidebar-menu .menu-icon {\n        font-size: 1.2em;\n        text-align: center;\n        width: 35px;\n        margin-right: 12px;\n      }\n      .maina-container {\n        background: #fff;\n        border: 1px solid rgba(0, 0, 0, .12);\n        border-radius: 5px;\n        padding: 25px 30px;\n        margin-bottom: 15px;\n      }\n      .footer-section {\n        background: #fff;\n        border-top: 1px solid rgba(0, 0, 0, .12);\n        height: auto;\n        padding: 20px 0px;\n      }\n      .footer-container.msh-power {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n      .footer-container.msh-power p {\n        font-size: 0.9em;\n        text-transform: uppercase;\n        padding-right: 7px;\n      }\n      .msh-logo {\n        width: auto;\n        max-width: 150px;\n      }\n      @media (max-width: 480px) {\n        h1 {\n          font-size: 2em;\n        }\n        h2 {\n          font-size: 1.6em;\n        }\n        h3 {\n          font-size: 1.3em;\n        }\n        button {\n          font-size: 0.9em;\n        }\n        .header-content {\n          justify-content: center;\n        }\n        .platform-logo {\n          max-width: 225px;\n        }\n        .header-nav {\n          display: none;\n        }\n        .body-root {\n          min-height: 74.5vh;\n        }\n        .body-section {\n          padding: 15px 0px;\n        }\n        .body-content {\n          flex-direction: column;\n        }\n        .sidebar {\n          width: 100%;\n        }\n        .maina {\n          width: 100%;\n        }\n        .sidebar-menu {\n          flex-direction: row;\n          flex-wrap: wrap;\n          justify-content: space-between;\n          padding-bottom: 2px;\n        }\n        .sidebar-menu .menu-item {\n          width: 48%;\n          margin-bottom: 15px;\n        }\n        .sidebar-menu .menu-icon {\n          margin-right: 6px;\n        }\n        .maina-container {\n          padding: 15px 20px;\n          margin: 0px -16px 15px;\n          border-radius: 0px;\n        }\n      }\n      /*END GENERAL CSS FOR BACKEND*/\n      /*START CSS FOR CREATE BLOG PAGE*/\n      form {\n        padding-top: 10px;\n      }\n      label {\n        display: block;\n        font-size: 0.9em;\n        padding-bottom: 5px;\n      }\n      input,\n      textarea,\n      select {\n        font-size: 0.9em;\n        width: 100%;\n        margin: 0;\n        padding: 10px 8px;\n        box-sizing: border-box;\n        border: 1px solid rgba(0, 0, 0, .12);\n        border-radius: 4px;\n        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n      }\n      input,\n      select {\n        height: 40px;\n      }\n      input:focus,\n      textarea:focus,\n      select:focus {\n        outline: none;\n      }\n      .form-field {\n        margin-bottom: 14px;\n      }\n      .form-field.short input,\n      .form-field.short select,\n      .form-field.short textarea {\n        max-width: 250px;\n      }\n      .form-field.medium input,\n      .form-field.medium select,\n      .form-field.medium textarea {\n        max-width: 450px;\n      }\n      input[type=\"checkbox\"] {\n        height: 20px;\n        width: 20px;\n      }\n      .form-field.checkbox {\n        display: flex;\n      }\n      .form-field.checkbox label {\n        padding: 1px 0px 0px 3px;\n      }\n      input[readonly] {\n        background: #f3f3f3;\n      }\n      button.publish,\n      button.update {\n        background: black;\n        border-color: black;\n        color: white;\n      }\n      .new-post-actions,\n      .edit-post-actions {\n        display: flex;\n        margin-top: 25px;\n      }\n      .new-post-actions button,\n      .edit-post-actions button {\n        font-size: 0.9em;\n        height: 40px;\n        padding: 5px 15px;\n        margin-right: 6px;\n      }\n      /*END CSS FOR CREATE BLOG PAGE*/\n    " }} />
    <div className="backend-root">
      <div className="body-root">
        <div className="body-section">
          <div className="body-content">
            <div className="maina">
              <div className="maina-content">
                <div className="maina-container new-product">
                  <h2>Add new product</h2>
                  <div className="new-post-form product">
                    <form className="new-product-form">
                      <div className="form-field field-1 medium">
                        <label htmlFor="name">Product Name</label>
                        <input id="name" type="text" name="name" onChange={(e)=>setName(e.target.value)} />
                      </div>
                      <div className="form-field field-2 medium">
                        <label htmlFor="price">Product Price</label>
                        <input id="price" type="text" name="price" onChange={(e)=>setprice(e.target.value)} />
                      </div>
                      <div className="form-field field-3 medium">
                        <label htmlFor="shopURL">Shop URL</label>
                        <input id="shopURL" type="text" name="shopURL" onChange={(e)=>setshopUrl(e.target.value)} />
                      </div>
                      <div className="form-field field-4 medium">
                        <label htmlFor="description">Product Description</label>
                        <textarea id="description" type="text" rows={2} name="description" defaultValue={""} onChange={(e)=>setdescription(e.target.value)} />
                      </div>
<input type="file" id="myfile" name="myfile" onChange={(e)=> setimageUrl(e.target.files[0]) } />
                      <div className="new-post-actions">
                        <div className="button-container">
                        </div>
                        <div className="button-container">
                          <button onClick={handleProduct} className="publish" type="submit">Add Product</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  </div>  )
}

export default AddProduct