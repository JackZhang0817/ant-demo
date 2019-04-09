import styles from './index.css';


export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>这里就不用了</li>
        <li>
          这里输入一些内容
        </li>
      </ul>
    </div>
  );
}
