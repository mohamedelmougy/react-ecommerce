import React from 'react'
import BrandContainer from '../../Components/Brand/BrandContainer';
import Pagination from './../../Components/Utility/Pagination';
import AllBrandHook from '../../hook/brand/all-brand-page-hook';


const AllBrandfPage = () => {
  const [brand, loading, pageCount, getPage] =AllBrandHook();
  return (
    <div style={{minHeight:"670px"}}>
      <BrandContainer data={brand?.data} loading={loading}/>
      <Pagination pageCount={pageCount} onPress={getPage}/>
    </div>
  )
}

export default AllBrandfPage; 
