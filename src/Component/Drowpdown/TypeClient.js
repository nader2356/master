
import search from '../../assets/magnifying-glass.png'
import axios from "axios";
import Env from "../../config.js"
import logo from '../../assets/down-arrow.png'
import logo3 from '../../assets/plu2s.png';
import { useEffect, useState } from "react";
const  TypeClient = () => {


    const [InputValueTypeClient, SetInputValue] = useState("");
    const [SelectedTypeClient, SetSelected] = useState("");
    
    const [OpenListTypeClient, SetOpenTypeClient] = useState(false);
  
    //parametre database

    const [TypeClients, SetTypeClient] = useState([]);

    useEffect(() => {
        const FetchTypeClient = async () => {
            const url = "/param_type_client"
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
           SetTypeClient(response.list);

        };

        FetchTypeClient()
    },

        []);



       

        
        const HandleSubmitAddTypeClient = async () => {

            const options = {
                "method": "Post",
                "url": "/param_type_client",
                "headers": {
                    'xc-auth': Env.KEY,
                    'xc-token': Env.TOKEN,
                },
                "data": {
                    "type": InputValueTypeClient
                }
    
            }
            axios.request(options).then(function (response) {
                console.log(response.data);
            }).catch(function (error) {
                console.error(error);
            });
        }

    return (

        <>
            <div
                onClick={() => SetOpenTypeClient(!OpenListTypeClient)}
                className={`bg-gray w-full p-2 flex ml-5 mt-3 mb-2 items-center justify-between rounded ${!SelectedTypeClient && "text-gray-700"
                    }`}
            >
                {SelectedTypeClient
                    ? SelectedTypeClient?.length > 25
                        ? SelectedTypeClient?.substring(0, 25) + "..."
                        : SelectedTypeClient
                    : "Selectioner le type de client"}
                <img className="text-right h-5 w-5" src={logo} alt="" />
            </div>

            <ul
                className={`bg-gray mt-2 ml-5 w-full overflow-y-auto ${OpenListTypeClient ? "max-h-60" : "max-h-0"
                    } `}
            >
                <div className="flex items-center px-2 sticky top-0 bg-gray">
                <img className="text-right h-4 w-4  mr-1 ml-1" src={search} alt="" />
                    <input
                        type="text"
                        value={InputValueTypeClient}
                        onChange={(e) => SetInputValue(e.target.value.toLowerCase())}
                        placeholder="Search Type Client /Add"
                        className="placeholder:text-white p-2 outline-none bg-gray"
                    />
                   
                </div>

                
                {TypeClients.map((item) => (
                    <li
                    key={item?.Id} value={item.Id}
                        className={`p-2 text-sm hover:bg-sky-600 hover:text-white
            ${item?.TypeClient?.toLowerCase() === SelectedTypeClient?.toLowerCase() &&
                            "bg-sky-600 text-white"
                            }
            ${item?.TypeClient?.toLowerCase().startsWith(InputValueTypeClient)
                                ? "block"
                                : "hidden"
                            }`}
                        onClick={() => {
                            SetSelected(item?.TypeClient);
                            localStorage.setItem('SelectTypeClient',item?.Id );
                            console.log(item?.Id)
                            if (item?.TypeClient?.toLowerCase() !== SelectedTypeClient.toLowerCase()) {
                                SetSelected(item?.TypeClient);
                                SetOpenTypeClient(false);                        
                                SetInputValue("");
                            }
                        }}
                    >
                          
                    {item?.TypeClient}
                    </li>

                    
                    
                ))}
                <div className="flex justify-start px-2 sticky top-0 w-[20%] mb-5 p-4   ml-[5%]">
                    <img className=" h-5 w-5 ml-[45%]  mr-4" src={logo3} alt="" onClick={() => { HandleSubmitAddTypeClient() }} />
        <h5>{InputValueTypeClient}</h5>
                  
                </div>
            </ul>
        </>
    )
}

export default  TypeClient