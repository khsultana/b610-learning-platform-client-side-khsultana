import React from 'react';

const Home = () => {
    return (
        <div >
            <h2 className='text-4xl'>Welcome! </h2>
            <div
            // className='flex justify-center gap-4 mx-auto container'
            >
                <div className="rounded-none card w-96 bg-slate-200 text-black">
                    <div className="card-body">
                        <h2 className="card-title">Tell us about yourself               !</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>

                    </div>
                </div>

            </div>
            <div className='flex'>
                <div>
                    <img src="https://www.onlinegsp.com/public/9/9/Images/brand/ss1.gif" alt="" />
                </div>
                <div>
                    <img src="https://discovertemplate.com/wp-content/uploads/wc-document-uploads/1/DT_G17_-Education-Animated-GIF-Icon-Pack.gif" alt="" />
                </div>
            </div>

        </div>

    );
};

export default Home;