import style from './App.module.css'
import Display from './components/Display'
import ButtonsContainer from './components/ButtonsContainer'
import { useState } from 'react'
// import img1 from '../src/images/background.png'


function App() {
  const [Caldisplay, setCaldisplay] = useState("");

   const onButtonclick = (buttontext) => {
    if (buttontext === "C"){
      setCaldisplay("");

    } else if(buttontext ==="="){
      const result = eval(Caldisplay);
      setCaldisplay(result);

    } else {
      const newDisplayvalue =(Caldisplay + buttontext);
      setCaldisplay(newDisplayvalue);
    }

   }
  //  console.log(buttontext);

  return (<> <div className={style.background}> 
    <div className={style.calculator}>
    <Display displayvalue={Caldisplay}></Display>
    <ButtonsContainer onButtonclick={onButtonclick}></ButtonsContainer>
  </div>
  </div>
  </>
  )
}

export default App
