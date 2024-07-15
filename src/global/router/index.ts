import { OrdersTable } from "../../modules/OrdersTable";

import IconPackage from "../../../public/icons/IconPackage.svg";
import { AppRoute } from "../../shared/interfaces/App.interfaces";
export const routesList: AppRoute[] = [
  {
    path: "/orders",
    element: OrdersTable,
    title: "Orders",
    previewIcon: IconPackage,
    isProtected: true,
  },
];
