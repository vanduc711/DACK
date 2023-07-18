import { NavLink } from "react-router-dom";
import "./footer.css"
function Footer() {
    return (
      <div className="Footer">
            <div className="Logo">
            <img className="Logo" src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/logo/fahasa_logo.png" alt="Anybooks - Sách Hay Nên Đọc - Review Sách" title="Anybooks - Sách Hay Nên Đọc - Review Sách"></img>
            </div>
            
            <div className="Content-Book">
              <ul>
                <li><a>Nổi Tiếng</a></li>
                <li><a>Lập Trình</a></li>
                <li><a>Sách Cho Trẻ Em</a></li>
                <li><a>Tâm Lý</a></li>
                <li><a>Việc Kinh Doanh</a></li>
              </ul>
            </div>
            <div className="Content-Tranform">
              <ul>
                <li><a>Thông Tin</a></li>
                <li><a>Vận Chuyển</a></li>
                <li><a>Thanh Toán</a></li>
                <li><a>Về Cửa Hàng</a></li>
              </ul>
            </div>
            <div className="Content-Help">
              <ul>
                <li><a>Trợ Giúp</a></li>
                <li><a>Liên Lạc</a></li>
                <li><a>Mua Hàng & Trả Lại</a></li>
                <li><a>Trợ Giúp Cho Người Mua</a></li>
              </ul>
            </div>
            <div className="Content-hotPhone">
              <ul>
                <li><p>+0366 9311 95</p></li>
                <li><a>Đường dây nóng</a></li>
              </ul>
            </div>
            <div className="End-Page">
            Tất cả các quyền © 2003-2021 LIBRARY Điều khoản sử dụng | Chính sách bảo mật
          </div>
        </div>
    );
}  
  export default Footer;