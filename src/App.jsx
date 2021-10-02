//import Layout from 'layouts/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.scss';

import Index from 'pages';
import Bordercollie from 'pages/bordercollie';
import RhodesianInfoPage from 'pages/rhodesian';
import Login from 'pages/login';
import Register from 'pages/register';
import Sales from 'pages/sales';
import IntMastProd from 'pages/intMastProd';
import Navbar from 'components/Navbar';
import AddSales from 'pages/addSales';
import AddProduct from 'pages/addProduct';
<<<<<<< HEAD
import MasterSales from 'pages/masterSales';
=======
<<<<<<< HEAD
import MaestroUsuario from 'pages/maestroUsuario';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.scss';
=======
>>>>>>> 69758413fc18f8dea95bf0eea93cb451f475aa10
>>>>>>> 067adda5a27dc57dc03e6b6ad8d2383ead28e598

//Libreria FontAwesome
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import Layout from 'layout/Layout';

library.add(fab, faCheckSquare, faCoffee);

function App() {
  return (
    <div className='App'>
      {/*<Router>
        <Switch>
          <Route path='/rhodesian'>
            <RhodesianInfoPage />
          </Route>
          <Route path='/AddProduct'>
            <AddProduct />
          </Route>
          <Route path='/AddSales'>
            <Layout>
              <AddSales />
            </Layout>
          </Route>
          <Route path='/Navbar'>
            <Navbar />
          </Route>
          <Route path='/bordercollie'>
            <Bordercollie />
          </Route>
          <Route path='/Index'>
            <Index />
          </Route>
          <Route path='/Register'>
            <Register />
          </Route>
          <Route path='/Sales'>
            <Sales />
          </Route>
          <Route path='/'>
            <Login />
          </Route>
        </Switch>
      </Router>*/}

      <Router>
        <Switch>
<<<<<<< HEAD
          <Route
            path={['/AddSales', '/AddProduct', '/IntMastProd', '/MasterSales']}
          >
=======
<<<<<<< HEAD
          <Route path={['/AddSales', '/AddProduct','/MaestroUsuario']}>
=======
          <Route path={['/AddSales', '/AddProduct','/IntMastProd']}>
>>>>>>> 69758413fc18f8dea95bf0eea93cb451f475aa10
>>>>>>> 067adda5a27dc57dc03e6b6ad8d2383ead28e598
            <Layout>
              <Switch>
                <Route path='/AddSales'>
                  <AddSales />
                </Route>
                <Route path='/AddProduct'>
                  <AddProduct />
<<<<<<< HEAD
                </Route>  
                <Route path='/MaestroUsuario'>
                  <MaestroUsuario />
                </Route>           
              </Switch>           
=======
                </Route>
                <Route path='/IntMastProd'>
                  <IntMastProd />
                </Route>
                <Route path='/MasterSales'>
                  <MasterSales />
                </Route>
              </Switch>
>>>>>>> 69758413fc18f8dea95bf0eea93cb451f475aa10
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
