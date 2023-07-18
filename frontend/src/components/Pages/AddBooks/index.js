import React, { useRef } from 'react';

import styles from './AddBooks.module.scss';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProductByAdmin } from '../../../redux/apiRequest';

function AddBooks({ products, createProduct, purchaseProduct }) {

    const user = useSelector((state) => state.auth.login.currentUser);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const productNameRef = useRef(null);
    const productPriceRef = useRef(null);

    const {register, handleSubmit} = useForm();

    // const onSubmit = data => addProductByAdmin(String(user.token), data,navigate, dispatch );
    const onSubmit = (event, data) => {
        event.preventDefault();
        const name = productNameRef.current.value;
        const price = window.web3.utils.toWei(productPriceRef.current.value.toString(), 'Ether');
        createProduct(name, price);
        addProductByAdmin(String(user.token), data,navigate, dispatch )
      };

    return (
        <div className={styles.AddBooks}>
            <form onSubmit={handleSubmit(onSubmit, )} className={styles.AddBooksForm} >
                <h1>Thêm Sách</h1>
                <label htmlFor="image">
                    Ảnh sách
                </label>
                <input 
                    type="text"
                    name="image"
                    id="image"
                    placeholder="nhập url ảnh của bạn"
                    {...register("image")}
                />

                <label htmlFor='bookName' >
                    Tên sản phẩm
                </label>
                <input
                
               
                ref={productNameRef}
                className="form-control"
                placeholder="Product Name"
                    type="bookName"
                    name="bookName"
                    id="bookName"

                    {...register("bookName")}
                />
                <label htmlFor='bookPrice' >
                    Giá sản phẩm
                </label>
                <input
                    type="bookPrice"
                    name="bookPrice"
                    id="bookPrice"
                    ref={productPriceRef}
                    placeholder='giá sản phẩm của bạn'
                    {...register("bookPrice")}
                />
                <label htmlFor='bookCategory'>
                    Thể loại
                </label>
                <select 
                {...register("bookCategory")}
                id="bookCategory" name="bookCategory">
                    <option value="banhang">Bán hàng</option>
                    <option value="camhung">Cảm hứng</option>
                    <option value="bian">Bí ẩn</option>
                </select>
                <button className="submit">
                    Bấm vào để thêm sách
                </button>
            </form>
        </div>
    );
}

export default AddBooks;
