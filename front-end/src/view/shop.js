import React, { useState, useEffect } from 'react';
import { api } from '../components/WooCommerce';
import styled from 'styled-components';
import { H3, P } from '../components/typo';
import ProductList from '../components/ProductList';
import Layout from '../components/Layout';

// const ColorDiv = styled.div`
//     width: 100vw;
//     background-color: #F7F7F7;
// `;

const ListDiv = styled.div`
    width: 100vw;
    padding-top: 12.7vh;
    display: flex;
    justify-content: flex-start;
`;

const ProductDiv = styled.div`
    width: 63vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;    
`;

const CategoryDiv = styled.div`
    width: 63vw;
    height: 2vh;
    margin-left: 1vw;
    display: flex;
    justify-content: flex-start;
`;

const CategoriesStyled = styled.div`
    width: 12vw;
    margin-top: 2vh;
    margin-left: 5.9vw;
`;

const UlStyled = styled.ul`
    list-style: none;
`;

const ListStyled = styled.li`
    text-decoration: none;
`;

const Shop = () => {
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [category, setCategory] = useState('NEW ARRIVALS');
    const [categoryId, setCategoryId] = useState(null);
    const [slug, setSlug] = useState([]);

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

    useEffect(() => {
        api.get('products', {
                per_page: 20, // 20 products per page
            })
            .then((response) => {
                setSlug(response.data)
            })
            .catch((error) => {
                // Invalid request, for 4xx and 5xx statuses
                // console.log('Response Status:', error.response.status);
                // console.log('Response Headers:', error.response.headers);
                // console.log('Response Data:', error.response.data);
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

    useEffect(() => {
        document.title = `${category}`;
    });

    const clickProduct = (slug) => {
        window.location = `/product/${slug}`
    };

    // console.log('category', category);
    // console.log(categories);
    // console.log(subCategories);
    return(
        <Layout>
            <ListDiv>
                <CategoriesStyled>
                    {categories.map(category => (
                        <UlStyled>
                            <ListStyled 
                                key={category.id} 
                                onClick={() => {
                                    toggleCategory(); 
                                    setCategory(category.name); 
                                    setCategoryId(category.id)} }
                                    >
                                    <P text={category.name} fontWeight='bold' />
                            </ListStyled>
                        </UlStyled>
                    ))}
                </CategoriesStyled >
                <ProductDiv>
                    <CategoryDiv>
                        <H3 text={category} fontSize='20px' fontWeight='500'/>
                    </CategoryDiv>
                    <ProductList categoryId={categoryId} onClick={clickProduct}/>
                </ProductDiv>
            </ListDiv>
        </Layout>
    );
}

export default Shop;