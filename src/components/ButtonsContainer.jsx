import style from './ButtonsContainer.module.css'

const ButtonsContainer = ({onButtonclick}) => {

    const buttonNames = ["8", "9", "C", "6", "7", "/", "4", "5", "*", "2", "3", "-", "0", "1", "+", ".", "="];


    return ( <div className={style.container}>
        {buttonNames.map((buttonNames) => (<button className={style.button} onClick={() => onButtonclick(buttonNames)}>{buttonNames}</button> ))}

  </div>
    )
}


export default ButtonsContainer;