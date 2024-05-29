import { useSnapshot } from "valtio";
import { state } from "@/store/store";
import styles from "./chief-compliant.module.css";

// ----------------------------------------------------------------------

const ChiefCompliant = () => {
  const { chiefComplaint } = useSnapshot(state).details.miraOSsummary;

  return (
    <div className={styles.container}>
      <strong>Chief Complaint: </strong>
      <p>{chiefComplaint}</p>
    </div>
  );
};

export default ChiefCompliant;
