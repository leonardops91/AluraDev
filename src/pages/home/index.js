import Header from '../../components/Header';
import Menu from '../../components/Menu';
import { useState } from 'react';


function CodeEditor() {
    const [color, setColor] = useState("#6BD1FF");

    function mudaCorPainel(event) {
        event.preventDefault();
        setColor(document.querySelector('#color-pick').value);
        let codePanel = document.querySelector('.codeForm');
        codePanel.style.backgroundColor = color;
    }
    return (
        <div className="App">

            {Header}

            <body className="app-body">
                {Menu}
                <div className="app-content">
                    <div className="codeForm">
                        <textarea type="textarea" placeholder="Digite seu código aqui..." className="code" autoFocus={true} />

                        <div className="mac_buttons">
                            <div className="circle" style={{ backgroundColor: '#FF5F56' }} ></div>
                            <div className="circle" style={{ marginRight: 8, marginLeft: 8 }}></div>
                            <div className="circle" style={{ backgroundColor: '#27C93F' }}></div>
                        </div>
                    </div>
                    <input type="button" value="Visualizar com o highlight" className="applyButton" />
                </div>

                <div className="app-form">
                    <p className="menu-title">seu projeto</p>
                    <input type="text" name="project-name" id="project-name" className="input-text" placeholder="Nome do seu projeto" />
                    <textarea type="textarea" name="project-description" id="project-description" className="input-text" placeholder="Descrição do seu projeto" />
                    <p className="menu-title">personalização</p>
                    <select name="input-language" className="input-text" id="input-language">
                        <option value="Javascipt">Javascript</option>
                        <option value="HTML">HTML</option>
                        <option value="CSS">CSS</option>
                    </select>
                    <input type="color" value={color} onChange={e => (mudaCorPainel(e))} icon_code="blue" name="color-pick" id="color-pick" />
                    <input type="button" value="Salvar projeto" className="button" />
                </div>
            </body>
        </div >
    )
}

export default CodeEditor;