import React, { useEffect, useState } from "react";
import { usePostProductMutation } from "../../context/api/productApi";

const initialState = {
    title: "",
    price: "",
    url: "",
    category: "",
};

const Create = () => {
    const [formData, setFormData] = useState(initialState);

    const [createProduct, { data, isLoading, isError, isSuccess, error }] =
        usePostProductMutation();

    const handleChange = (e) => {
        let { name, value } = e.target;
        if (name === "price") {
            setFormData((prev) => ({ ...prev, [name]: +value }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    useEffect(() => {
        if (isSuccess) {
            setFormData(initialState);
        }
    }, [isSuccess]);

    const handleSubmit = (e) => {
        e.preventDefault();
        createProduct(formData);
    };

    console.log(data);
    console.log(error);
    return (
        <form onSubmit={handleSubmit}>
            <h2>Create</h2>
            {Object.keys(initialState)?.map((inp) => (
                <input
                    key={inp}
                    className={`form__input ${inp}`}
                    type={inp === "price" ? "number" : "text"}
                    name={inp}
                    placeholder={inp}
                    value={formData[inp]}
                    onChange={handleChange}
                />
            ))}
            <button>Create</button>
        </form>
    );
};

export default Create;
