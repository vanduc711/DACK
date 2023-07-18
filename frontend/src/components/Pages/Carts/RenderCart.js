import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteCarts, getAllCarts, updateCartsQuality } from '../../../redux/apiRequest';
import { updateQualitySucces } from '../../../redux/CartsSlice';
import styles from './Carts.module.scss';

function RenderCarts() {

    const cartsItems= useSelector((state)=> state.carts.allCartsHold.allCarts)
    
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleQualityMunis = (id,quality) => {
        if(quality <= 1 ){
            return
        }else{
            updateCartsQuality(id, { bookQuality: Number(quality) - 1 },dispatch,navigate)
        }
    }

    const handleQualityAdd = (id,quality) => {
        updateCartsQuality(id, { bookQuality: Number(quality) + 1 },dispatch,navigate)
    }

    const handleDeleteCarts = (id) => {
        deleteCarts(id,dispatch);
    }
    
    useEffect(() => {
        getAllCarts(dispatch)
    },[dispatch(updateQualitySucces())])

  return (
    <div >
         {cartsItems.map(cartsItem => (
            <div key={cartsItem._id} className={styles.CartsGridFooter}>
                        <div className={styles.CartsCheckItem} style={{margin: '0'}} >
                            <div className={styles.CartsFooter} >
                                <img className={styles.CardsFooterImage} src={cartsItem.image}/>
                            </div>
                            <div className={styles.CartsFooterTitle}>
                                <span>{cartsItem.bookName}</span>
                                <span>{cartsItem.bookPrice},000đ</span>
                            </div>
                        </div>
                        <div style={{display: 'flex', flexBasis: '55%', justifyContent: 'space-around', alignItems:'center'}} >
                            <div className={styles.quality}>
                                <div className={styles.qualityHold}>
                                    <a onClick={()=>handleQualityMunis(cartsItem._id, cartsItem.bookQuality)} className={styles.qualityBtn} >
                                        <FontAwesomeIcon id ="minus" icon={faMinus}/>
                                    </a>
                                    <input className={styles.qualityInput} type='text' value={cartsItem.bookQuality} />
                                    <a onClick={()=>handleQualityAdd(cartsItem._id, cartsItem.bookQuality)} className={styles.qualityBtn} >
                                        <FontAwesomeIcon id="plus" icon={faPlus}/>
                                    </a>
                                </div>
                                </div>
                                <span style={{color: '#C92127'}} >{cartsItem.bookPrice},000đ</span>
                                <div onClick={()=>handleDeleteCarts(cartsItem._id)} className={styles.CartsFooterRemove} >
                                    <FontAwesomeIcon id="delete_cart" icon={faTrash}/>
                                </div>
                        </div>
            </div>
         ))}
    </div>
  );
}

export default RenderCarts;
