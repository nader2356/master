
import search from '../../magnifying-glass.png'
import logo from '../../down-arrow.png'
import Env from "../../config.js"
import { useEffect, useState } from "react";
const   ChargeClient  = ()  => {


    const [InputValueChargeClient, SetInputValue] = useState("");
    const [SelectedChargeClient, SetSelected] = useState("");
    const [OpenListChargeClient, SetOpenChargeClient] = useState(false);
 //parametre database

 const [ChargeClients, SetChargeClient] = useState([]);

 useEffect(() => {

    const FetchChargeClient = async () => {
        const url = "/param_charge_client"
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
        SetChargeClient(response.list);

    };

    FetchChargeClient()


},

    []);




return (

    <>
        <div
            onClick={() => SetOpenChargeClient(!OpenListChargeClient)}
            className={`bg-gray w-full ml-5 p-2 mt-2 mb-2 flex items-center justify-between rounded ${!SelectedChargeClient && "text-gray-700"
                }`}
        >
            {SelectedChargeClient
                ? SelectedChargeClient?.length > 25
                    ? SelectedChargeClient?.substring(0, 25) + "..."
                    : SelectedChargeClient
                : "Selectionner un Chargé Client"}
            <img className="text-right h-5 w-5" src={logo} alt="" />
        </div>
        <ul
            className={`bg-gray mt-2 ml-5 w-full overflow-y-auto ${OpenListChargeClient ? "max-h-60" : "max-h-0"
                } `}
        >
            <div className="flex items-center px-2 sticky top-0 bg-gray">
            <img className="text-right h-4 w-4  mr-1 ml-1" src={search} alt="" />
                <input
                    type="text"
                    value={InputValueChargeClient}
                    onChange={(e) => SetInputValue(e.target.value.toLowerCase())}
                    placeholder="Enter country name"
                    className="placeholder:text-white p-2 outline-none bg-gray"
                />

            </div>
            {ChargeClients.map((item) => (
                <li
                    key={item?.Id} value={item.Id}
                    className={`mb-4 text-sm hover:bg-sky-600 hover:text-white
            ${item?.ChargeClient?.toLowerCase() === SelectedChargeClient?.toLowerCase() &&
                        "bg-sky-600 text-white"
                        }                
            ${item?.ChargeClient?.toLowerCase().startsWith(InputValueChargeClient)
                            ? "block"
                            : "hidden"
                        }`}
                    onClick={() => {
                        SetSelected(item?.ChargeClient);
                        localStorage.setItem('SelectChargeClient',item?.Id );
                        console.log(SelectedChargeClient)
                        localStorage.setItem('s1',item?.Id );
                        if (item?.ChargeClient?.toLowerCase() !== SelectedChargeClient.toLowerCase()) {
                            SetSelected(item?.ChargeClient);
                            SetOpenChargeClient(false);
                            SetInputValue("");
                        }

                    }}
                >
                    {item?.ChargeClient}
                </li>
            ))}


        </ul>
    </>
 )
}
 
 export default ChargeClient