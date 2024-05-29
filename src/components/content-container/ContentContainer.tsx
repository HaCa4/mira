import { ContentContainerProps } from "@/utilities/types/componentTypes";
import styles from "./content-container.module.css";

// ----------------------------------------------------------------------

const ContentContainer = ({ children, direction }: ContentContainerProps) => {
  return (
    <div className={styles.container} style={{ flexDirection: direction }}>
      {children}
    </div>
  );
};

export default ContentContainer;
