
import styles from './UpdateBook.module.scss';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UpdateProductByAdmin } from '../../../redux/apiRequest';

function UpdateBook() {
    const user = useSelector((state) => state.auth.login.currentUser);
    const productsItem = useSelector((state)=> state.products.productsItem);


    const navigate = useNavigate();
    const dispatch = useDispatch()

    const {register, handleSubmit, setValue} = useForm({
        defaultValues: {
            image: productsItem.image,
            bookName: productsItem.bookName,
            bookPrice: productsItem.bookPrice,
            bookCategory: productsItem.bookCategory
        }
    });



    const onSubmit = data => UpdateProductByAdmin(String(user?.token), data, productsItem._id, dispatch,navigate);

    return (
        <div className={styles.UpdateBook}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.UpdateBookForm} >
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
                    Tên sách
                </label>
                <input
                    type="bookName"
                    name="bookName"
                    id="bookName"
                    placeholder='tên sách của bạn'
                    {...register("bookName")}
                />
                <label htmlFor='bookPrice' >
                    Giá sách
                </label>
                <input
                    type="bookPrice"
                    name="bookPrice"
                    id="bookPrice"
                    placeholder='giá sách của bạn'
                    {...register("bookPrice")}
                />
                <label htmlFor='bookCategory'>
                    Thể loại sách
                </label>
                <select 
                {...register("bookCategory")}
                id="bookCategory" name="bookCategory">
                    <option value="banhang">Bán hàng</option>
                    <option value="camhung">Cảm hứng</option>
                    <option value="bian">Bí ẩn</option>
                </select>
                <button className="submit">
                    Cập nhập sách
                </button>
            </form>
        </div>
    );
}

export default UpdateBook;
