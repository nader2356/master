
import search from '../../assets/magnifying-glass.png'
import logo from '../../assets/down-arrow.png'
import Env from "../../config.js"
import { useEffect, useState } from "react";
export default function FormeJuridique() {


    const [InputValueFormeJuridique, SetInputValue] = useState("");
    const [SelectedFormeJuridique, SetSelected] = useState("");
    const [OpenListFormeJuridique, SetOpenFormeJuridique] = useState(false);
    //parametre database

    const [FormeJuridiques, SetFormeJuridique] = useState([]);

    useEffect(() => {
        const FetchFormeJuridique = async () => {
            const url = "/param_forme_juridique"
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
            SetFormeJuridique(response.list);
          

        };

        FetchFormeJuridique()
    },

        []);
    return (

        <>
            <div
                onClick={() => SetOpenFormeJuridique(!OpenListFormeJuridique)}
                className={`bg-gray w-full p-2 flex ml-5 mt-3 mb-2 items-center justify-between rounded ${!SelectedFormeJuridique && "text-gray-700"
                    }`}
            >
                {SelectedFormeJuridique
                    ? SelectedFormeJuridique?.length > 25
                        ? SelectedFormeJuridique?.substring(0, 25) + "..."
                        : SelectedFormeJuridique
                    : "Selectioner une forme juridique"}
                <img className="text-right h-5 w-5" src={logo} alt="" />
            </div>

            <ul
                className={`bg-gray mt-2 ml-5 w-full overflow-y-auto ${OpenListFormeJuridique ? "max-h-60" : "max-h-0"
                    } `}
            >
                <div className="flex items-center px-2 sticky top-0 bg-gray">
                <img className="text-right h-4 w-4  mr-1 ml-1" src={search} alt="" />
                    <input
                        type="text"
                        value={InputValueFormeJuridique}
                        onChange={(e) => SetInputValue(e.target.value.toLowerCase())}
                        placeholder="Search Forme Juridique"
                        className="placeholder:text-white p-2 outline-none bg-gray"
                    />
                      
                </div>
                {FormeJuridiques.map((item) => (
                    <li
                    key={item.Id} value={item?.Id}
                        className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${item?.FormeJuridique?.toLowerCase() === SelectedFormeJuridique?.toLowerCase() &&
                            "bg-sky-600 text-white"
                            }
            ${item?.FormeJuridique?.toLowerCase().startsWith(InputValueFormeJuridique)
                                ? "block"
                                : "hidden"
                            }`}
                        onClick={() => {
                            SetSelected(item?.FormeJuridique);
                            localStorage.setItem('SelectFormeJuridique',item?.Id );
                            console.log(item?.Id)
                            if (item?.FormeJuridique?.toLowerCase() !== SelectedFormeJuridique.toLowerCase()) {
                                SetSelected(item?.FormeJuridique);
                                SetOpenFormeJuridique(false);
                                SetInputValue("");
                            }
                        }}
                    >
                        {item?.FormeJuridique}
                    </li>
                ))}
               
            </ul>
        </>
    )
}

