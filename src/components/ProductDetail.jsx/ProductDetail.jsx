import React from 'react'

const ProductDetail = ({ item }) => {
    return (
        <div>
            <section className="overflow-hidden text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap mx-auto lg:w-4/5">
                        <img alt="ecommerce" className="object-cover object-center w-full h-64 rounded lg:w-1/2 lg:h-auto" src="https://dummyimage.com/400x400" />
                        <div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
                            <h2 className="text-sm tracking-widest text-gray-500 title-font">BRAND NAME</h2>
                            <h1 className="mb-1 text-3xl font-medium text-gray-900 title-font">The Catcher in the Rye</h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    {[...Array(5)].map((x, i) => {
                                        let index = i + 1;
                                        let review = 4;
                                        return (
                                            <svg
                                                key={index}
                                                fill={index <= review ? "currentColor" : "none"}
                                                stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                            </svg>
                                        )
                                    })}
                                    <span className="ml-3 text-gray-600">4 Reviews</span>
                                </span>
                            </div>
                            <p className="leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Accusamus, doloremque placeat ea perspiciatis at odit! Deleniti obcaecati sapiente neque
                                modi excepturi repellat hic laboriosam, harum aspernatur accusamus totam nulla amet vero
                                repellendus assumenda doloribus in. Non quaerat illo aperiam consectetur!</p>
                            <div className="flex items-center pb-5 mt-6 mb-5 border-b-2 border-gray-100">
                                <div className="flex">
                                    <span className="mr-3">Color</span>
                                    <button className="w-6 h-6 border-2 border-gray-300 rounded-full focus:outline-none"></button>
                                    <button className="w-6 h-6 ml-1 border-2 border-gray-300 rounded-full bg-primary focus:outline-none"></button>
                                    <button className="w-6 h-6 ml-1 bg-black border-2 border-gray-300 rounded-full focus:outline-none"></button>
                                </div>
                                <div className="flex items-center ml-6">
                                    <span className="mr-3">Size</span>
                                    <div className="relative">
                                        <select className="py-2 pl-3 pr-10 text-base border border-gray-300 rounded appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500">
                                            <option>SM</option>
                                            <option>M</option>
                                            <option>L</option>
                                            <option>XL</option>
                                        </select>
                                        <span className="absolute top-0 right-0 flex items-center justify-center w-10 h-full text-center text-gray-600 pointer-events-none">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <span className="text-2xl font-medium text-gray-900 title-font">$58.00</span>
                                <button className="flex px-6 py-2 ml-auto text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">Button</button>
                                <button className="inline-flex items-center justify-center w-10 h-10 p-0 ml-4 text-gray-500 border-0 rounded-full bg-lightgray">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProductDetail