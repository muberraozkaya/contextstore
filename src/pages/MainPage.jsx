import Loading from "./../components.jsx/Loading";
import Card from "../components.jsx/Card";
import { useContext } from "react";
import { ProductContext } from "../context/productContext";
const MainPage = () => {
//context yapısına abone olmak
//*bu durumda context yapısında value 
//*olarak belirlenen verilere erişim sağlarız
const {products} = useContext(ProductContext);

  //console.log(products);
  return (
    <div className="container d-flex flex-wrap justify-content-center justify-content-md-between gap-3 gap-md-4">
      {/*veri gelmezse ekrana loading bas 
        !products:yoksa demek*/}
      {!products && <Loading />}
      {/*products?:varsa demek (conditional chaining) 
        veriler geldiyse her biri için kart bas*/}
      {products?.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default MainPage;
