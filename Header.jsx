import CalcImage from '../assets/investment-calculator-logo.png';

const Header = () =>{

    return(
        <header id='header'>
        <img src={CalcImage} alt='Image'/>
        <h1>Investment Calculator</h1>
        </header>
    )
};

export default Header;