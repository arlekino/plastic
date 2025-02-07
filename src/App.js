import logo from './logo.svg';
import './App.css';
import { Button, Card, Input } from './components';
import './components/styles.css';

function App() {
  return (
    <div className="App">
      <h1>My Component Library</h1>

      <Button variant="primary" onClick={() => alert('Button clicked!')}>Primary Button</Button>
      <Button as="a" href="https://github.com/arlekino/plastic" target="_blank">Link Button</Button>
      <Button as="input" type='submit'>Save form</Button>

      <Input 
        label="Write your name" 
        value="Test input" 
        name="login" 
      />

      <Card title="Sample Card" image="logo192.png">
        <p>This is a sample card with some content.</p>
      </Card>

      <Input
        label="Name"
        name="username"
        placeholder="Enter your name"
        onChange={(e) => console.log(e.target.value)}
      />

      <Input
        label="Password"
        name="pass"
        type="password"
      />
    </div>
  );
}

export default App;