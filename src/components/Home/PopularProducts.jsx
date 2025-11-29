import React, { useEffect, useState } from 'react'
import ProductCard from '../UI/ProductCard'
import axios from 'axios'
import Skeliton from '../UI/Skeliton'

const PopularProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [categories, setCategories] = useState([
        "all",
        "furniture",
        "fragrances",
        "womens-bags",
        "sports-accessories"
    ])
    const [selectedCategory, setSelectedCategory] = useState("")
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        setAnimate(false)
        setLoading(true)
        axios.get(`https://dummyjson.com/products${selectedCategory && "/category/" + selectedCategory}?limit=10`)
            .then((res) => {
                setProducts(res.data.products)
                setLoading(false)
                setTimeout(() => setAnimate(true), 50) // trigger animation
            })
    }, [selectedCategory])

    return (
        <section className='mt-[100px] pb-4 bg-background'>
            <div className="container px-4 md:px-0">

                {/* Header */}
                <div className='flex flex-col items-center text-center'>
                    <h2 className='pt-[100px] text-3xl md:text-4xl text-primary font-semibold'>Popular Products</h2>
                    <p className='max-w-[750px] pt-7 pb-20 text-base md:text-lg text-secondary'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod temp incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                {/* Categories */}
                <div className='pb-16'>
                    <ul className='grid grid-cols-2 sm:grid-cols-3 md:flex gap-4 md:gap-10 text-sm md:text-base'>
                        {categories.map((item) => (
                            <li key={item}>
                                <button
                                    onClick={() => setSelectedCategory(item === "all" ? "" : item)}
                                    className={`${item === selectedCategory ? "text-bagde font-semibold" : "text-primary"} capitalize cursor-pointer transition-all duration-300`}
                                >
                                    {item}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Product Grid with smooth animation + card style */}
                {loading ? (
                    <Skeliton />
                ) : (
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-4 sm:gap-x-7 gap-y-8'>
                        {products.map((item, index) => (
                            <div
                                key={item.id}
                                className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 ease-out"
                                style={{
                                    opacity: animate ? 1 : 0,
                                    transform: animate ? 'translateY(0px)' : 'translateY(30px)',
                                    transitionDelay: `${index * 100}ms`,
                                }}
                            >
                                <ProductCard data={item} />
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </section>
    )
}

export default PopularProducts


