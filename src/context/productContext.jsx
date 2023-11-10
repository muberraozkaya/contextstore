import axios from "axios";
import { createContext, useEffect, useState } from "react";

/*
 * Context API
 * Uygulamada birden çok bileşenin ihtiyacı  olan verileri
 * Bilşenlerde bağımsız bir şekilde konumlanand merkezlerde
 * yönetmeye yarar. Verileri ve verileri değiştirmeye yararyan
 * fonksiyonları tutarız.
 * Context, tututğumuz bu değişkenleri bileşeneler doğrudan aktarım
 * yapabilen Merkezi State Yötenim Aracıdır.
 */

//!context yapısının temelini oluşturma
export const ProductContext = createContext();

//!Sağlayıcı ve onun tuttuğu verileri tanımlama
export function ProductProvider({ children }) {
  const [products, setProducts] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  //bileşen ekrana basıldığı anda
  //*bu fonsiyon ilk ekrana basıldığında ve bağımlılık 
  //*dizi selectedCategory olduğu için o her güncellendiğinde çalışır.
  useEffect(() => {
    // kategori yoksa atıcağı istek linki:
    // https://fakestoreapi.com/products
    // kategori varsa:
    // https://fakestoreapi.com/products/category/category_ismi
    axios
      .get(
        `https://fakestoreapi.com/products${
          selectedCategory ? "/category/" + selectedCategory : ""
        }`
      )
      .then((res) => setProducts(res.data));
  }, [selectedCategory]);

  //context yapısında tuttuğumuz verileri bilenşenlerda kullanım sağlar
  //aktarmak iştediğin verileri value ile veririsin
  return (
    <ProductContext.Provider
      value={{ products, setSelectedCategory}}
    >
      {children}
    </ProductContext.Provider>
  );
}
