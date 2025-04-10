import React from 'react'

const Home = () => {
    return (
        <div className='h-lvh'>
            <div className='mx-16 flex justify-center py-24'>
                {/* left sided section hero text*/}
                <section className='pr-12'>
                    <h1 className='text-4xl text-balance'>Every got into segfault? And want to get it fixed, without saying
                        <span className='italic line-through font-extrabold'> WTF?</span>
                    </h1>
                </section>
            </div>

            <div className='flex items-center justify-around pt-12'>
                <img src="/images/laptop.jpg" alt="laptop with code"
                    className='h-[90vh] w-auto rounded-xl transform rotate-[15deg] transition-transform duration-500 hover:rotate-[17deg] hover:scale-105 shadow-2xl' />
            </div>
        </div>
    )
}

export default Home