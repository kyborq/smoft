import styles from "./Layout.module.css";

type Props = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className={styles.Layout}>
      <div className={styles.Content}>{children}</div>
    </div>
  );
};
