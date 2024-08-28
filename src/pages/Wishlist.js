import React, { useState ,useEffect} from 'react'
import MainpageLayout from '../components/MainpageLayout'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../components/card/Card'
import { productsDetails } from "../state/actions/productsDetails";
import { addItem } from '../state/reducer/products/cartProduct';
import toast from 'react-hot-toast';

const Wishlist = () => {

    const {items} = useSelector((state)=>state.likedProducts)
    console.log(items)
  const [productData, setProductData] = useState([]);
  const { item: productDetail } = useSelector(
    (state) => state.productDetails
  );

  const dispatch = useDispatch();
  useEffect(() => {
    console.log(items)
        const temp = productData?.filter((product)=>items.includes(product.id) )
        setProductData(temp)
        console.log(temp)
    items.forEach((item) => {

     
        dispatch(productsDetails(item));

    });
  }, [ items ]);

 
  useEffect(() => {
    if (productDetail) {
        // console.log(productData?.some((products)=>productsDetails.id!==productData.id));
      
        
        
        if(!productData.some((product)=>product.id===productDetail.id)){
setProductData((prevData) => [...prevData, productDetail]);
        
        
        
      }
    }
  }, [productDetail]);
  
    console.log(productData)
 

    const handleClick=()=>{
       if(productData.length>0){
        productData.forEach((item)=>{
            const newItem = {
                productId:item.id,
                quantity:1
              }
          
              dispatch(addItem(newItem))
              
        })
        toast.success("Added to Cart")
       }
       else toast("No Liked Products")
    }

  return (
    <MainpageLayout>
        <div className='mt-8  w-full'>
        <div className='flex w-full  justify-between'>
        <h2 className='text-[20px] font-poppins'> Wishlist</h2>
        <button onClick={handleClick} className='buttons'>Move to Cart</button>
        </div>
        <div className='flex flex-wrap mt-[60px] justify-center gap-[30px] mb-[140px]'> 
            {
              productData?.length ? <>{productData?.map((item)=>(<div ><Card product={item} isDelete='true'/></div>))}</>:<div className='my-[5rem] text-4xl '> No liked Products </div>
            }
        </div>
        </div>
    </MainpageLayout>
  )
}

export default Wishlist