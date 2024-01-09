import { useState } from "react";
const Nav = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleMenuItemClick = (index) => {
    setActiveIndex(index);
  };
    return (
        <div className="Wrapper">
            <nav className='nav hidden sm:flex justify-between px-[1rem] h-[4rem] lg:pt-12 lg:pb-8 md:px-[4rem] xl:px-[6rem] relative mt-[-5px] md:mt-[-10px]'>
                <div className="logo flex items-center text-[18px] md:text-[32px] xl:text-[36px] text-black font-bold cursor-pointer ">
                    Emma'a Kitchen
                </div>
                <div className="menu hidden lg:flex justify-center items-center">
                <ul className="flex flex-nowrap font-OrkneyRegular text-[16px] xl:text-[18px]">
                <li className={`home menu-item px-[1rem] py-[2rem] ${activeIndex === 0 ? 'active' : ''}`}
    onClick={() => handleMenuItemClick(0)}>
    <a href="/home" aria-label="Link to homepage">Home</a>
</li>
<li className={`cooking menu-item px-[1rem] py-[2rem] ${activeIndex === 1 ? 'active' : ''}`}
    onClick={() => handleMenuItemClick(1)}>
    <a href="/cooking-class" title="Link to cooking class">Cooking </a>
</li>

</ul>
                </div>
            </nav>
        </div>
    )
}
export default Nav;
