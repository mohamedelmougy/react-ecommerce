import CategoryContainer from "../../Components/Category/CategoryContainer";
import Pagination from "../../Components/Utility/Pagination";
import AllCategoryHook from "../../hook/category/all-category-page-hook";

const AllCategoryPage = () => {
  const [category, loading, pageCount, getPage] = AllCategoryHook()
    
  return (
    <div style={{ minHeight: "670px" }}>
      <CategoryContainer data={category?.data} />

      {
        pageCount > 1?( <Pagination pageCount={pageCount} onPress={getPage} />)  :null
      }
     
    </div>
  );
};

export default AllCategoryPage;
