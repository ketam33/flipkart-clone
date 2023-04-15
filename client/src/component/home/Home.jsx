
import { useEffect } from 'react';


import NavBarr from './NavBar';
import Banner from'./Banner';
import Slide from '../header/Slide';
import MidSlide from '../header/MidSlide';
import MidSection from '../header/MidSection';


import { Box, styled } from '@mui/system';

//import { getProducts } from '../../redux/actions/productAction';
import {getProducts}from '../../redux/actions/productAction.js';
import { useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';


const Component = styled(Box)`
  padding: 10px;
  background: #F2F2F2;
`


const Home = () => {

  //const getProducts = useSelector(State => S tate.getproducts);
      const {products} =  useSelector(state => state.getProducts);
  //const {products} = getProducts;
console.log(products);

    
  const dispatch = useDispatch();
  
  useEffect(() => {
   dispatch(getProducts())
  },[dispatch])



  return (
    <>  
    
    <NavBarr/>
    <Component>
    <Banner/>
         <MidSlide products={products} title="Deal of the Day" timer={true}/>
         <MidSection />
         <Slide products={products} title="Discount for You" timer={false}/>
         <Slide products={products} title="Suggesting items" timer={false}/>
         <Slide products={products} title="Top Section" timer={false}/>
         <Slide products={products} title="Recommented Iteam" timer={false}/>
         <Slide products={products} title="Treanding Offers" timer={false}/>
         <Slide products={products} title="Season's Top Pick" timer={false}/>
         <Slide products={products} title="Top Deal of the Accessories" timer={false}/>
         
    </Component>  
    </>
  );
}

export default Home;
