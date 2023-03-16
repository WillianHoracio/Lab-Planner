import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import Planner from './components/Planner';

function App() {
  const [menuSelected, setMenuSelected] = useState([
    { name: "Mural", active: true },
    { name: "Calendário", active: false },
    { name: "Resultados", active: false },
    { name: "Testes", active: false }
  ])

  const [pageTitle, setPageTitle] = useState('Mural')
  
  const menuItemList = [
    "Mural",
    "Calendário",
    "Resultados",
    "Testes"
  ]

  const selectMenuItem = (index) => {
    const updatedMenuSelected = menuSelected.map((item, i) => {
      if (i === index) {
        setPageTitle(item.name)
        return { ...item, active: true };
      } else {
        return { ...item, active: false };
      }
    });
    setMenuSelected(updatedMenuSelected);
  };

  const imageUnderConstructionLink = "https://img1.gratispng.com/20180925/ahe/kisspng-clip-art-illustration-image-vector-graphics-wanted-holland-circular-hotspot-5baa1f9b311121.005054461537875867201.jpg"
  
  return (
    <div className='App'>
      <header className='banner'>
        <Banner label={pageTitle} />
      </header>
      <section className='menu'>
        <nav>
          <ul>
            {menuItemList.map((item, index) => (
              <li
                style={{backgroundColor: menuSelected[index].active ? 'white' :'#2c4f80', color: menuSelected[index].active ? 'black' :'white'}} 
                key={index} 
                onClick={() => selectMenuItem(index)}>
                
                <h2 className={menuSelected[index].active ? "active" : ""}>{item}</h2>
              
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <main className='content'>
        {menuSelected.map(item => 
            item.name === 'Mural' && item.active && <Planner key="item.name" />
            || item.name === 'Calendário' && item.active && <img key="item.name" src={imageUnderConstructionLink}/>
            || item.name === 'Resultados' && item.active && <img key="item.name" src={imageUnderConstructionLink}/>
            || item.name === 'Testes' && item.active && <img key="item.name" src={imageUnderConstructionLink}/>
        )}
      </main>
    </div>
  )
}

export default App;
