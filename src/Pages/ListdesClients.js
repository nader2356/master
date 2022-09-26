import { useEffect, useState } from "react";


const ListdesClients = () => {

    const [Client, SetClient] = useState([]);
    useEffect(() => {

        const FetchListClient= async () => {
            const url = "/Client"
            const options = {
                "method": "GET",
                "headers": {
                    'xc-auth': 'hPKfvMmzAWUUrL8dkqlmVKlO7q1UD474-hrlCpcq',
                    'xc-token': 'hPKfvMmzAWUUrL8dkqlmVKlO7q1UD474-hrlCpcq',

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
            SetClient(response.list);
        };

        FetchListClient()





    },

        []);
    return (


        <div className="h-screen">
        <div className="mt-8 ml-9 mb-9">
            <p className="font-bold text-xl ">les information du clients</p>
            <div className="border mt-2 w-[80%] "></div>
        </div>
        <table className="border-separate border border-slate-400  ml-10  md:w-11/12 ">
                <thead>
                    <tr>
                        <th class="border border-slate-300 h-12">Code Client</th>
                        <th class="border border-slate-300 h-12">Raison social</th>
                        <th class="border border-slate-300 h-12">Adresse</th>
                        <th class="border border-slate-300 h-12">Fax</th>
                        <th class="border border-slate-300 h-12">Téléphone</th>
                        <th class="border border-slate-300 h-12">Email</th>
                        <th class="border border-slate-300 h-12">Matrcule Fiscale</th>
                        <th class="border border-slate-300 h-12">Activite Principale</th>
                    </tr>
                </thead>
                <tbody>
                    {Client.map((item) => (
                        <tr class="odd:bg-white even:bg-slate-50">
                            <td class="border border-slate-300  h-12">{item.Active}</td>
                            <td class="border border-slate-300 h-12">{item.RaisonSocial}</td>
                            <td class="border border-slate-300 h-12">{item.Adresse}</td>
                            <td class="border border-slate-300 h-12">{item.Fax}</td>
                            <td class="border border-slate-300 h-12">{item.Téléphone}</td>
                            <td class="border border-slate-300 h-12">{item.Email}</td>
                            <td class="border border-slate-300 h-12">{item.MatriculeFiscale}</td>
                            <td class="border border-slate-300 h-12">{item.ActivitePrincipale}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
            
            </div>




    )
}

export default ListdesClients 