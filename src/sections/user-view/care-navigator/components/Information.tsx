import { useSnapshot } from "valtio";

import { convertFirstLettersToUpperCase, removeUnderscores } from "@/utilities/helpers/textHelpers";
import { state } from "@/store/store";
import styles from "./information.module.css";

// ----------------------------------------------------------------------

const Information = () => {
  const { miraOSsummary, miraCareOptions } = useSnapshot(state).details;

  const { chiefComplaint, conditionCategory, triageLevel } = miraOSsummary;

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <strong>Chief Complaint: </strong>
        <p>{chiefComplaint}</p>
      </div>
      <div className={styles.item}>
        <strong>Condition Category: </strong>
        <p>{conditionCategory}</p>
      </div>
      <div className={styles.item}>
        <strong>Triage Level: </strong>
        <p>{convertFirstLettersToUpperCase(triageLevel[0])}</p>
      </div>
      <div className={styles.item}>
        <strong>Mira Care Options: </strong>
        {miraCareOptions.map((option) => (
          <p key={option.careType[0]}>
            {convertFirstLettersToUpperCase(removeUnderscores(option.careType[0]))}: {option.description}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Information;
