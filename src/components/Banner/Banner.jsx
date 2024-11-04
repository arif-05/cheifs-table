

const Banner = () => {
    return (
        <div className="my-10 flex flex-col items-center justify-center bg-cover bg-center h-[80vh] bg-[url('./images/banner.jpg')] text-white text-center rounded-2xl space-y-8">
            <h2 className="text-7xl font-bold w-3/4">Discover an exceptional cooking class tailored for you!</h2>
            <p className="w-3/4">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p>
            <div className="flex items-center gap-5">
                <button className="text-2xl font-semibold bg-[#0BE58A] text-black p-4 rounded-full">Explore Now</button>
                <button className="text-2xl font-semibold p-4 rounded-full border-white border-2">Our Feedback</button>
            </div>
        </div>
    );
};

export default Banner;