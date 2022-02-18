import styles from './App.module.css';
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from './router/AppRouter';

const App = () => {
  return (
    <div className={styles.App}>
      <Router>
        <AppRouter/>
      </Router>
    </div>
  );
}

export default App;
