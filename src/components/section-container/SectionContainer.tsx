import { SectionContainerProps } from "@/utilities/types/componentTypes";
import styles from "./section-container.module.css";

// ----------------------------------------------------------------------

const SectionContainer = ({ children, title, button }: SectionContainerProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>{title}</p>
        {button}
      </div>
      {children}
    </div>
  );
};

export default SectionContainer;
