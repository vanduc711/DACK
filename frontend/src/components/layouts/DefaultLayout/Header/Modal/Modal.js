
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import styles from './Modal.module.scss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Modal({setModal}) {

    const User = useSelector((state) => state.auth.login.currentUser);
    const navigate = useNavigate();

    const handleAddBooks = () => {
        navigate('/addBooks');
        setModal(false);
    }

    const handleManageBooks = () => {
        navigate('/manageBooks');
        setModal(false);
    }

    const HandleLogout = () => {
        window.location.reload(false);
    }


    return (
        <div className={styles.Modal} >
            <div className={styles.ModalContainer} >
                <div onClick={() => setModal(false)} className={styles.ModalButton}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </div>
                <div className={styles.ModalInformation}>
                    <h2>Thông tin tài Khoản</h2>
                    <span>Tên: {User.staff.username}</span>
                    <span>email: {User.staff.email}</span>
                    <span>Chức vụ: {User.staff.admin ? 'admin' : 'thành viên'}</span>
                </div>
                {User.staff.admin && 
                (<div className={styles.ModalAdmin}>
                    <button onClick={handleAddBooks} >Thêm Sách</button>
                    <button onClick={handleManageBooks} >Quản Lý Sách</button>
                </div>)
                }
                <div onClick={HandleLogout} className={styles.ModalLogout}>
                    <span>LogOut</span>
                </div>
            </div>
        </div>
    )
}

export default Modal;