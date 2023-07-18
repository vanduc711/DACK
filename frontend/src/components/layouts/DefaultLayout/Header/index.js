import {Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass, faUser, faCartShopping} from '@fortawesome/free-solid-svg-icons';
import {useDispatch, useSelector} from 'react-redux';
import { useState } from 'react';
import Modal from './Modal/Modal';
import { search } from '../../../../redux/productsSlice';

function Header() {

    const User = useSelector((state) => state.auth.login.currentUser);

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [searchValue, setSearch] = useState('')

    // modal
    const [modal, setModal] = useState(false);

    console.log(searchValue);

    const handleSubmitEnter = (e) => {
        if(e.key === 'Enter') {
            dispatch(search(searchValue))
            navigate('/sanpham')
        }
    }

    const handleSubmitClick = () => {
        dispatch(search(searchValue))
        navigate('/sanpham')
    }

    return (
      <header className={styles.Wrapper}>
        <div className={'Content CenterFlex'}>
            <div className={styles.Logo} >
                <Link to='/'> 
                    <img className={styles.LogoImg} src="https://cdn0.fahasa.com/skin/frontend/ma_vanese/fahasa/images/logo/fahasa_logo.png" alt="Anybooks - Sách Hay Nên Đọc - Review Sách" title="Anybooks - Sách Hay Nên Đọc - Review Sách"/></Link>
                <Link/>
            </div>
            <div className={styles.Option}>
                <Link to='/sanpham'>
                    Sản Phẩm
                </Link>
                <Link to='/lienhe'>
                    Liên Hệ
                </Link>
            </div>
            <div className={styles.Search}>
                <input className="input_search" onKeyDown={(e) => handleSubmitEnter(e)} onChange={(e) => setSearch(e.target.value)} placeholder='Search' spellCheck={false} />
                <button onClick={() => handleSubmitClick()} className={styles.SearchBtn} >
                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                </button>
            </div>
            <div className={styles.Action}>
                {User ? 
                <button className={styles.ActionUser}>
                    <FontAwesomeIcon icon={faUser}/>
                    <span onClick={() => setModal(true)} >{User.staff.username}</span>
                </button>    
                :
                <div style={{paddingLeft: '28px'}} className={styles.ActionUser}>  
                    <Link style={{textDecoration: 'none',color:'black'}} to='/login' >Đăng Nhập</Link>
                </div>
                }
                <button onClick={() => navigate('/carts')} id= "icon_cart" className={styles.ActionCart}>
                    <FontAwesomeIcon icon={faCartShopping}/>
                </button>
            </div>
        </div>

        {modal && <Modal setModal={setModal} />}
      </header>
    );
  }
  
  export default Header;