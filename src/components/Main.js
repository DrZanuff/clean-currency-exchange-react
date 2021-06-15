import './Main.css';
import Button from './Button';

function Main(){
    return(
        <div className='box'>
            <h1>CLEAN CURRENCY EXCHANGE</h1>
            <hr></hr>
            <div id="row">
                <Button></Button>
                <Button></Button>
            </div>
        </div>
    );
}

export default Main;