import {
  APPLICATIONS_ROUTE,
  ASSETS_ROUTE,
  BASE_ROUTE,
  CLIENTS_ROUTE,
  CUSTOMIZATION_ROUTE,
  EMPLOYEES_ROUTE,
} from "./utils/constants";
import Base from "./components/pages/base";
import Applications from "./components/pages/applications/applications";
import Employees from "./components/pages/employees";
import Clients from "./components/pages/clients";
import Assets from "./components/pages/assets";
import Customization from "./components/pages/customization";

export const publicRoutes = [
  {
    path: BASE_ROUTE,
    Component: Base,
  },
  {
    path: APPLICATIONS_ROUTE,
    Component: Applications,
  },
  {
    path: EMPLOYEES_ROUTE,
    Component: Employees,
  },
  {
    path: CLIENTS_ROUTE,
    Component: Clients,
  },
  {
    path: ASSETS_ROUTE,
    Component: Assets,
  },
  {
    path: CUSTOMIZATION_ROUTE,
    Component: Customization,
  },
];
