import { useState } from "react";
import Client from './AddClient'
import Parametre from './Parametre'
import logo from '../assets/down-arrow.png'
import ListeClients from './ListdesClients'
const ContentCient = ({ currentPage }) => {

  // eslint-disable-next-line default-case
  switch (currentPage) {
    case 1:
      return <Client />;
    case 2:
      return <ListeClients />;
    case 3:
      return <Parametre />;


  }
};
const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [Submenuopen, setSubmenuOpen] = useState(false);
  const Menu = [
    {
      title: "Clients",
      submenu: true,
      submenuItems: [
        {
          id: 1,
          title: "Ajouter un client"
        },
        { id: 2, title: "Liste des Clients" },
      ]
    },
    {
      title: "Parametre",
      submenu: true,
      submenuItems: [
        { id: 3, title: "Parametre" }
      ]
    }
  ]
  return (


  <div className=" min-h-full  flex  relative   ">



    <div
      className=" w-60   text-white bg-cyan-600 py-10 px-4 space-y-6 ">

          
            <span className="font-bold text-2xl pt-5 sm:text-3xl  text-white">Menu</span>
          
          <nav>
          <ul className="mt-4">
            {Menu.map((menu, index) => (
              <>
                <li key={index}  className=" text-small gap-x-4 cursor-pointer flex
      p-2 rounded-md mt-2 hover:bg-cyan-700 hover:text-cyan-300 group-first " >
                  <span  className="text-base font-medium float-left text-white">{menu.title}</span>
                  {menu.submenu && (

<img className=" h-5 w-5  ml-[50px]" src={logo} alt="" onClick={() => setSubmenuOpen(!Submenuopen)} />
)}
                </li>

                {menu.submenu && Submenuopen && (
                  <ul>
                    {menu.submenuItems.map((submenuItem, index) => (
                      <li onClick={() => setCurrentPage(submenuItem.id)} key={index} className="text-gray text-sm flex items-start  ml-8 gap-x-4 cursor-pointer 
        p-2 rounded-md mt-2 hover:bg-cyan-700 hover:text-cyan-300" >
<span  className=" font-medium text-sm float-left text-white">{submenuItem.title}</span>
                        

                      </li>

                    ))}
                  </ul>
                )}
              </>
            ))}

          </ul>
</nav>

        </div>
      

      <div className=" flex-1 md:w-8/12  ">
        <ContentCient currentPage={currentPage} />
      </div>
    </div>
    


  )
}

export default Home 