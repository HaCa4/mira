"use client";
import { useSnapshot } from "valtio";

import UserView from "./user-view";
import OrderDetailsView from "./order-details-view";

import { state } from "@/store/store";

import { IOrderDetailsResult } from "@/utilities/types/dbTypes";
import styles from "./user-view.module.css";
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------
const OrderClientView = ({ details }: { details: IOrderDetailsResult }) => {
  const { setDetails } = useSnapshot(state);
  setDetails(details);
  return (
    <div className={styles.base}>
      <OrderDetailsView />
      <UserView />
    </div>
  );
};

export default OrderClientView;
