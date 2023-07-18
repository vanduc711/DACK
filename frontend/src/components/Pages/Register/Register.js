import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Register.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { registerUser } from '../../../redux/apiRequest';
import { useDispatch } from 'react-redux';
function Register() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();
    const onSubmit = (data) => registerUser(
        {
        email: data.email, password: data.password, username: data.username
        },
        dispatch,
        navigate
        );
    const password = useRef({});
    password.current = watch('password', '');
    return (
        <div className="Register">
            <form className='FormRegister' onSubmit={handleSubmit(onSubmit)}>
                <img className="Logo" src="Logo.svg"></img>
                <p>Chào Mừng bạn!</p>
                <h1>Đăng Kí</h1>
                <label htmlFor="username">UserName</label>
                <input
                    type="username"
                    name="username"
                    id="username"
                    placeholder="Email của bạn"
                    {...register('username')}
                ></input>
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
                </label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Mật khẩu của bạn"
                    {...register('password', {
                        required: true,
                        minLength: {
                            value: 8,
                        },
                    })}
                ></input>
                <label className="confirmPassword" htmlFor="confirmPassword">
                    Nhập lại mật khẩu{' '}
                </label>
                <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Nhập lại mật khẩu"
                    {...register('confirmPassword', {
                        required: true,
                        minLength: 6,
                        validate: (value) => value === password.current,
                    })}
                ></input>
                {Object.keys(errors).length !== 0 && (
                    <ul className="error-container">
                        {errors.email?.type === 'required' && <li>Bạn Chưa Nhập Email</li>}
                        {errors.email?.type === 'pattern' && <li>Bạn Chưa Nhập Đúng Email</li>}
                        {errors.password?.type === 'required' && <li>Bạn Chưa Nhập Mật Khẩu</li>}
                        {errors.confirmPassword?.type === 'required' && <li>Bạn Chưa Lại Nhập Mật Khẩu</li>}
                        {errors.confirmPassword?.type === 'validate' && <li>Bạn Chưa Nhập Đúng Mật Khẩu</li>}
                        {errors.password?.type === 'minLength' && <li>Mật Khẩu Phải Nhiều Hơn 8 Kí Tự</li>}
                    </ul>
                )}

                <button className="submit">
                    Đăng Ký Tài Khoản <FontAwesomeIcon icon={faArrowRight} />
                </button>
                <p className="textregister">
                    Bạn chưa có tài khoản <NavLink to="/login">Đăng Nhập</NavLink>
                </p>
            </form>
        </div>
    );
}

export default Register;
