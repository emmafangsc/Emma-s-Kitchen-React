function BookTable() {
    return (
        <div className="bg-yellow flex flex-col justify-center items-center text-center  min-h-screen">
            <h1 className="text-[28px] md:text-[38px] font-OrkneyBold text-black myFont">
            Our Booking System Is Under Construction. 
            </h1>
            <p className="py-[2rem] text-[18px] font-OrkneyRegular">Check Back Soon!</p>
            <button onClick={() => window.location.href = '/private-dining'} className="h-[2.5rem] mt-[2rem] bg-black font-OrkneyRegular text-white text-[16px] lg:text-[18px] px-6 rounded-3xl hover:bg-grey">Go Back</button>
        </div>
    )
}

export default BookTable;