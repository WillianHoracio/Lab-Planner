import { useState } from 'react'
import TestCard from '../TestCard'
import TestSocialInteraction from '../TestSocialInteraction';
import './Tests.css'

const Tests = () => {

  const [activeTestSocialInteraction, setActiveTestSocialInteraction] = useState(false)


  const toggleSocialInteraction = () => {
    setActiveTestSocialInteraction(!activeTestSocialInteraction)
  }

  return(
    <section>
      {/*-------------- TEST SOCIAL INTERACTION --------------*/}
      
      {activeTestSocialInteraction && <TestSocialInteraction  closeTest={toggleSocialInteraction}/>}


      {/*-----------------------------------------------------*/}


      <TestCard title="Teste de Interação Social" openTest={toggleSocialInteraction}/>
    </section>
  )
}

export default Tests
