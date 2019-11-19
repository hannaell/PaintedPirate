import React, { useState, useEffect } from 'react';
import { api } from '../WooCommerce';
import styled from 'styled-components';
import { P } from '../typo';

const CategoriesStyled = styled.div`
    width: 17.4vw;
    margin-top: 43vh;
    margin-left: 5.9vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* margin-left: 5.9vw; */
`;

const UlStyled = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    margin-bottom: 2.7vh;
`;

const ListStyled = styled.li`
    text-decoration: none;
`;

// api.get('products/categories', {
//         per_page: 20, // 20 products per page
//     })
//     // .then(res => res.json())
//     // .then((result) => {
//     //     this.setState({
//     //         isLoaded: true,
//     //         items: result.items
//     //     });
//     // })
//     .then((response) => {
//         // Successful request
//         console.log('Response Status:', response.status);
//         console.log('Response Headers:', response.headers);
//         console.log('Response Data:', response.data);
//         console.log('Total of pages:', response.headers['x-wp-totalpages']);
//         console.log('Total of items:', response.headers['x-wp-total']);
//     })
//     .catch((error) => {
//         // Invalid request, for 4xx and 5xx statuses
//         console.log('Response Status:', error.response.status);
//         console.log('Response Headers:', error.response.headers);
//         console.log('Response Data:', error.response.data);
//     })
//     .finally(() => {
//         // Always executed.
//     });

const ProductCategories = () => {
        const [categories, setCategories] = useState([]);
        const [subCategories, setSubCategories] = useState([]);
        const [toggle, setToggle] = useState(false);

        useEffect(() => {
            api.get('products/categories', {
                    per_page: 20, // 20 products per page
                })
                .then((response) => {
                    let categories = response.data.filter(category => {
                        return category.parent === 0;
                    });
                    setCategories(categories)
                    
                    let subCategories = response.data.filter(category => {
                        return category.parent !== 0;
                    });
                    setSubCategories(subCategories)
                })
                .catch((error) => {
                    // Invalid request, for 4xx and 5xx statuses
                    console.log('Response Status:', error.response.status);
                    console.log('Response Headers:', error.response.headers);
                    console.log('Response Data:', error.response.data);
                })
                .finally(() => {
                    // Always executed.
                });
        }, []);

        const toggleCategory = () => {
            if(toggle === false) {
                setToggle(true);
                
            } else if(toggle === true) {
                setToggle(false);
            }
        };

        const updateProducts = () => {
            
        }

        // let name;
        // const categoryInfo = () => {
        //     const parent = subCategories.map(subCategory => (
        //          subCategory.parent
                 
        //     ));

        //     const id = categories.map(category => (
        //         category.id
        //     ));

            
        //     if(id === parent){
        //         return name = subCategories.map(subCategory => (
        //             <li 
        //                 key={subCategory.id}
        //                 parent={subCategory.parent}
        //             >
        //                 {subCategory.name}</li>
        //         ))
        //     }
            
        // } 

        console.log(categories);
        console.log(subCategories);
        
    return(
        <CategoriesStyled>
            {/* {categories.map(category => (
                    <P  {...category} 
                        key = {category.id}
                        text = {category.name}
                    /> 
                    // ,console.log(category.parent)
                ))} */}
            {/* {categories.map(category => (
                // {...category.id === 0 } ?
                    <P  {...category} 
                        key = {category.id}
                        text = {category.name}
                    /> 
                    // ,console.log(category.parent)
                ))} */}
                {categories.map(category => (
                    <UlStyled>
                        <ListStyled 
                            key={category.id} 
                            // onClick={() => {toggleCategory()} }
                        >
                            <P text={category.name} fontWeight='bold' textTransform='uppercase' />
                        </ListStyled>
                        
                        {/* {toggle === true && 
                            
                            <>
                            {name}
                            </>

                            
                                //  {subCategories.map(subCategory => (
                                //     <li 
                                //         key={subCategory.id}
                                //         parent={subCategory.parent}
                                //     >
                                //     {subCategory.name}</li>
                                //     // ,console.log(subCategory.parent)
                                // ))} 
                        } */}
                    </UlStyled>
                ))}
        </CategoriesStyled >
    );
}

export default ProductCategories;
