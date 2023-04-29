import "./App.css"
import { BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import { NavLink } from "react-router-dom";
import Page1 from"./components/page1"; 
import Page2 from"./components/page2"; 

function App() {
  return (
    <div>
      <header className="App-header">
        <h1 className="image-logo">ChefLife<sup id="copy">©</sup></h1>
      
          <Router>
            <div className="list">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="page1">Brownies</Link></li>
                <li><Link to="page2">Raspberry Cake</Link></li>
              </ul>
            </div> 
        <Routes>
    <Route exact path="/" element={
    <header>
      <h1>All Recipes</h1> 
      <h2 id="welcome">Welcome! Click on any baked treat below to learn how to make it!</h2>

<body>
  <div>
    <NavLink to="page1"><a className="Link-page1" href=""><img id="image-menu" src="https://drive.google.com/uc?export=view&id=1OLd82SVQGzk9yaiBuIjGR8MYEuaHJlub" alt="drive"/></a></NavLink>
    <NavLink to="page2"><a className="Link-page2" href=""><img id="image-menu-two" src="https://drive.google.com/uc?export=view&id=1bU8pxFAC3drDgQL45olaYJSoOUVdpZTW" alt="drive"/></a></NavLink>
  </div>
  
  <div className="food-name">
    <text>Brownies</text>
    <text id="RCake">Raspberry Cake</text>
  </div>

</body>
</header>} />
    <Route exact path="page1" element={<Page1 />} />
    <Route exact path="page2" element={<Page2 />} />
  </Routes>
</Router>
      </header>
      <body>
      
      </body>
    </div>  
      
  );
}



export default App;
//htm lorder matters
