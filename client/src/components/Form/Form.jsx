import React, { useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { validate } from "./validate";
import axios from "axios";
import styles from "./Form.module.css";
import { getAllCategories } from "../../redux/action"



export const Form = () => {
    const dispatch = useDispatch();
  
    useEffect(()=>{
        dispatch(getAllCategories());
    }, [dispatch]);

    const [formComplete, setFormComplete] = useState(false);

    const allCategory = useSelector((state) => state.allCategories.sort((a, b) => a.name.localeCompare(b.name))
  );

    const [formData, setFormData] = useState({
        image: "",
        name: "",
        description: "",
        price: 0,
        stock: 0,
        category: {id: "", name: ""},  //SI NO FUNCIONA CAMBIAR ESTO!@!!
    })
    const [errors, setErrors] = useState({
        image: "",
        name: "",
        description: "",
        price: 0,
        stock: 0,
        category: [],  //SI NO FUNCIONA CAMBIAR ESTO!@!!
    })

    useEffect(() => {
        const checkFormComplete = () => {
          const { name, description, price, stock, category} = formData;
          if (!name || !description || !price || !stock || !category ) {
            setFormComplete(false);
          } else {
            setFormComplete(true);
          }
        };
        checkFormComplete();
      }, [formData]);

    const handleChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;
        setErrors(validate({...formData, [property]: value}));
        setFormData({
            ...formData,
            [property]: value,
        });
    };


    const handleCategoryChange = (event) => {
        const selectedCategoryId = event.target.value;
        const selectedCategory = allCategory.find(category => category.id === parseInt(selectedCategoryId));
        setErrors(validate({...formData, category: selectedCategory}));
        setFormData((prevFormData) => ({
            ...prevFormData,
            category: selectedCategory
        }));
    };
/*
    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        setErrors(validate({...formData, category: selectedCategory}));
        setFormData((prevFormData) => ({
            ...prevFormData,
            category: selectedCategory
        }));
    };
*/
    const clearForm = () => {
        setFormComplete(false);
        setFormData({
            image: "",
            name: "",
            description: "",
            price: 0,
            stock: 0,
            category: [],
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (formComplete){
            const response = await axios.post("http://localhost:3001/products", formData); // Update
            alert(response.data);
            clearForm();
        }
    };

return (
    <div>
    <form className={styles.creationForm} onSubmit={handleSubmit}>
        <div>
            <h2 className={styles.formTitle}>Create Your Product</h2>
        <div>
            <label className={styles.formLabel} >Name</label>
            <input
            className={styles.formInput}
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            />
            {errors.name && <span className={styles.formError}>{errors.name}</span>}
        </div>
        <div>
            <label className={styles.formLabel} >Description</label>
            <input
            className={styles.formInput}
            type="text"
            name="description"
            placeholder="Product Description"
            value={formData.description}
            onChange={handleChange}
            />
            {errors.description && <span className={styles.formError}>{errors.description}</span>}
        </div>

        
      <div>
        <label className={styles.formLabel}>Image</label>
        <input
          className={styles.formInput}
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />
        {errors.image && <span className={styles.formError}>{errors.image}</span>}
      </div>

      <div>
        <label className={styles.formLabel}>Price</label>
        <input
          className={styles.formInput}
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        {errors.price && <span className={styles.formError}>{errors.price}</span>}
      </div>

      <div>
        <label className={styles.formLabel}>Stock</label>
        <input
          className={styles.formInput}
          type="number"
          name="stock"
          placeholder="Stock"
          value={formData.stock}
          onChange={handleChange}
        />
        {errors.stock && <span className={styles.formError}>{errors.stock}</span>}
      </div>

      <div>
        <label className={styles.formLabel}>Category</label>
        <select
          className={styles.formSelect}
          name="category"
          value={formData.category.id}
          onChange={handleCategoryChange}
        >
          <option value="" hidden>
            Select Category
          </option>
          {/* Mapping categories from your backend */}
          {allCategory.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        {errors.category && (
          <span className={styles.formError}>{errors.category}</span>
        )}
      </div>
      <div className={styles.formLabel1}>
              Selected Category:
              {formData.category && formData.category.id ? (
                <span className={styles.selectedCategory}>{formData.category.name}</span>
                ) : (
        <span className={styles.selectedCategory}>None selected</span>
            )}
        </div>
        <div>
              <button
                className={styles.formButton}
                type="submit"
                disabled={!formComplete}
              >
                Create Product
              </button>
              <button className={styles.formButton} type="button" onClick={clearForm}>
                Clear All
              </button>
            </div>
        </div>
    </form>
 </div> 
 );
};

