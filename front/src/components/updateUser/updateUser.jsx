

export function UpdateUser() {
    return (
        <section className="p-10 bg-white z-10 relative rounded-md">
            <button className="absolute top-4 right-4"><IoMdClose /></button>




            <form className="max-w-sm mx-auto ">
                <div className="mb-5">
                    <label for="name" className="block mb-2 text-sm font-medium text-gray-900 light:text-white">Name</label>
                    <input type="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500" placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-5">
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 light:text-white">Email</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500" placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-5">
                    <label for="phone" className="block mb-2 text-sm font-medium text-gray-900 light:text-white">Phone</label>
                    <input type="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500" required />
                </div>
                <div className="flex items-start mb-5">

                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800">Update</button>
            </form>


        </section>
    )
}