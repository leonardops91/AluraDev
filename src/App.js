// import './reset.css';
import './App.css';
import logo from './assets/Logo.png';
import foto from './assets/Photo.png';
import icon_code from './assets/icon_code.svg';
import icon_users from './assets/icon_users.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="Logo AluraDev" />
        <input type="text" name="search" className="input-text" id="search" placeholder="Busque por algo" />
        <div className="info-user">
          <img src={foto} alt="Foto user" />
          <span className="user-name">Harry</span>
        </div>
      </header>

      <body className="app-body">
        <div className="app-menu">
          <p className="menu-title">Menu</p>
          <ul>
            <li>
              <a href="http://localhost:3000"><div className="menu-icon" id="editor-icon"><img src={icon_code} alt="icon" /></div>Editor de código</a>
            </li>
            <li>
              <a href="http://localhost:3000"><div className="menu-icon" id="comunity-icon"><img src={icon_users} alt="icon" /></div>Comunidade</a>
            </li>
          </ul>
        </div>

        <div className="app-content">
          <div className="codeForm">
            <textarea type="textarea" className="code" >
              const pluckDeep = key =&gt; obj =&gt; key.split('.').reduce((accum, key) =&gt; accum[key], obj)
              const compose = (...fns) =&gt; res =&gt; fns.reduce((accum, next) =&gt; next(accum), res)
              const unfold = (f, seed) =&gt; &#123;
              const go = (f, seed, acc) =&gt; &#123;
              const res = f(seed)
              return res ? go(f, res[1], acc.concat([res[0]])) : acc
              &#125;
              return go(f, seed, [])
              &#125;
          </textarea>

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
          <input type="text" name="project-description" id="project-description" className="input-text" placeholder="Descrição do seu projeto" />
          <p className="menu-title">personalização</p>
          <select name="input-language" className="input-text" id="input-language">
            <option value="Javascipt">Javascript</option>
            <option value="HTML">HTML</option>
            <option value="CSS">CSS</option>
          </select>
          <input type="color" icon_code="blue" name="color-pick" id="color-pick" />
          <input type="button" value="Salvar projeto" className="button" />
        </div>
      </body>
    </div >
  );
}

export default App;
