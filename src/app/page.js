import styles from "./page.module.css";
import Table from '../component/Table';
import Navbar from '../component/Navbar';


export default function Home() {
  return (
    <>
      <div className={styles.page}>
        <Navbar />
        <main className={styles.main}>
          <div>
            <h1>Search Records</h1>
            <p>Easily search, filter, and view detailed information about your records. Use the filters below to find the records you are looking for.</p>
            <Table />
          </div>
        </main>
        <footer className={styles.footer}>
          <div>
            <p>Search records web application</p>
          </div>
        </footer>
      </div>
    </>
  );
}
