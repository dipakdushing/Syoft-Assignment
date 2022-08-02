import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Indi = () => {
    const {id} =useParams();

    const [product,setProduct] = useState({})
    const navigate = useNavigate();
    useEffect(()=>{
        getData();
    },[id])

    const getData=()=>{
            axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
            console.log("res", res.data);
            setProduct(res.data);
        });
    }



    return (
        <div>
            <img src={product.image} alt="" />
            <p>{product.title}</p>
        </div>
    );
};

