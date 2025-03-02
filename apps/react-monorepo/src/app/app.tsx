// Uncomment this line to use CSS modules
// import styles from './app.module.css';
import { Ui } from '@react-monorepo/ui';
import NxWelcome from './nx-welcome';
import { Products } from '@react-monorepo/products';
import { util } from '@react-monorepo/util';

export function App() {
  return (
    <div>
      <NxWelcome title="react-monorepo" />
      <Ui />
      <Products />
      {util()}
    </div>
  );
}

export default App;
