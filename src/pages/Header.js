import logo from '../assets/Logo.png';
import foto from '../assets/Photo.png';

function Header() {
    return (
        <header className="App-header">
            <img src={logo} className="logo" alt="Logo AluraDev" />
            <input type="text" name="search" className="input-text" id="search" placeholder="Busque por algo" />
            <div className="info-user">
                <img src={foto} alt="Foto user" />
                <span className="user-name">Harry</span>
            </div>
        </header>
    )
}
export default Header();