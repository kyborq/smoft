import styles from "./Button.module.css";

type Props = {
  title: string;
  onClick?: () => void;
};

export const Button = ({ title, onClick }: Props) => {
  return (
    <button className={styles.ActionButton} onClick={onClick}>
      {title}
    </button>
  );
};
