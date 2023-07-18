import { useDispatch, useSelector } from 'react-redux'
import { faAngleLeft,faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './Pagination.scss'
import { useState } from 'react';
import { nextBtn, prevBtn, update } from '../../../redux/productsSlice';

const Pagination = () => {

    const [active, setActive] = useState(1)
    const productsPanigation = useSelector((state) => state.products.productsPagination);
    const allProducts = useSelector((state) => state.products.productsHold.allProducts);
    const dispatch = useDispatch()

    const productIndex = []
    for(let i = 1; i <= Math.ceil((allProducts.length / productsPanigation.itemPerPage)); i++){
        productIndex.push(Number(i))
    }

    const handlePerPage = (e) => {
        dispatch(update(Number(e.target.textContent)))
        setActive(Number(e.target.textContent))
    }

    const handlePrev = () => {
        if(productsPanigation.currentPage > 1 ){
            dispatch(prevBtn())
            setActive(Number(active) - 1)
        }
    }

    const handleNext = () => {
        if(productsPanigation.currentPage < Math.ceil((allProducts.length / productsPanigation.itemPerPage))){
            dispatch(nextBtn())
            setActive(Number(active) + 1)
        }
    }

    return (
        <ul className='Pagination' >
            <li>
                <button className='ItemBtn' onClick={handlePrev} >
                    <FontAwesomeIcon icon={faAngleLeft}/>
                </button>
            </li>
            {productIndex.map(index => (
                <li className='ItemHoldBtn' key={index} >
                    <button className={`ItemBtn ${Number(active) === index ? 'active' : ''}`} onClick={(e) => handlePerPage(e)} >{index}</button>
                </li>
            ))}
            <li>
                <button className='ItemBtn' onClick={handleNext} >
                    <FontAwesomeIcon icon={faAngleRight}/>
                </button>
            </li>
        </ul>
    )
}

export default Pagination