import './App.css';
import Container from "./Container"
import { ColorProvider } from './contexts/ColorContext';


function App() { 

  return (
    <ColorProvider>
      <Container/>
    </ColorProvider>
  );
}

export default App;
