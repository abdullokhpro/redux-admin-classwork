import React, { useEffect } from "react";
import {
    useDeleteProductMutation,
    useGetProductsQuery,
} from "../../context/api/productApi";

const Product = () => {
    let { data, isLoading, isError, isSuccess } = useGetProductsQuery();
    //    console.log( data );
    const [
        deleteProduct,
        { data: deletedData, error: deletedError, isLoading: deletedIsLoading },
    ] = useDeleteProductMutation();

    useEffect(() => {
        if (isError) {
            alert("Error");
        }
        // if(isSuccess){
        //     alert("OK")
        // }
    }, [isError, isSuccess]);
    console.log(data);

    return (
        <div>
            <h2>Product</h2>
            {isLoading ? <h2>Loading...</h2> : <></>}
            <div className="wrapper">
                {data?.map((el) => (
                    <div key={el.id}>
                        <p>{el.title}</p>
                        <button onClick={() => deleteProduct(el.id)}>
                            delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
