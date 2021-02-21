import React from "react";
import { ReactComponent as Base } from "../../icons/base.svg";
import { ReactComponent as Assets } from "../../icons/assets.svg";
import { ReactComponent as Applications } from "../../icons/applications.svg";
import { ReactComponent as Employees } from "../../icons/employees.svg";
import { ReactComponent as Clients } from "../../icons/clients.svg";
import { ReactComponent as Customization } from "../../icons/customization.svg";
import {
  APPLICATIONS_ROUTE,
  ASSETS_ROUTE,
  BASE_ROUTE,
  CLIENTS_ROUTE,
  CUSTOMIZATION_ROUTE,
  EMPLOYEES_ROUTE,
} from "../../utils/const";

export const SidebarData = [
  {
    title: "База знаний",
    icon: <Base />,
    link: BASE_ROUTE,
  },
  {
    title: "Заявки",
    icon: <Applications />,
    link: APPLICATIONS_ROUTE,
  },
  {
    title: "Сотрудники",
    icon: <Employees />,
    link: EMPLOYEES_ROUTE,
  },
  {
    title: "Клиенты",
    icon: <Clients />,
    link: CLIENTS_ROUTE,
  },
  {
    title: "Активы",
    icon: <Assets />,
    link: ASSETS_ROUTE,
  },
  {
    title: "Настройки",
    icon: <Customization />,
    link: CUSTOMIZATION_ROUTE,
  },
];
