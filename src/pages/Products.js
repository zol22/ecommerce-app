import React, { useEffect, useState } from 'react'

function Products() {

    const [ data, setData ] = useState([]);
    const [filterData, setFilterData ] = useState(data); // Is inital value is the data to display all the data at first
    const [loading, setLoading ] = useState(false);
    let componentMount = true;

    useEffect(() => {
        const getProducts = async() => {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            if (componentMount){
                setData(await response.clone().json());
                setFilterData(await response.json());
                setLoading(false)
            } 
            return () => {
                componentMount = false;
            }
        }
        getProducts();
    },[])

  return (
    <div>Products</div>
  )
}

export default Products