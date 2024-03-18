import styles from "./Header.module.css";

type Props = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export const Header = ({ title, description, children }: Props) => {
  return (
    <div className={styles.Header}>
      <div className={styles.Container}>
        <h1 className={styles.Title}>{title}</h1>
        {!!description && (
          <span className={styles.Description}>{description}</span>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};
