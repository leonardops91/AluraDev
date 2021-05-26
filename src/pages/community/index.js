import Header from '../Header';
import Menu from '../Menu';
import './style.css';



function Community() {

    return (
        < div className="App" >
            { Header}
            <body className="app-body">
                {Menu}
                <div className="saved-codes">
                    <div className="codeBoard"></div>
                    <div className="codeBoard"></div>
                </div>
            </body>
        </div >

    )
}

export default Community;