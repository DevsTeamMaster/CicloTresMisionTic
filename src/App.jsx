//import Layout from 'layouts/Layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'styles/styles.scss';


import Index from 'pages';
import Bordercollie from 'pages/bordercollie';
import RhodesianInfoPage from 'pages/rhodesian';
import Login from 'pages/login';
import Register from 'pages/register';
import Sales from 'pages/sales';
import IntMastProd  from 'pages/intMastProd';
import Navbar from 'components/Navbar';
import AddSales from 'pages/addSales';
import AddProduct from 'pages/addProduct';

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
          <Route path={['/AddSales', '/AddProduct','/IntMastProd']}>
            <Layout>
              <Switch>
                <Route path='/AddSales'>
                  <AddSales />
                </Route>
                <Route path='/AddProduct'>
                  <AddProduct />
                </Route>
                <Route path='/IntMastProd'>
                  <IntMastProd />
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
