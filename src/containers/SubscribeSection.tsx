const SubscribeSection = () => {
  return (
    <section className="py-10 md:py-20">
      <div className="input-bg">
        <div className="mx-auto h-full px-4 md:px-8 lg:px-16 flex flex-col gap-8 items-center justify-center text-center backdrop-blur-sm ">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Stay Updated with <br />
            Our Latest Opportunities
          </h1>
            <div className="flex flex-col md:flex-row gap-4 backdrop-blur-md">
              <div className="p-5 overflow-hidden w-[60px] h-[60px] hover:w-[300px] bg-purple-800 shadow-[2px_2px_20px_rgba(0,0,0,0.08)] rounded-full hover:rounded-lg flex group items-center hover:duration-300 duration-300">
                <div className="flex items-center justify-center fill-white" >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Isolation_Mode"
                    data-name="Isolation Mode"
                    viewBox="0 0 24 24"
                    width="22"
                    height="22"
                  >
                    <path d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  className="outline-none text-[20px] bg-transparent w-full text-white font-normal px-4"
                />
              </div>
              {/* <input
              type="email"
              className="bg-white w-full md:w-80 px-4 py-3 rounded-lg outline-none placeholder-gray-500"
              placeholder="Enter your email"
            />
            <button className="bg-blue-700 text-white px-6 py-3 rounded-lg mt-4 md:mt-0 md:ml-4 hover:bg-blue-800 transition">
              Subscribe
            </button> */}
            </div>
        </div>
      </div>
    </section>
  );
};

export { SubscribeSection };
