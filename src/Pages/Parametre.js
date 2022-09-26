import logo from '../plus.png'
const Client = () => {
    return (
        <div className="  h-screen" >
 
                <div className="  px-4 py-2 pb-3   ">
                    <p className="font-bold text-xl ">
                        Mes Parametres
                    </p>
                </div>
                <form className='bg-gray-light mt-4 ml-4 pt-8 h-[22%] md:w-8/12'>

                    <div className="grid grid-cols-3 gap-4" >

                        <div className="form-group mb-1 ml-10">
                            <label className="block">
                                <input type="email" name="input" className="mt-1 px-3 py-2  bg-white   h-10 w-[220px] rounded-md sm:text-sm  " placeholder="email" />
                            </label>
                        </div>
                        <div className="form-group mb-2 ml-[-13px]">
                            <label className="block">
                                <input type="email" name="input2" className="mt-1 px-3 py-2 bg-white shadow-sm  ml-20 h-10 w-60 placeholder-slate-400   rounded-md sm:text-sm " placeholder="you@example.com" />
                            </label>
                        </div>
                        <div className="form-group mb-2 ml-10 flex items-center ">
                            <button className=" pl-5 pr-5 mt-1 ml-[85px] rounded-full   text-white h-9 bg-indigo-800">
                                <img className="h-5 w-5 rounded-full" src={logo} alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="w-55 pl-5 pr-5 mt-5 ml-5 mb-8    text-white h-9 bg-indigo-800">Ajouter  un parametre</button>

                    </div>



                </form>
           
        </div >



    )
}

export default Client 