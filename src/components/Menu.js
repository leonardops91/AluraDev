import icon_code from '../assets/icon_code.svg';
import icon_users from '../assets/icon_users.svg';

function Menu() {
    return (
        <div className="app-menu">
            <p className="menu-title">Menu</p>
            <ul>
                <li>
                    <a href="http://localhost:3000"><div className="menu-icon" id="editor-icon"><img src={icon_code} alt="icon" /></div>Editor de código</a>
                </li>
                <li>
                    <a href="http://localhost:3000/community"><div className="menu-icon" id="comunity-icon"><img src={icon_users} alt="icon" /></div>Comunidade</a>
                </li>
            </ul>
        </div>
    )
}

export default Menu();