
import styles from './ManageBooks.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { DeleteProductByAdmin, getAllProducts, getUpdateProductsItem } from '../../../redux/apiRequest';
import { useEffect } from 'react';
import { deleteProductsItemSucces } from '../../../redux/productsSlice';

function ManageBooks() {

    const user = useSelector((state) => state.auth.login.currentUser);
    const allProducts = useSelector((state) => state.products.productsHold.allProducts)
    const navigator = useNavigate();

    const dispatch = useDispatch()

    const handleDeleteByAdmin = (id) => {
        DeleteProductByAdmin(String(user.token),id,dispatch)
    }

    const handleUpdateByAdmin = (id) => {
        getUpdateProductsItem(dispatch,id,navigator);
    }

    useEffect(()=> {
        getAllProducts(dispatch);
      },[dispatch(deleteProductsItemSucces())])


    return (
        <div className={styles.ManageBooks}>
            <h2>Danh Sách Sản Phẩm</h2>

            <table>
            <tr>
                <th>Tên sách</th>
                <th>Loại sách</th>
                <th>Hành động</th>
            </tr>
            {allProducts.map(allProduct => (
                <tr>
                <td>{allProduct.bookName}</td>
                <td>{allProduct.bookCategory}</td>
                <td>
                    <button onClick={() => handleDeleteByAdmin(allProduct._id)} style={{background: "#C92127"}} >xóa</button>
                    <button onClick={() => handleUpdateByAdmin(allProduct._id)} style={{background: "seagreen"}} >sửa</button>
                </td>
            </tr>
            ))}
            </table>
        </div>
    );
}

export default ManageBooks;
