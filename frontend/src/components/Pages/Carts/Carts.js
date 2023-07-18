import { Grid } from '@material-ui/core';
import {  useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './Carts.module.scss';
import RenderCarts from './RenderCart';

function Carts() {

    let sumQuality = 0;
    let sumPrice = 0;

    const navigate = useNavigate();
    const [checkAll, setCheckAll] = useState(false);
    const [checkItem, setCheckItem] = useState(false);
    const cartsItems= useSelector((state)=> state.carts.allCartsHold.allCarts)
    const User= useSelector((state)=> state.auth.login.currentUser)

    cartsItems.map(cartsItem => {
        sumQuality = sumQuality + Number(cartsItem.bookQuality)
        const check = Number(cartsItem.bookQuality) * Number(cartsItem.bookPrice)
        sumPrice = sumPrice + check
    })

    const handleSubmitPay = () => {
        if(User != null) {
            alert('mua hàng thành công <3')
        }
        else{
            alert('bạn chưa đăng nhập')
            navigate('/login')
        }
    }

  return (
    <div className='Content'>
      <div className={styles.Carts}>
        <div className={styles.CartsTitleHold}>
            <h1 className={styles.CartsTitle} >Giỏ Hàng</h1>
            <span>({sumQuality} sản phẩm)</span>
        </div>
        {/* Grid Carts */}
        <Grid style={{margin: '20px 0'}} container spacing={4} >
            <Grid xs={8} >
                <div className={styles.CartsGridHeader}>
                    <div className={styles.CartsCheckAll} style={{margin: '0'}} >
                        <div className={styles.CartsHeader} >
                            <label>({sumQuality} sản phẩm)</label>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexBasis: '51%', justifyContent: 'space-around'}} >
                        <span>Số lượng</span>
                        <span style={{flexBasis: '42%'}} >Thành tiền</span>
                    </div>
                </div>

                <RenderCarts />
                
            </Grid>
            <Grid xs={4}>
                <div className={styles.CartsGridRight}>
                    <div className={styles.CartsGridRightTitle} >
                        <span>Thành tiền</span>
                        <span>{sumPrice},000đ</span>
                    </div>
                    <div className={styles.CartsGridRightSum}>
                        <span style={{fontWeight: '600'}}>Tổng Số Tiền (gồm VAT)</span>
                        <span style={{fontWeight: '600', color: '#C92127'}}>{sumPrice},000đ</span>
                    </div>
                    <button onClick={handleSubmitPay} >
                        <span>THANH TOÁN</span>
                    </button>
                </div>
            </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Carts;
