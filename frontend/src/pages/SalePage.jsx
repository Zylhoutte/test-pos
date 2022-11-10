import {useEffect} from 'react'
import * as React from 'react';
import Drawer from '../components/Drawer'
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {useSelector , useDispatch} from 'react-redux'
import Products from '../components/ProductsCard'
import ProductList from '../components/ProductList'
import ProductsCard from '../components/ProductsCard';
import ProductsData from '../data/ProductsData';
import Todoinput from '../components/TodoInput'
import Cart from '../components/Cart'









const Analytics = () => {
  const [setProductData] = useState([])
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user} = useSelector((state) => state.auth)

 

  useEffect(()=>{
      if(!user) {
        navigate('/login')
      }
  },[user, navigate]);

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 150,
    maxWidth: 345
    
  }));



  return (
    <>

    <Drawer/>   
    <h1>Analytics</h1>
            
    </>
  )
}

export default Analytics
