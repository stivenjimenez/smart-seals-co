import React from "react";
import * as BiIcons from "react-icons/bi";

export const SidebarData = [
  {
    title: "Monitoreo",
    path: "/",
    icon: <BiIcons.BiCurrentLocation size={17} />,
    cName: "nav-text",
  },
  {
    title: "Empresas",
    path: "/companies",
    icon: <BiIcons.BiWrench size={17} />,
    cName: "nav-text",
  },
  {
    title: "Sistema",
    path: "/system",
    icon: <BiIcons.BiTask size={17} />,
    cName: "nav-text",
  },
  {
    title: "Liquidación",
    path: "/settlement",
    icon: <BiIcons.BiTask size={17} />,
    cName: "nav-text",
  },
  {
    title: "Análisis",
    path: "/analysis",
    icon: <BiIcons.BiPieChartAlt size={17} />,
    cName: "nav-text",
  },
];
