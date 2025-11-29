import React, { useEffect, useState } from 'react'
import Banner from './UI/Banner'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { FaGooglePlusG, FaRegStar, FaTwitter } from 'react-icons/fa6';
import Button from './UI/Button';
import { TiSocialInstagram } from 'react-icons/ti';
import { RiFacebookFill } from 'react-icons/ri';
import axios from 'axios';
import { useParams } from 'react-router';


const AddToCartPopup = ({ productName, show, onHide }) => {
    // Auto-hide logic after 2000ms (2 seconds)
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                onHide();
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [show, onHide]);

    const popupClasses = `
        fixed top-8 right-8 
        p-6 md:p-8                  
        rounded-2xl                 
        shadow-2xl 
        z-[9999] 
        text-white 
        flex items-center gap-4 
        min-w-[300px]
        
        // Stylish Gradient Background
        bg-gradient-to-br from-emerald-500 to-green-700
        
        // Animation (Slide-in effect)
        transition-all duration-500 ease-in-out
        ${show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'} 
        pointer-events-none
    `;

    if (!show) return null;

    return (
        <div className={popupClasses}>
           
            <svg 
                className="w-8 h-8 flex-shrink-0" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2.5" 
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
            </svg>
            
            <p className="text-xl font-medium">
                <span className="font-bold">{productName}</span> added to your cart!
            </p>
        </div>
    );
};


const ProductDetails = () => {
    const [productData, setProductData] = useState({})
    const [images, setImages] = useState([])
    const [up, setUp] = useState(1) // Quantity state
    const [showPopup, setShowPopup] = useState(false); // State for popup visibility
    const params = useParams()

    useEffect(()=>{
        axios.get(`https://dummyjson.com/products/${params.id}`).then((res)=>{
            setProductData(res.data)
            const imgData = res.data.images.map((items)=>{
                return{
                    original:items,
                    thumbnail:items,
                } 
            })
            setImages(imgData)
        })
    },[params.id]) 

    const handleAddToCart = () => {
        console.log(`Adding ${up} of ${productData.title} to cart.`);
        setShowPopup(true);
    };
    
    const hidePopup = () => {
        setShowPopup(false);
    };

    const incrementQuantity = () => {
        setUp(prevUp => prevUp + 1);
    };

    const decrementQuantity = () => {
        setUp(prevUp => (prevUp > 1 ? prevUp - 1 : 1));
    };

    return (
        <>
            <Banner title="Product Details" path="Home"/>

            <AddToCartPopup 
                productName={productData.title} 
                show={showPopup} 
                onHide={hidePopup} 
            />

            <section className='mt-[120px] mb-[100px]'>
                <div className="container">
                    <div className='grid grid-cols-1 md:grid md:grid-cols-2 gap-7'>
                        <div className='w-full'>
                        <ImageGallery items={images} thumbnailPosition="left" showPlayButton={false} showFullscreenButton={false}/>
                        </div>
                        <div className='lg:min-w-[540px]'>
                            <h2 className='text-3xl font-medium'>{productData.title}</h2>
                            <h1 className='flex gap-2 text-amber-400'> 
                                {Array.from({ length: 5 }, (_, i) => (
                                    <FaRegStar key={i} className={i < Math.round(productData.rating) ? 'text-yellow-500' : 'text-gray-300'} />
                                ))}
                                <p className='text-primary'>{(productData.rating)}</p>
                            </h1>
                            <p className='pt-6 pb-10 text-secondary text-wrap'>
                                {productData.description}
                            </p>
                            <div className='flex gap-3.5 pb-4'>
                                <h2 className='text-xl text-secondary'><del>{productData.price ? `$${(productData.price + 50).toFixed(2)}` : ''}</del></h2>
                                <h2 className='text-3xl text-bagde'>{productData.price ? `$${productData.price.toFixed(2)}` : ''}</h2>
                            </div>
                            <div className='flex gap-2.5'> 
                                <h2 className='pb-3'>Stock:</h2>
                                <div>
                                    {productData?.stock}
                                </div>
                            </div>
                            <div>
                                <h2 className='pb-3 text-xl'>Size</h2>
                                <div className='flex gap-3'>
                                    <p className='cursor-pointer border px-3 py-1 hover:border-black'>XL</p>
                                    <p className='cursor-pointer border px-3 py-1 hover:border-black'>M</p>
                                    <p className='cursor-pointer border px-3 py-1 hover:border-black'>ML</p>
                                    <p className='cursor-pointer border px-3 py-1 hover:border-black'>LM</p>
                                    <p className='cursor-pointer border px-3 py-1 hover:border-black'>XXL</p>
                                </div>
                            </div>
                            <div className='py-8  flex gap-4 text-xl'>
                                <p>Quantity :</p>
                                <button className='px-2 border rounded' onClick={decrementQuantity}>-</button>
                                <p>{up}</p>
                                <button className='px-2 border rounded' onClick={incrementQuantity}>+</button>
                            </div>
                            
                           
                            <div className='flex items-center gap-4 text-secondary'> 
                                <div className=''>
                                    <Button title="BUY NOW"/>
                                </div>
                                <div onClick={handleAddToCart}> 
                                    <Button title={"Add To Card"}/>
                                </div>
                            </div>
                            <div className='pt-7 flex gap-3 items-center text-secondary'>
                                <p>Share:</p>
                                <FaTwitter className='cursor-pointer hover:text-primary'/>
                                <TiSocialInstagram className='cursor-pointer hover:text-primary'/>
                                <RiFacebookFill className='cursor-pointer hover:text-primary'/>
                                <FaGooglePlusG className='cursor-pointer hover:text-primary'/>
                            </div>
                        </div>
                    </div>

                    <div className='mt-20'>
                        <nav>
                            <ul className='flex justify-center gap-14 pb-4 border-b text-xl'>
                                <li><a href="#" className='text-primary font-bold'>Description</a></li>
                                <li><a href="#" className='text-secondary hover:text-primary'>Data sheet</a></li>
                                <li><a href="#" className='text-secondary hover:text-primary'>Reviews</a></li>
                            </ul>
                        </nav>
                    
                        <div className='pt-14 text-secondary text-justify'> 
                            <h2 className='text-2xl'>Details</h2>
                            <p className='text-base pt-7'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis noexercit
                                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.
                            </p>
                            <h2 className='pt-14 pb-7 text-2xl text-secondary'>Features</h2>
                            <ul className='flex flex-col gap-3 mb-28'>
                                <li>Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
                                <li>Irure dolor in reprehenderit in voluptate velit esse</li>
                                <li>Sed do eiusmod tempor incididunt ut labore et</li>
                                <li>Nisi ut aliquip ex ea commodo consequat.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetails