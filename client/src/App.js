
import { Box } from '@mui/material'
import { BrowserRouter, Routes ,Route } from 'react-router-dom';


import Header from './component/header/Header.jsx';
import Home from './component/home/Home.jsx'
import DataProvider from './context/DataProvider.jsx';
import DetailView from './component/details/DetailView.jsx'; 
import Cart from './component/cart/Cart.jsx'

function App() {
  return (
    <DataProvider>
     <BrowserRouter>
        <Header/>
      <Box style={{marginTop:54}}>
          <Routes>
            <Route path= '/' element={<Home />} />
            <Route path= '/product/:id' element={<DetailView />} />
            <Route path= '/Cart' element={<Cart />} />
         </Routes>
      </Box>
       </BrowserRouter>
    </DataProvider>
  );
}

export default App;
