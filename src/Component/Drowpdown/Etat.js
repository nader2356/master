/* eslint-disable react-hooks/exhaustive-deps */
import search from '../../assets/magnifying-glass.png'
import logo from '../../assets/down-arrow.png'
import Env from "../../config.js"

import { useEffect, useState } from "react";
const    Etat = ()  => {


    const [InputValueEtat, SetInputValue] = useState("");
    const [SelectedEtat, SetSelected] = useState("");
    const [OpenListEtat, SetOpenEtat] = useState(false);
    //parametre database

    const [Etats, SetEtat] = useState([]);

    useEffect(() => {
        const FetchEtat = async () => {
            const url = "/param_etat"
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
            SetEtat(response.list)
            console.log(Etats)
        };

        FetchEtat()
    },

        []);
    return (

        <>
            <div
                onClick={() => SetOpenEtat(!OpenListEtat)}
                className={`bg-gray w-full p-2 flex ml-5 mt-3 mb-2 items-center justify-between rounded ${!SelectedEtat && "text-gray-700"
                    }`}
            >
                {SelectedEtat
                    ? SelectedEtat?.length > 25
                        ? SelectedEtat?.substring(0, 25) + "..."
                        : SelectedEtat
                    : "Selectioner l etat"}
                <img className="text-right h-5 w-5" src={logo} alt="" />
            </div>

            <ul
                className={`bg-gray mt-2 ml-5 w-full overflow-y-auto ${OpenListEtat ? "max-h-60" : "max-h-0"
                    } `}
             >
                <div className="flex items-center px-2 sticky top-0 bg-gray">
                <img className="text-right h-4 w-4  mr-1 ml-1" src={search} alt="" />
                    <input
                        type="text"
                        value={InputValueEtat}
                        onChange={(e) => SetInputValue(e.target.value.toLowerCase())}
                        placeholder="Search Etat"
                        className="placeholder:text-white p-2 outline-none bg-gray"
                    />
                </div>
                {Etats.map((item) => (
                    <li
                    key={item.Id} value={item.Id}
                        className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${item?.Etat?.toLowerCase() === SelectedEtat?.toLowerCase() &&
                            "bg-sky-600 text-white"
                            }
            ${item?.Etat?.toLowerCase().startsWith(InputValueEtat)
                                ? "block"
                                : "hidden"
                            }`}
                        onClick={() => {
                            SetSelected(item?.Etat);
                            localStorage.setItem('SelectEtat',item?.Id );
                            console.log(item?.Id)
                            if (item?.Etat?.toLowerCase() !== SelectedEtat.toLowerCase()) {
                                SetSelected(item?.Etat);
                                SetOpenEtat(false);
                                SetInputValue("");
                            }
                        }}
                    >
                        {item?.Etat}
                    </li>
                ))}
               
            </ul>
        </>
    )
}


export default Etat