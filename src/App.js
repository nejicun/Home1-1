import ShopItemClass from './componets/ShopItemClass.js';
import ShopItemFunc from './componets/ShopItemFunc.js';
import './css/main.css';
import ShopItemModel from './models/ShopItemModel.js';


function App() {
  const item = new ShopItemModel (
    'Tiger of Sweden',
    'Leonard coat',
    'Minimalistic coat in cotton-blend',
    'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    399, 
    '£'
  )

  return (
    <div className='items'>
    <div className="container">
      <div className="background-element">
    </div>
    <div className="highlight-window">
      <div className='highlight-overlay'></div>
    </div>
    <div className="window">
     <ShopItemFunc item={item} />
    </div>
  </div>
      <div className="container">
    <div className="highlight-window">
      <div className='highlight-overlay'></div>
    </div>
    <div className="window">
     <ShopItemClass item={item} />
    </div>
  </div>
  </div>
  );
}

export default App;
