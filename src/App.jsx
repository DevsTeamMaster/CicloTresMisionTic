//import Layout from 'layouts/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.scss';

import Login from 'pages/login';
import Register from 'pages/register';
import Navbar from 'components/Navbar';
import AddSales from 'pages/addSales';
import AddProduct from 'pages/addProduct';
import IntMastProd from 'pages/intMastProd';
import MasterSales from 'pages/masterSales';
import MasterUser from 'pages/masterUser';
import MasterProducts from 'pages/masterProducts';

//Libreria FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import Layout from 'layout/Layout';

library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route
            path={[
              '/AddSales',
              '/AddProduct',
              '/MasterUser',
              '/IntMastProd',
              '/MasterSales',
              '/MasterProducts',
            ]}
          >
            <Layout>
              <Switch>
                <Route path='/AddSales'>
                  <AddSales />
                </Route>
                <Route path='/AddProduct'>
                  <AddProduct />
                </Route>
                <Route path='/MasterUser'>
                  <MasterUser />
                </Route>
                <Route path='/IntMastProd'>
                  <IntMastProd />
                </Route>
                <Route path='/MasterSales'>
                  <MasterSales />
                </Route>
                <Route path='/MasterProducts'>
                  <MasterProducts />
                </Route>
              </Switch>
            </Layout>
          </Route>
          <Route path={['/', '/Register']}>
            <Switch>
              <Route path='/Register'>
                <Register />
              </Route>
              <Route path='/'>
                <Login />
              </Route>
            </Switch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
