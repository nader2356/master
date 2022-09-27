/* eslint-disable react-hooks/exhaustive-deps */
import search from '../../assets/magnifying-glass.png'
import logo from '../../assets/down-arrow.png'
import Env from "../../config.js"
import { useEffect, useState } from "react";
const    BrCnss = ()  => {


    const [InputValueBrCnss, SetInputValue] = useState("");
    const [SelectedBrCnss, SetSelected] = useState("");
    const [OpenListBrCnss, SetOpenBrCnss] = useState(false);
    //parametre database

    const [BrCnsss, SetBrCnss] = useState([]);

    useEffect(() => {
        const FetchBrCnss = async () => {
            const url = "/param_br_cnss"
            const options = {
                "method": "GET",
                "headers": {
                    'xc-auth': Env.KEY,
                    'xc-token': Env.TOKEN,
                }
            }
            const response = await fetch(url, options)
                .then(res => res.json())
                .catch(e => {
                    console.error({
                        "message": "error",
                        error: e
                    });
                });

            console.log("RESPONSE: ", response)
            SetBrCnss(response.list)
            console.log(BrCnss)
        };

        FetchBrCnss()
    },

        []);
    return (

        <>
            <div
                onClick={() => SetOpenBrCnss(!OpenListBrCnss)}
                className={`bg-gray w-full p-2 flex ml-5 mt-3 mb-2 items-center justify-between rounded ${!SelectedBrCnss && "text-gray-700"
                    }`}
            >
                {SelectedBrCnss
                    ? SelectedBrCnss?.length > 25
                        ? SelectedBrCnss?.substring(0, 25) + "..."
                        : SelectedBrCnss
                    : "Selectioner le bureau de cnss"}
                <img className="text-right h-5 w-5" src={logo} alt="" />
            </div>

            <ul
                className={`bg-gray mt-2 ml-5 w-full overflow-y-auto ${OpenListBrCnss ? "max-h-60" : "max-h-0"
                    } `}
            >
                <div className="flex items-center px-2 sticky top-0 bg-gray">
                <img className="text-right h-4 w-4  mr-1 ml-1" src={search} alt="" />
                    <input
                        type="text"
                        value={InputValueBrCnss}
                        onChange={(e) => SetInputValue(e.target.value.toLowerCase())}
                        placeholder="Enter country name"
                        className="placeholder:text-white p-2 outline-none bg-gray"
                    />
                </div>
                {BrCnsss.map((item) => (
                    <li
                    key={item.Id} value={item.Id}
                        className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${item?.BrCnss?.toLowerCase() === SelectedBrCnss?.toLowerCase() &&
                            "bg-sky-600 text-white"
                            }
            ${item?.BrCnss?.toLowerCase().startsWith(InputValueBrCnss)
                                ? "block"
                                : "hidden"
                            }`}
                        onClick={() => {
                            SetSelected(item?.BrCnss);
                            localStorage.setItem('SelectBrCnss',item?.Id );
                            console.log(SelectedBrCnss)
                            if (item?.BrCnss?.toLowerCase() !== SelectedBrCnss.toLowerCase()) {
                                SetSelected(item?.BrCnss);
                                SetOpenBrCnss(false);
                                SetInputValue("");
                            }
                        }}
                    >
                        {item?.BrCnss}
                    </li>
                ))}
               
            </ul>
        </>
    )
}


export default BrCnss