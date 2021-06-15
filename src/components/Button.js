import Select from 'react-select';
import './Button.css';

let items = [
    {value: 'USD', label: 'USD'},
    {value: 'BRL', label: 'BRL'},
    {value: 'CAD', label: 'CAD'},
    {value: 'EUR', label: 'EUR'},
    {value: 'JPY', label: 'JPY'},
    {value: 'BTC', label: 'BTC'},
    {value: 'ETH', label: 'ETH'},
];

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        color : 'white',
        ':hover': {background: '#00000080'},
    }),
    menu: (provided ,state ) => ({
        ...provided,
        background : '#04040446',
        //backgroundColor : state.isSelected ? '#ffffff00' : '#ffffff',
    })
}

function Button(){
    return(
        <div className="select">
            <Select styles={customStyles} options={items}></Select>
        </div>
    )
}

export default Button;