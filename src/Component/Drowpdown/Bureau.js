/* eslint-disable react-hooks/exhaustive-deps */
import search from '../../assets/magnifying-glass.png'
import logo from '../../assets/down-arrow.png'
import Env from "../../config.js"
import { useEffect, useState } from "react";
const    Bureau = ()  => {


    const [InputValueBureau, SetInputValue] = useState("");
    const [SelectedBureau, SetSelected] = useState("");
    const [OpenListBureau, SetOpenBureau] = useState(false);
    //parametre database

    const [Bureaus, SetBureau] = useState([]);

    useEffect(() => {
        const FetchBureau = async () => {
            const url = "/param_bureau"
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
            SetBureau(response.list)
            console.log(Bureaus)
        };

        FetchBureau()
    },

        []);
    return (

        <>
            <div
                onClick={() => SetOpenBureau(!OpenListBureau)}
                className={`bg-gray w-full p-2 flex ml-5 mt-3 mb-2 items-center justify-between rounded ${!SelectedBureau && "text-gray-700"
                    }`}
            >
                {SelectedBureau
                    ? SelectedBureau?.length > 25
                        ? SelectedBureau?.substring(0, 25) + "..."
                        : SelectedBureau
                    : "Selectioner un bureau"}
                <img className="text-right h-5 w-5" src={logo} alt="" />
            </div>

            <ul
                className={`bg-gray mt-2 ml-5 w-full overflow-y-auto ${OpenListBureau ? "max-h-60" : "max-h-0"
                    } `}
            >
                <div className="flex items-center px-2 sticky top-0 bg-gray">
                <img className="text-right h-4 w-4  mr-1 ml-1" src={search} alt="" />
                    <input
                        type="text"
                        value={InputValueBureau}
                        onChange={(e) => SetInputValue(e.target.value.toLowerCase())}
                        placeholder="Search Bureau"
                        className="placeholder:text-white p-2 outline-none bg-gray"
                    />
                </div>
                {Bureaus.map((item) => (
                    <li
                    key={item.Id} value={item.Id}
                        className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${item?.Bureau?.toLowerCase() === SelectedBureau?.toLowerCase() &&
                            "bg-sky-600 text-white"
                            }
            ${item?.Bureau?.toLowerCase().startsWith(InputValueBureau)
                                ? "block"
                                : "hidden"
                            }`}
                        onClick={() => {
                            SetSelected(item?.FormeJuridique);
                            localStorage.setItem('SelectBureau',item?.Id );
                            console.log(item?.Id)
                            if (item?.Bureau?.toLowerCase() !== SelectedBureau.toLowerCase()) {
                                SetSelected(item?.Bureau);
                                SetOpenBureau(false);
                                SetInputValue("");
                            }
                        }}
                    >
                        {item?.Bureau}
                    </li>
                ))}
               
            </ul>
        </>
    )
}


export default Bureau