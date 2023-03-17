import { useState } from 'react';
import './App.css';
import Banner from './components/Banner';
import News from './components/News';
import Planner from './components/Planner';
import Tests from './components/Tests';
import underConstruction from './images/under-construction.jpg'

function App() {
  const [menuSelected, setMenuSelected] = useState([
    { name: "Novidades", active: true },
    { name: "Mural", active: false },
    { name: "Calendário", active: false },
    { name: "Resultados", active: false },
    { name: "Testes", active: false }
  ])

  const [pageTitle, setPageTitle] = useState('Novidades')
  
  const menuItemList = [
    "Novidades",
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
            item.name === 'Novidades' && item.active && <News key={item.name}/>
            ||item.name === 'Mural' && item.active && <Planner key={item.name} />
            || item.name === 'Calendário' && item.active && <img key={item.name} src={underConstruction}/>
            || item.name === 'Resultados' && item.active && <img key={item.name} src={underConstruction}/>
            || item.name === 'Testes' && item.active && <Tests key={item.name}/>
        )}
      </main>
    </div>
  )
}

export default App;
