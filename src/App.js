import logo from './logo.svg';
import './App.css';
import { Button, Card, Input } from './components';
import './components/styles.css';

function App() {
  return (
    <div className="App">
      <h1>My Component Library</h1>

      <Button variant="primary" onClick={() => alert('Button clicked!')}>
        Primary Button
      </Button>

      <Button as="a" href="https://github.com/arlekino/plastic" target="_blank">Link Button</Button>
      <Button as="input" type='submit'>Save form</Button>

      <Card title="Sample Card" image="logo192.png">
        <p>This is a sample card with some content.</p>
      </Card>

      <Input
        label="Name"
        placeholder="Enter your name"
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
}

export default App;
