function Thankyou() {
    return (
        <div className="bg-yellow flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-[28px] md:text-[36px] font-[400] text-[black] myFont">
                Thank you for connecting!
            </h1>
            <p className="py-[2rem] text-[18px]">you will receive the newest updates!</p>
            <button onClick={() => window.location.href = '/home'} class="h-[2.5rem] mt-[2rem] bg-black text-white text-[16px] lg:text-[18px] px-6 rounded-3xl hover:bg-grey">Go Home</button>
        </div>
    )
}

export default Thankyou;