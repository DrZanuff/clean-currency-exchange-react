import './Main.css';
import Button from './Button';
import InputCoin from './InputCoin';
import { useState } from 'react';

function Main(){
    const [isSelected, setSelect] = useState(false);

    return(
        <div className='box'>

            <h1>CLEAN CURRENCY EXCHANGE</h1>
            <hr></hr>
            <div id="row">
                <Button></Button>
                <Button></Button>
            </div>
            <div className='container'>

                { isSelected === true &&
                    <div>
                        <InputCoin></InputCoin>
                        <InputCoin></InputCoin>
                    </div>
                }

            </div>

        </div>
    );
}

export default Main;