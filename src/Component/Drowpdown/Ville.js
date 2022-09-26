/* eslint-disable react-hooks/exhaustive-deps */

import search from '../../magnifying-glass.png'
import logo from '../../down-arrow.png'
import Env from "../../config.js"


import { useEffect,useState } from "react"

const  Ville = () =>  {


    const [InputValueVille, SetInputValue] = useState("");
    const [SelectedVille, SetSelected] = useState("");
    const [OpenListVille, SetOpenVille] = useState(false);
    //parametre database

    const [Ville, SetVille] = useState([]);

    useEffect(() => {

        const FetchVille = async () => {
            const url = "/param_ville"
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
            SetVille(response.list);
        console.log(Ville)

        };

        FetchVille()
    },

        []);

    return (

        <>
            <div
                onClick={() => SetOpenVille(!OpenListVille)}
                className={`bg-gray w-full p-2 flex ml-5 mt-3 mb-2 items-center justify-between rounded ${!SelectedVille && "text-gray-700"
                    }`}
            >
                {SelectedVille
                    ? SelectedVille?.length > 25
                        ? SelectedVille?.substring(0, 25) + "..."
                        : SelectedVille
                    : "Selectioner une ville"}
                <img className="text-right h-5 w-5" src={logo} alt="" />
            </div>

            <ul
                className={`bg-gray mt-2 ml-5 w-full overflow-y-auto ${OpenListVille ? "max-h-60" : "max-h-0"
                    } `}
            >
                <div className="flex items-center px-2 sticky top-0 bg-gray">
                <img className="text-right h-4 w-4  mr-1 ml-1 " src={search} alt="" />
                    <input
                        type="text"
                        value={InputValueVille}
                        onChange={(e) => SetInputValue(e.target.value.toLowerCase())}
                        placeholder="Enter country name"
                        className="placeholder:text-white p-2 outline-none bg-gray"
                    />
                     
                </div>
                {Ville.map((item) => (
                    <li
                    key={item?.Id} value={item.Id}
                        className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${item?.Ville?.toLowerCase() === SelectedVille?.toLowerCase() &&
                            "bg-sky-600 text-white"
                            }
            ${item?.Ville?.toLowerCase().startsWith(InputValueVille)
                                ? "block"
                                : "hidden"
                            }`}
                        onClick={() => {
                            SetSelected(item?.Ville);
                            localStorage.setItem('SelectVille',item?.Id );
                            console.log(SelectedVille)
                            if (item?.Ville?.toLowerCase() !== SelectedVille.toLowerCase()) {
                                SetSelected(item?.Ville);
                                SetOpenVille(false);
                                SetInputValue("");
                            }
                        }}
                    >
                        {item?.Ville}
                    </li>
                ))}
              
            </ul>
        </>
    )
}

export default Ville