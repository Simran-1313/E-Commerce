import React, { useState, useEffect } from "react";
import MainpageLayout from "../components/MainpageLayout";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/card/Card";
import { productsDetails } from "../state/actions/productsDetails";
import { addItem } from "../state/reducer/products/cartProduct";
import toast from "react-hot-toast";
import { removeLikedItem } from "../state/reducer/products/likedProducts";
import Loader from "../components/loader/Loader"

const Wishlist = () => {
  const { items } = useSelector((state) => state.likedProducts);
  console.log(items);
  
  const [productData, setProductData] = useState([]);
  const { item: productDetail ,loading } = useSelector((state) => state.productDetails);

  const dispatch = useDispatch();
  const handleDispatch=(id)=>{
    dispatch(removeLikedItem(id));
    setProductData((prevData) => prevData.filter((product) => product.id !== id));
   
   
  }
  //   useEffect(() => {
  //     console.log(items)
  //         const temp = productData?.filter((product)=>items.includes(product.id) )
  //         setProductData(temp)
  //         console.log(temp)
  //     items.forEach((item) => {

  //         dispatch(productsDetails(item));

  //     });
  //   }, [ items ]);

  //   useEffect(() => {
  //     if (productDetail) {
  //         // console.log(productData?.some((products)=>productsDetails.id!==productData.id));

  //         if(!productData.some((product)=>product.id===productDetail.id)){
  // setProductData((prevData) => [...prevData, productDetail]);

  //       }
  //     }
  //   }, [productDetail]);
// useEffect(()=>{
//     list.forEach((item)=>dispatch(productsDetails(item))   
//     )
// },[items,handleDispatch])

// // useEffect(()=>{
// // setList(items)
// // },[handleDispatch])


// useEffect(()=>{
//     if(productDetail){
//         setProductData((prevData)=>[...prevData,productDetail])
//     }
// },[productDetail])

// useEffect(() => {
//     setProductData([]); 
//     items.forEach((item) => {
//       dispatch(productsDetails(item));
//       console.log(items)
//     });
//   }, [items]);


//   useEffect(() => {
//     if (productDetail && !productData.some((product) => product.id === productDetail.id)) {
//       setProductData((prevData) => [...prevData, productDetail]);
//     }
//   }, [productDetail ]);
useEffect(() => {
    
    items.forEach((itemId) => {
      dispatch(productsDetails(itemId));
    });
    console.log(items," while dispatching")
  }, [items, dispatch]);

  useEffect(() => {
    if (productDetail) {
        console.log(productDetail)
        if (items.includes(productDetail.id)) {
            setProductData((prevData) => {
              
              const existingProduct = prevData.find((product) => product.id === productDetail.id);
              if (!existingProduct) {
                return [...prevData, productDetail];
              }
              return prevData;
            });
          } else {
            
            setProductData((prevData) => prevData.filter((product) => product.id !== productDetail.id));
          }
    }
  }, [productDetail]);

 
  

  const handleClick = () => {
    if (productData.length > 0) {
      productData.forEach((item) => {
        const newItem = {
          productId: item.id,
          quantity: 1,
        };

        dispatch(addItem(newItem));
      });
      toast.success("Added to Cart");
    } else toast("No Liked Products");
  };

  return (
    <MainpageLayout>
      <div className="mt-8  w-full">
        <div className="flex w-full  justify-between">
          <h2 className="text-[20px] font-poppins"> Wishlist</h2>
          <button onClick={handleClick} className="buttons">
            Move to Cart
          </button>
        </div>
        {
          loading?<Loader/>:<div className="flex flex-wrap mt-[60px] justify-center gap-[30px] mb-[140px]">
          {productData?.length ? (
            <>
              {productData?.map((item) => (
                <div>
                  <Card product={item} isDelete="true" handleDispatch={handleDispatch} />
                </div>
              ))}
            </>
          ) : (
            <div className="my-[5rem] text-4xl "> No liked Products </div>
          )}
        </div>
        }
      </div>
    </MainpageLayout>
  );
};

export default Wishlist;
