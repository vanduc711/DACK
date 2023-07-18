import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Trainding.css';

// import required modules
import { Pagination, Navigation } from 'swiper';
import { getProductsItem } from '../../../../redux/apiRequest';
import { useNavigate } from 'react-router-dom';

export default function Trainding() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const AllProducts = useSelector((state) => state.products.productsHold.allProducts);

    const ProductsTraindings = AllProducts.filter(trend => trend.top === true);

    const handleGetItem = (id) => {
        getProductsItem(dispatch, id,navigate)
    }

    return (
        <div className="Trainding">
            <div className="Content_trainding">
                <h2>Thịnh Hành</h2>
                <p>Giả tưởng và khoa học viễn tưởng</p>
                <p>Truyền cảm hứng</p>
                <p>Truyền ngắn</p>
                <p>Bí ẩn</p>
                <p>Tình cảm</p>
            </div>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {ProductsTraindings.map((ProductsTrainding,index) => (
                    <SwiperSlide key={index} >
                        <div onClick={() => handleGetItem(ProductsTrainding._id)} className="product_trainding">
                            <img src={ProductsTrainding.image}></img>
                            <span className="price">{ProductsTrainding.bookPrice},000đ</span>
                            <h4 className='products_trainding-title' >{ProductsTrainding.bookName}</h4>
                            <button>Mua Ngay </button>
                            <FontAwesomeIcon icon={faHeart} className="icon-heart" />
                        </div>
                    </SwiperSlide>
                ))}   
            </Swiper>
        </div>
    );
}
