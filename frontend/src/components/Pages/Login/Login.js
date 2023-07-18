  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Login.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { loginUser } from '../../../redux/apiRequest';
import { useDispatch } from 'react-redux';

function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => loginUser(data,dispatch,navigate);
    return (
        <div className="Login">
            <form className='FormLogin' onSubmit={handleSubmit(onSubmit)}>
                <img className="Logo" src="Logo.svg"></img>
                <p>Chào Mừng bạn!</p>
                <h1>Đăng Nhập</h1>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email của bạn"
                    {...register('email', { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}
                ></input>
                <label className="password" htmlFor="password">
                    Mật khẩu{' '}
                    <NavLink className="forgotpassword" to="/forgotPassWord">
                        Quên mật khẩu?
                    </NavLink>
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Mật khẩu của bạn"
                    {...register('password', { required: true, minLength: 6 })}
                ></input>

                {Object.keys(errors).length !== 0 && (
                    <ul className="error-container">
                        {errors.email?.type === 'required' && <li>Bạn Chưa Nhập Email</li>}
                        {errors.email?.type === 'pattern' && <li>Bạn Chưa Nhập Đúng Email</li>}
                        {errors.password?.type === 'required' && <li>Bạn Chưa Nhập Mật Khẩu</li>}
                        {errors.password?.type === 'minLength' && <li>Mật Khẩu Phải Nhiều Hơn 6 Kí Tự</li>}
                    </ul>
                )}
                

                <button className="submit">
                    ĐĂNG NHẬP <FontAwesomeIcon icon={faArrowRight} />
                </button>
                <p className="textregister">
                    Bạn chưa có tài khoản <NavLink to="/register">Đăng kí</NavLink>
                </p>
            </form>
        </div>
    );
}

export default Login;
