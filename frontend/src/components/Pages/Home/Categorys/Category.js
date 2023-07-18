import {NavLink } from 'react-router-dom';
import "./Category.css"
function Category() {

    return (
        <div className="Category">
            <div className="Content_Category">
                <h2>Thể Loại</h2>
                </div>
            <div className="Category_Container">
            
                <NavLink><div className='Category_item'>Giả Tưởng và khoa học viễn tưởng</div></NavLink>
                <NavLink><div className='Category_item'>Tình Cảm</div></NavLink>
                <NavLink><div className='Category_item'>Truyền Cảm Hứng</div></NavLink>
                <NavLink><div className='Category_item'>Truyện Ngắn</div></NavLink>
                <NavLink><div className='Category_item'>Bí Ẩn</div></NavLink>
                <NavLink><div className='Category_item'>Tiểu Luận</div></NavLink>
            </div>
        </div>
    )

}


export default Category;