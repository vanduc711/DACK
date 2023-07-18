import React, { useRef, useState } from 'react';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import "./Trailer.css"
// import required modules
import { Pagination } from 'swiper';
function Trailer() {
    return (
        <div className="Slide">
            <div className="Content_Slide">
                <h1>NAPOLEON HILL</h1>
                <h4>“ĐƯỜNG ĐẾN THÀNH CÔNG”</h4>
                <p>
                    15 biển báo từ Napoleon Hill giúp bạn không bị lạc đường trên hành trình tìm kiếm sự thành công
                    trong cuộc sốngTại sao thành công luôn mỉm cười với tất cả mọi người, còn với mình thì lại không?
                    Tại sao việc đạt được điều bản thân mong muốn luôn trông dễ dàng với người khác, còn mình dù có nỗ
                    lực bao nhiêu thì hai từ “thành công” vẫn cứ xa tầm với?
                </p>
            </div>
            <div className="swipers">
                <img className="backgroundSlide" src="SLide.svg" />
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="image7.svg"></img>
                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
                <div className="description_book">
                    <h4>Đường Đến Thành Công</h4>
                    <p>
                        “Đường đến thành công” là cuốn sách chứa đựng những ghi chép của Napoleon Hill, về những giá trị
                        cốt lõi mà ông đã tìm thấy và chiêm nghiệm được khi theo đuổi sự thành công.
                    </p>
                    <span>120.000</span>
                </div>
            </div>
        </div>
    );
}
export default Trailer;
