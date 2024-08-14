import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import MainpageLayout from './MainpageLayout';
import { useSelector } from 'react-redux';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);
  const productDetails = useSelector((state) => state.productDetails.item);

  return (
    <MainpageLayout className=" w-auto" >
        <nav className="breadcrumb mt-[80px]">
      <ul className="flex">
        <span className="breadcrumb-item">
          <Link to="/">Home</Link> &nbsp;/ &nbsp;
        </span>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const isProductPage = pathnames[0] === 'products' && index === 1;
          return (
            <span key={to} className="breadcrumb-item ">
              {isLast ? (
                 <span className='font-semibold'>{isProductPage && productDetails ? productDetails.title : value}</span>
              ) : (
                <Link to={to}>{value} &nbsp;/ &nbsp; </Link>
              )}
            </span>
          );
        })}
      </ul>
    </nav>
    </MainpageLayout>
  );
};
export default Breadcrumb