/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import { useEffect, useState } from "react";
import Env from "../config.js";
import check from '../assets/check.png';
import React from 'react';
import ChargeClient from '../Component/Drowpdown/ChargeClient';
import FormeJuridique from "../Component/Drowpdown/FormeJuridique";
import TypeClient from '../Component/Drowpdown/TypeClient';
import Ville from "../Component/Drowpdown/Ville";
import Bureau from '../Component/Drowpdown/Bureau';
import RegimeFiscale from "../Component/Drowpdown/RegimeFiscale";
import BrCnss from "../Component/Drowpdown/BrCnss";
import Etat from "../Component/Drowpdown/Etat";
import close from "../assets/close.png"



const InitialState = {
    MatriculeFiscale: '',
    ActivitePrincipale: '',
    Adresse: '',
    RegistreDeCommerce: '',
    Fax: '',
    telephone: '',
    email: '',
    active: '',
    RaisonSocial: ''
}
const Client = () => {

    const [FormValues, SetFormValues] = useState(InitialState);
    const { MatriculeFiscale, ActivitePrincipale, Adresse, RaisonSocial, RegistreDeCommerce, Fax, email, telephone } = FormValues
    const [Code, SetCode] = useState();
    const [formErrors, SetFormErrors] = useState("");
    const [ModalAddSuccefuly, SetModalAddSuccefuly] = useState(false);
    const [Modal, SetModalErreur] = useState(false);

   
    const HandleChange = async e => {
        const { name, value } = e.target;
        SetFormValues({ ...FormValues, [name]: value });
    };
   

  

    const HandleSubmit = async (e) => {
        e.preventDefault();
        SetFormErrors(validate(FormValues));
        const options = {
            "method": "Post",
            "url": "/Client",
            "headers": {
                'xc-auth': Env.KEY,
                'xc-token': Env.TOKEN,

            },
            "data": {
                "Téléphone": telephone,
                "Email": email,
                "RaisonSocial": RaisonSocial,
                "ActivitéPrincipale": ActivitePrincipale,
                "Matriculeiscale": MatriculeFiscale,
                "N°Registre de commerce": RegistreDeCommerce,
                "Fax": Fax,
                "Active": Code,
                "Adresse": Adresse
            }
        }
        axios.request(options).then(function (response) {
            console.log(response.data);
            localStorage.setItem('user', JSON.stringify(response.data.Id));
           SetModalAddSuccefuly(!ModalAddSuccefuly);
            console.log(ClientId)
        }).catch(function (error) {
            SetModalErreur(!Modal);

            console.error(error);
        });
        const ClientId = localStorage.getItem('user');
        const Bureau = localStorage.getItem('SelectBureau');
        const ChargeClient = localStorage.getItem('SelectChargeClient');
        const FormeJuridique = localStorage.getItem('SelectFormeJuridique');
        const RegimeFiscale = localStorage.getItem('SelectRegimeFiscale');
        const TypeClient = localStorage.getItem('SelectTypeClient');
        const Ville = localStorage.getItem('SelectVille');
        const BrCnss = localStorage.getItem('SelectBrCnss');
        const Etat = localStorage.getItem('SelectEtat')



     
        const AddFormeJuridiqueToClient = {
            "method": "POST",
            "url": `/Client/${ClientId}/mm/FormeJuridique/${FormeJuridique}`,
            "headers": {
                'xc-auth': Env.KEY,
                    'xc-token': Env.TOKEN,
            },
        }
        axios.request(AddFormeJuridiqueToClient).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });

        const AddBureauToClient = {
            "method": "POST",
            "url": `/Client/${ClientId}/mm/Bureau/${Bureau}`,
            "headers": {
                'xc-auth': Env.KEY,
                    'xc-token': Env.TOKEN,
            },
        }
        axios.request(AddBureauToClient).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });

        const AddTypeToClient = {
            "method": "POST",
            "url": `/Client/${ClientId}/mm/Type/${TypeClient}`,
            "headers": {
                'xc-auth': Env.KEY,
                'xc-token': Env.TOKEN,
            },
        }
        axios.request(AddTypeToClient).then(function (response) {
            console.log(response.data);

        }).catch(function (error) {
            console.error(error);
        });


        const AddEtatToClient = {
            "method": "POST",
            "url": `/Client/${ClientId}/mm/Etat/${Etat}`,
            "headers": {
                'xc-auth': Env.KEY,
                'xc-token': Env.TOKEN,
            },
        }
        axios.request(AddEtatToClient).then(function (response) {
            console.log(response.data);

        }).catch(function (error) {
            console.error(error);
        });


        const AddBrCnssToClient = {
            "method": "POST",
            "url": `/Client/${ClientId}/mm/BrCnss/${BrCnss}`,
            "headers": {
                'xc-auth': Env.KEY,
                'xc-token': Env.TOKEN,
            },
        }
        axios.request(AddBrCnssToClient).then(function (response) {
            console.log(response.data);

        }).catch(function (error) {
            console.error(error);
        });


        const AddRegimeClientToClient = {
            "method": "POST",
            "url": `/Client/${ClientId}/mm/RegimeFiscale/${RegimeFiscale}`,
            "headers": {
                'xc-auth': Env.KEY,
                'xc-token': Env.TOKEN,
            },
        }
        axios.request(AddRegimeClientToClient).then(function (response) {
            console.log(response.data);

        }).catch(function (error) {
            console.error(error);
        });

        const AddVilleToClient = {
            "method": "POST",
            "url": `/Client/${ClientId}/mm/Ville/${Ville}`,
            "headers": {
                'xc-auth': Env.KEY,
                    'xc-token': Env.TOKEN,
            },
        }
        axios.request(AddVilleToClient).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });

        const AddChargeClient = {
            "method": "POST",
            "url": `/Client/${ClientId}/mm/ChargeClient/${ChargeClient}`,
            "headers": {
                'xc-auth': Env.KEY,
                'xc-token': Env.TOKEN,
            },
        }
        axios.request(AddChargeClient).then(function (response) {
            console.log(response.data);

        }).catch(function (error) {
            console.error(error);
        });

    };
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.telephone) {
            errors.Telephone = "le téléphone est obligataoire!";
        }
        if (!values.Fax) {
            errors.Fax = "Fax est obligatoire!";
        }
        if (!values.RaisonSocial) {
            errors.RaisonSocial = "Raison Social  est obligatoire!";
        }
        if (!values.MatriculeFiscale) {
            errors.MatriculeFiscale = "Matricule Fiscale est obligatoire!";
        }
        if (!values.ActivitePrincipale) {
            errors.ActivitéPrincipale = "ActivitéPrincipale  est obligatoire!";
        }
        if (!values.Adresse) {
            errors.Adresse = "l adresse est obligatoire!";
        }
        if (!values.RegistreDeCommerce) {
            errors.RegistreDeCommerce = "n°_registre_de_commerce  est obligatoire!";
        }
        if (!values.email) {
            errors.email = "l email est obligatoire!";
        } else if (!regex.test(values.email)) {
            errors.email = " n est pas a valid email!";
        }
        return errors;
    };

    return (
        <><div className="">

            <div className="  px-5 py-4 ml-[17%] mt-4  md:w-8/12 ">
                <p className="font-bold text-xl text-center border-4   ">les information du clients</p>

            </div>

            <div className="  ml-2 ">
                <form onSubmit={HandleSubmit} className=" border rounded-md pt-8 mb-20 mt-5  pr-8 ml-[4%]  md:w-11/12  max-auto  ">

                    <div className="grid grid-cols-2">
                        <div className="pl-8 w-11/12 ">

                            <label className="ml-5 ">Actif</label>
                            <div className="flex items-center">
                                <input type="radio" name="Code" value="1" onChange={e => SetCode(e.target.value)} className="  mb-3 border   h-10  mt-3 ml-8 mr-2 rounded-sm " /> actif
                                <input type="radio" name="Code" value="0" onChange={e => SetCode(e.target.value)} className="  mb-3 border   h-10  ml-8 mt-3 mr-2 rounded-sm  " /> inactif
                            </div>

                            <label className="ml-10 ">Raison Social</label>

                            <input onChange={HandleChange} value={RaisonSocial} type="text" name="RaisonSocial" className="mt-2 px-3 py-2  mb-3 border ml-5  h-10 w-full rounded-sm sm:text-sm " />
                            <div className="grid grid-cols-1 ">
                                <span className="text-sm  text-red-600 ml-8  mb-2">
                                    {formErrors.raisonSocial}
                                </span>
                            </div>


                            <label className=" ml-10 ">Forme Juridique</label>

                            <div className="grid grid-cols-1">
                                <FormeJuridique></FormeJuridique>

                            </div>


                            <label className="ml-10   ">Adresse</label>


                            <input onChange={HandleChange} value={Adresse} type="text" name="Adresse" className="mt-2 px-3 py-2  mb-3 border ml-5  h-10 w-full rounded-sm sm:text-sm " />
                            <div className="grid grid-cols-1">
                                <span className="text-sm  text-red-600 ml-8  mb-2">
                                    {formErrors.Adresse}
                                </span>
                            </div>
                            <label className="ml-10 ">Activité Principale</label>

                            <input onChange={HandleChange} value={ActivitePrincipale} type="text" name="ActivitePrincipale" className=" mt-2 px-3 py-2  mb-3 border ml-5  h-10 w-full rounded-sm sm:text-sm " />
                            <div className="grid grid-cols-1">
                                <span className="text-sm  text-red-600 ml-8  mb-2">
                                    {formErrors.ActivitéPrincipale}
                                </span>
                            </div>
                            <label className="ml-10 ">Matricule Fiscale</label>

                            <input onChange={HandleChange} value={MatriculeFiscale} type="text" name="MatriculeFiscale" className="mt-2 px-3 py-2  mb-3 border ml-5  h-10 w-full rounded-sm sm:text-sm " />
                            <div className="grid grid-cols-1">
                                <span className="text-sm  text-red-600 ml-8  mb-2">
                                    {formErrors.MatriculeFiscale}
                                </span>
                            </div>
                            <label className="ml-10">Email</label>

                            <input onChange={HandleChange} value={email} type="email" name="email" className=" mt-2 px-3 py-2 mb-3 ml-5  border  h-10 w-full rounded-sm sm:text-sm " />
                            <div className="grid grid-cols-1">
                                <span className="text-sm  text-red-600 ml-8  mb-2">
                                    {formErrors.email}
                                </span>
                            </div>


                            <label className="ml-10">Bureau</label>
                            <div className="grid grid-cols-1">
                                <Bureau></Bureau>
                            </div>

                            <label className="ml-9">Telephone</label>

                            <input onChange={HandleChange}
                                value={telephone} type="Telephone" name="telephone" className="mt-3 px-3 py-2 ml-5  mb-3  border  h-10 w-full rounded-sm sm:text-sm " />
                            <div className="grid grid-cols-1">
                                <span className="text-sm  text-red-600 ml-8 mb-2">
                                    {formErrors.Telephone}
                                </span>
                            </div>

                        </div>


                        <div className="pl-5 w-11/12">

                            
                            <label className=" ml-10 ">Type</label>

                            <div className="grid grid-cols-1">

                                <TypeClient></TypeClient>
                            </div>
                            <label className=" ml-10 ">Regime Fiscale</label>

                            <div className="grid grid-cols-1">
                                <RegimeFiscale></RegimeFiscale>

                            </div>

                            <label className=" ml-10  ">Ville</label>
                            <div className="grid grid-cols-1">
                                <Ville></Ville>
                            </div>

                            <label className="ml-10">N° Registre de commerce</label>

                            <input onChange={HandleChange} value={RegistreDeCommerce} type="text" name="RegistreDeCommerce" className="mt-2 px-3 py-2 mb-3 ml-5  border  h-10 w-full rounded-sm sm:text-sm " />
                            <div className="grid grid-cols-1">
                                <span className="text-sm  text-red-600 ml-8 mb-2">
                                    {formErrors.Registredecommerce}
                                </span>
                            </div>
                            <label className="ml-10">Fax</label>

                            <input onChange={HandleChange} value={Fax} type="text" name="Fax" className="mt-2 px-3 py-2 mb-3 ml-5  border  h-10 w-full rounded-sm sm:text-sm " />
                            <div className="grid grid-cols-1">
                                <span className="text-sm  text-red-600 ml-8 mb-2">
                                    {formErrors.Fax}
                                </span>
                            </div>
                            <label className=" ml-10  ">Chargé Client</label>

                            <div className="grid grid-cols-1">
                                <ChargeClient></ChargeClient>
                            </div>

                            <label className=" ml-10  ">BrCnss</label>

                            <div className="grid grid-cols-1">
                                <BrCnss></BrCnss>
                            </div>



                            <label className=" ml-10  ">Etat</label>

                            <div className="grid grid-cols-1">
                                <Etat></Etat>
                            </div>


                        </div>
                    </div>
                    <div className="border-4 ml-1 mt-20 w-[102%]"></div>
                    <div className="text-right">
                        <button type="submit" className="w-55 pl-5 pr-5 mt-8 mr-8  mb-8  text-white h-9 bg-indigo-800">Ajouter  un client</button>
                    </div>

                </form>

            </div>
           
        </div>
        { ModalAddSuccefuly &&

       <div className="absolute right-0 top-0 " >
     
       <div  className="flex item-center bg-green-500  border-green-700 border-l-4 py-3 px-20 shadow-md mb-2">
       <div class="bg-green-500  ">
        
          <div class="sm:flex">
            <div class=" flex h-12 w-12 items-center justify-center rounded-full bg-green-700 ">
            <img className=" h-5 w-5  rounded-full text-white" src={check} alt="" />
            </div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
             
              <div class="mt-4">
                <p class="text-sm text-gray-500">Client ajouter avec succées</p>
              </div>
            </div>
          </div>
        </div>
       </div>
     </div>
}

{ Modal &&
       <div className="absolute right-0 top-0 m-2" >
       <div  className="flex item-center bg-red-500  border-red-700 border-l-4 py-3 px-20 shadow-md mb-2">
       <div class="bg-red-500  ">
        
          <div class="sm:flex">
            <div class=" flex h-12 w-12 items-center justify-center rounded-full bg-red-700 ">
            <img className=" h-5 w-5  rounded-full text-white" src={close} alt="" />
            </div>
            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
             
              <div class="mt-4">
                <p class="text-sm text-gray-500">Client  n a pas ajouter avec succées</p>
              </div>
            </div>
          </div>
        </div>
       </div>
     </div>
}
            </>
      


    );
};


export default Client