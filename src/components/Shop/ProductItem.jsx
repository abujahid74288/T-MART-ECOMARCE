import React, { useEffect, useState } from 'react';
import ProductCard from '../UI/ProductCard'; 
import axios from 'axios';


const API_BASE_URL = 'https://dummyjson.com/products';

const ProductItem = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [categories] = useState([
        "all",
        "furniture",
        "fragrances",
        "womens-bags",
        "sports-accessories"
    ]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [pagination, setPagination] = useState({
        total: 0,
        skip: 0,
        limit: 20,
    });
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(false);
        setLoading(true);

        const categoryPath = selectedCategory && selectedCategory !== "all" ? `/category/${selectedCategory}` : '';
        const url = `${API_BASE_URL}${categoryPath}?limit=${pagination.limit}&skip=${pagination.skip}`;

     
        axios.get(url)
            .then((res) => {
                setProducts(res.data.products);
                setPagination({
                    total: res.data.total,
                    skip: res.data.skip,
                    limit: parseInt(res.data.limit, 10), 
                });
                setLoading(false);
               
                setTimeout(() => setAnimate(true), 50);
            })
            .catch(error => {
                console.error("Failed to fetch products:", error);
                setLoading(false);
                setProducts([]);
            });
    }, [selectedCategory, pagination.skip, pagination.limit]);

    
    const handleCategoryChange = (item) => {
        const newCategory = item === "all" ? "" : item;
        setSelectedCategory(newCategory);
        setPagination(prev => ({ ...prev, skip: 0 }));
    };

   
    const handleLimitChange = (e) => {
        const newLimit = parseInt(e.target.value, 10);
        setPagination(prev => ({ 
            ...prev, 
            limit: newLimit,
            skip: 0, 
        }));
    };

   
    const goToPreviousPage = () => {
        setPagination(prev => ({ 
            ...prev, 
            skip: Math.max(prev.skip - prev.limit, 0) 
        }));
    };

    const goToNextPage = () => {
        setPagination(prev => ({ 
            ...prev, 
            skip: prev.skip + prev.limit 
        }));
    };
    
    const isPrevDisabled = pagination.skip === 0;
    const isNextDisabled = pagination.skip + pagination.limit >= pagination.total;

   
    const SkeletonCard = ({ key }) => (
        <div key={key} className="bg-white p-4 rounded-lg shadow-lg h-[350px] space-y-3 border border-gray-100 animate-pulse">
            <div className="w-full h-[180px] bg-gray-200 rounded-md"></div>
            <div className="px-1 space-y-2">
                <div className="h-4 w-1/4 bg-gray-200 rounded"></div>
                <div className="h-5 w-3/4 bg-gray-200 rounded"></div>
                <div className="h-6 w-1/3 bg-gray-200 rounded"></div>
            </div>
        </div>
    );
    

    return (
        <section className='my-[100px] bg-background'>
            <div className="container mx-auto max-w-7xl px-4">
                <div className='pt-32 pb-4'>

                    {/* Categories & Limit */}
                    <div className='pb-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0'>
                        <ul className='grid grid-cols-2 md:flex gap-4 md:gap-10 text-sm md:text-base'>
                            {categories.map(item => (
                                <li key={item}>
                                    <button
                                        onClick={() => handleCategoryChange(item)}
                                        className={`
                                            ${(item === "all" ? selectedCategory === "" : item === selectedCategory) ? 
                                                "text-purple-600 font-semibold border-b-2 border-purple-600" : 
                                                "text-gray-600 hover:text-purple-500"} 
                                            capitalize cursor-pointer transition-all duration-300 py-1
                                        `}
                                    >
                                        {item.replace('-', ' ')}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <select 
                            className='text-primary outline-none bg-white border px-3 py-1 rounded-lg shadow-sm' 
                            value={pagination.limit}
                            onChange={handleLimitChange}
                        >
                            <option value="20">20</option>
                            <option value="60">60</option>
                            <option value="100">100</option>
                        </select>
                    </div> 
                    
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10'>
                        {loading ? (
                            [...Array(parseInt(pagination.limit, 10))].map((_, index) => (
                                <SkeletonCard key={index} />
                            ))
                        ) : (
                            products.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="bg-white p-2 rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-transform transition-shadow duration-500 ease-out"
                                    style={{
                                        opacity: animate ? 1 : 0,
                                        transform: animate ? 'translateY(0px)' : 'translateY(30px)',
                                        transitionDelay: `${index * 70}ms`,
                                    }}
                                >
                                    <ProductCard data={item} />
                                </div>
                            ))
                        )}
                    </div>

                    {/* Pagination */}
                    <div className='mt-16 flex flex-col sm:flex-row justify-center items-center gap-4'>
                        <button
                            onClick={goToPreviousPage}
                            disabled={isPrevDisabled || loading}
                            className={`
                                px-6 py-2 border rounded-full font-medium transition duration-300
                                ${isPrevDisabled || loading ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-white text-purple-600 border-purple-600 hover:bg-purple-50'}
                            `}
                        >
                            Previous
                        </button>
                        <span className='text-gray-600 text-sm'>
                            Page {Math.floor(pagination.skip / pagination.limit) + 1} of {Math.ceil(pagination.total / pagination.limit)}
                        </span>
                        <button
                            onClick={goToNextPage}
                            disabled={isNextDisabled || loading}
                            className={`
                                px-6 py-2 border rounded-full font-medium transition duration-300
                                ${isNextDisabled || loading ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-purple-600 text-white border-purple-600 hover:bg-purple-700'}
                            `}
                        >
                            Next
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProductItem;