
import search from '../../assets/magnifying-glass.png'
import Env from "../../config.js"
import logo from '../../assets/down-arrow.png'
import { useEffect, useState } from "react";
export default function FormeJuridique() {


    const [InputValueRegimeFiscale, SetInputValue] = useState("");
    const [SelectedRegimeFiscale, SetSelected] = useState("");
    const [OpenListRegimeFiscale, SetOpenRegimeFiscale] = useState(false);
    //parametre database

    const [RegimeFiscales, SetRegimeFiscale] = useState([]);

    useEffect(() => {
        const FetchRegimeFiscale = async () => {
            const url = "/param_regime_fiscale"
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
           SetRegimeFiscale(response.list)
        };

        FetchRegimeFiscale()
    },

        []);
    return (

        <>
            <div
                onClick={() => SetOpenRegimeFiscale(!OpenListRegimeFiscale)}
                className={`bg-gray w-full p-2 flex ml-5 mt-3 mb-2 items-center justify-between rounded ${!SelectedRegimeFiscale && "text-gray-700"
                    }`}
            >
                {SelectedRegimeFiscale
                    ? SelectedRegimeFiscale?.length > 25
                        ? SelectedRegimeFiscale?.substring(0, 25) + "..."
                        : SelectedRegimeFiscale
                    : "Selectioner une régime fiscale"}
                <img className="text-right h-5 w-5" src={logo} alt="" />
            </div>

            <ul
                className={`bg-gray mt-2 ml-5 w-full overflow-y-auto ${OpenListRegimeFiscale ? "max-h-60" : "max-h-0"
                    } `}
            >
                <div className="flex items-center px-2 sticky top-0 bg-gray">
                <img className="text-right h-4 w-4  mr-1 ml-1" src={search} alt="" />
                    <input
                        type="text"
                        value={InputValueRegimeFiscale}
                        onChange={(e) => SetInputValue(e.target.value.toLowerCase())}
                        placeholder="Search Regime Fiscale"
                        className="placeholder:text-white p-2 outline-none bg-gray"
                    />
                     
                </div>
                {RegimeFiscales.map((item) => (
                    <li
                    key={item?.Id} value={item.Id}
                        className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${item?.RegimeFiscale?.toLowerCase() === SelectedRegimeFiscale?.toLowerCase() &&
                            "bg-sky-600 text-white"
                            }
            ${item?.RegimeFiscale?.toLowerCase().startsWith(InputValueRegimeFiscale)
                                ? "block"
                                : "hidden"
                            }`}
                        onClick={() => {
                            SetSelected(item?.RegimeFiscale);
                            localStorage.setItem('SelectRegimeFiscale',item?.Id );
                            console.log(SelectedRegimeFiscale)
                            console.log(item?.Id)
                            if (item?.RegimeFiscale?.toLowerCase() !== SelectedRegimeFiscale.toLowerCase()) {
                                SetSelected(item?.RegimeFiscale);
                                SetOpenRegimeFiscale(false);

                                SetInputValue("");
                            }
                        }}
                    >
                         {item?.RegimeFiscale}
                    </li>
                ))}
              
            </ul>
        </>
    )
}

