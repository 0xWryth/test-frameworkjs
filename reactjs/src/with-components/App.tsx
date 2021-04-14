import * as React from 'react';
import ButtonCounter from './ButtonCounter';

export interface AppProps {}
 
export interface AppState {
  counter: number
}
 
class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }
  
  decrement() {
    this.setState({ counter: this.state.counter - 1 });
  }

  render() { 
    return <>
      <span>{this.state.counter}</span>
      <div className="button-group">
          <ButtonCounter onClick={this.increment.bind(this)} label="Incrémenter"/>
          <ButtonCounter onClick={this.decrement.bind(this)} label="Décrémenter"/>
      </div>
    </>
  }
}
 
export default App;