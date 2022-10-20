import './App.css';
import Header from './Header';
import Main from './Main';
import React, {useState} from 'react';

function App() {
  const [qtdOrdersProduct, setQtdOrdersProduct] = useState(0);
  const [btnAddProdCartIsActive, setBtnAddProdCartIsActive] = useState(false);

  return (
    <div className="Container">
      <Header
        qtdOrdersProduct={qtdOrdersProduct}
        setQtdOrdersProduct={setQtdOrdersProduct}
        setBtnAddProdCartIsActive={setBtnAddProdCartIsActive}
      />
      <Main
        setQtdOrdersProduct={setQtdOrdersProduct}
        setBtnAddProdCartIsActive={setBtnAddProdCartIsActive}
      />
    </div>
  );
}

export default App;
