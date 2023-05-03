import "./App.css";
import Link from "./components/Link";
import Route from "./components/Route";
import DropdownPage from "./pages/DropdownPage";
import AccordionPage from "./pages/AccordionPage";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";

const [DROPDOWN_LOCATION, ACCORDION_LOCATION, MODAL_LOCATION] = [
  "/dropdown",
  "/accordion",
  "/modal",
];

const routes = [
  { name: "Dropdown", link: DROPDOWN_LOCATION, child: <DropdownPage /> },
  {
    name: "Accordion",
    link: ACCORDION_LOCATION,
    child: <AccordionPage />,
  },
  {
    name: "Modal",
    link: MODAL_LOCATION,
    child: <ModalPage />,
  },
  {
    name: "Table",
    link: "/table",
    child: <TablePage />,
  },
  {
    name: "Counter",
    link: "/counter",
    child: <CounterPage />,
  },
];

function App() {
  return (
    <div className="body">
      <div className="nav-flex-body">
        <div className="ui celled list">
          {routes.map((route) => {
            return (
              <div className="item" key={route.link}>
                <div className="content">
                  <div className="header">
                    <Link to={route.link}>{route.name}</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="body-content">
          {routes.map((route) => {
            return (
              <Route key={route.link} path={route.link}>
                {route.child}
              </Route>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
