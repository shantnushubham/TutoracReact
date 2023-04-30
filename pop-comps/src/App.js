import "./App.css";
import Link from "./components/Link";
import Route from "./components/Route";
import DropdownPage from "./pages/DropdownPage";
import AccordionPage from "./pages/AccordionPage";

const [DROPDOWN_LOCATION, ACCORDION_LOCATION] = ["/dropdown", "/accordion"];

function App() {
  return (
    <div className="body">
      {/* <div className="nav-flex-body">
        <div className="ui celled list">
          <div className="item">
            <div className="content">
              <div className="header">
                <Link to={DROPDOWN_LOCATION}>Dropdown</Link>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <div className="header">
                <Link to={ACCORDION_LOCATION}>Accordion</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="body-content">
          <Route path={DROPDOWN_LOCATION}>
            <DropdownPage />
          </Route>
          <Route path={ACCORDION_LOCATION}>
            <AccordionPage />
          </Route>
        </div>
      </div> */}
      <DropdownPage />
    </div>
  );
}

export default App;
