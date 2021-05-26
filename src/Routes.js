import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Community from './pages/community';
import CodeEditor from "./pages/home";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={CodeEditor} />
                <Route path='/community' component={Community} />
            </Switch>
            <Switch></Switch>
        </BrowserRouter>
    )
}

export default Routes;