
import styles from './ProductsItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from "react-redux";
import { Grid,Button } from '@material-ui/core';
import { useState } from 'react';
import { addProductsCarts } from '../../../redux/apiRequest';
import { useNavigate } from 'react-router-dom';


function ProductsItems() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const productsItem = useSelector((state)=> state.products.productsItem);
    const [quality, setQuality] = useState(1);

    const handleMinus = () => {
        if(quality <= 1){
            return;
        }else {
            setQuality(Number(quality - 1))
        }
    }

    const handleAddCarts = () => {
        addProductsCarts(
        {
            image: productsItem.image,
            bookName: productsItem.bookName,
            bookPrice: productsItem.bookPrice,
            bookQuality: quality
        },dispatch,navigate)
    }

  return (
    <div className='Content'>
        <div className={styles.ProductsItems} >
            <Grid style={{padding : '25px 25px', boxShadow: 'rgb(0 0 0 / 10%) 0px 4px 12px', backgroundColor: '#fff'}} container spacing={4} >
                <Grid xs={5} >
                    <div className={styles.ProductsItemsLeft}>
                        <img className={styles.ProductsItemsLeftImg} src={productsItem.image} />
                        <div  className={styles.ProductsItemsLeftAction}>
                            <Button id='add_cart' onClick={handleAddCarts} style={{color: '#f50057', backgroundColor: 'none', }} variant="contained">
                                Thêm Vào Giỏ Hàng
                            </Button>
                            <Button color="secondary" variant="contained">
                                Mua Ngay
                            </Button>
                        </div>
                    </div>
                </Grid>
                <Grid xs={7}>
                    <div className={styles.ProductsItemsRight}>
                        <h1 className={styles.ProductsItemsName} >
                            {productsItem.bookName}
                        </h1>
                        <div className={styles.ProductsItemsMade} >
                            <div>
                                <span>
                                    Xuất Xứ : 
                                </span>
                                <span style={{fontWeight: '600', paddingLeft: '10px'}}>
                                     Việt Nam
                                </span>
                            </div>

                            <div>
                                <span>
                                    Thương Hiệu : 
                                </span>
                                <span style={{fontWeight: '600', paddingLeft: '10px'}}>
                                     1Life
                                </span>
                            </div>
                        </div>

                        <div className={styles.ProductsItemsPrice}>
                            <span>{productsItem.bookPrice},000đ</span>
                        </div>
                        <div className={styles.ProductsItemsEndow} >
                            <span>Chính sách đổi trả</span>
                            <div>
                                <span>Đổi trả trong 30 ngày <a href='/'>xem thêm</a></span>
                            </div>
                        </div>
                        <div className={styles.ProductsItemsQuality}>
                            <label>Số lượng</label>
                            <div className={styles.quality}>
                                <div className={styles.qualityHold}>
                                    <a onClick={handleMinus} className={styles.qualityBtn} >
                                        <FontAwesomeIcon icon={faMinus}/>
                                    </a>
                                    <input className={styles.qualityInput} type='text' maxvalue={999} minvalue={1} value={quality} />
                                    <a onClick={()=> setQuality(Number(quality + 1))} className={styles.qualityBtn} >
                                        <FontAwesomeIcon icon={faPlus}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    </div>
  );
}

export default ProductsItems;
