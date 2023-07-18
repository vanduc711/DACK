import {Grid, FormControl, NativeSelect} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Products.module.scss';
import { getProductsItem } from '../../../redux/apiRequest';
import Pagination from './Pagination';
import { useNavigate } from 'react-router-dom';
import {  useState } from 'react';


function Products() {

  const [CamHung, setCamHung] = useState(false)
  const [BiAn, setBiAn] = useState(false)
  const [BanHang, setBanHang] = useState(false)
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allProducts = useSelector((state) => state.products.productsHold.allProducts)
  const productsPanigation = useSelector((state) => state.products.productsPagination);
  
  // handle getItemProducts
  const handleGetItem = (id) => {
    getProductsItem(dispatch, id,navigate)
    
  }
  // handle FilterBooks
  const handleFilterBooks = (e) => {
    if(e.target.getAttribute("name") === 'camhung'){
      setCamHung(true)
    }else {
      setCamHung(false)
    }

    if(e.target.getAttribute("name") === 'banhang'){
      setBanHang(true);
    }else{
      setBanHang(false)
    }

    if(e.target.getAttribute("name") === 'bian'){
      setBiAn(true);
    }else{
      setBiAn(false)
    }
  }
  
  const end = productsPanigation.itemPerPage * productsPanigation.currentPage
  const start = end - productsPanigation.itemPerPage
  const currentProducts = allProducts.filter((val) => {
    if (CamHung) {
      return val.bookCategory === "camhung"
    }
    if (BiAn) {
      return val.bookCategory === "bian"
    }
    if (BanHang) {
      return val.bookCategory === "banhang"
    }
    if (CamHung) {
      return val.bookCategory === "camhung"
    }
    if(productsPanigation.EnterSearch === ""){
      return val
    }else if(val.bookName.toLowerCase().includes(productsPanigation.EnterSearch.toLowerCase())){
      return val
    }
    return 0;
  }).slice(start, end)
  

  return (
    <div className='Content'>
      <div className={styles.Products}>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <div className={styles.ProductsLeft} >
              <span className={styles.ProductsLeftTitle} >
                MUA THEO
              </span>
              <div className={styles.ProductsLeftFilter}>
                <span>Loại sách</span>
                  <ul onClick={(e) => handleFilterBooks(e)} >
                    <li className={CamHung ? 'active' : ''} name='camhung' >cảm hứng</li>
                    <li className={BanHang ? 'active' : ''} name='banhang' >bán hàng</li>
                    <li className={BiAn ? 'active' : ''} name='bian' >bí ẩn</li>
                  </ul>
              </div>
            </div>
            
          </Grid>
          <Grid item xs={9}>
            <div className={styles.ProductsRight} >
              <div className={styles.ProductsRightHeader}>
                <span>Sắp Xếp Theo :</span>
                {/* bán chạy */}
                <FormControl className={styles.Sell} fullWidth>
                  <NativeSelect
                    defaultValue={30}
                    inputProps={{
                      name: 'age',
                      id: 'uncontrolled-native',
                    }}
                  >
                    <option value={10}>Bán Chạy Tuần</option>
                    <option value={20}>Bán Chạy Tháng</option>
                  </NativeSelect>
                </FormControl>
              </div>  
              
              <div className={styles.GetAllProducts}>
                <Grid container spacing={2}>
                  {currentProducts.map((allProduct,index) => (
                    <Grid key={index} item xs={3}>
                        <div onClick={()=>handleGetItem(allProduct._id)} className={styles.CardsItem}>
                            <div className={styles.CardsItemImg}>
                              <img className={styles.CardImg} src={allProduct.image} />
                            </div>
                            <div className={styles.CardTitle}>
                              <div className={styles.CardContent} >
                                <h2>
                                  {allProduct.bookName}
                                </h2>
                              </div>
                              <div className={styles.CardPrice}>
                                <span>{allProduct.bookPrice},000đ</span>
                              </div>
                              <div className={styles.CardRating}>
                                sao
                              </div>
                            </div>
                        </div>
                    </Grid>
                  ))}
                </Grid>
              </div>
            </div>

            {/* phân trang */}
            <Pagination/>
          </Grid>
        </Grid>
        
      </div>
    </div>
  );
}

export default Products;
