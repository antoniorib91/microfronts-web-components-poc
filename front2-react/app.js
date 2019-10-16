
import React from 'react';
import ReactDOM from 'react-dom';

export default class AppReact extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    console.log('Connected');
    const div = document.createElement('div');
    div.id = 'app-react';
    const shadow = this.attachShadow({ mode: 'open'});
    shadow.appendChild(div);
    ReactDOM.render((<h1>Hello From React</h1>), div)
    // retargetEvents(shadow);
  }

  disconnectedCallback () {
    console.log('Diconnected');
  }

}
window.customElements.define('app-react', AppReact);

// window.customElements.define('app-react', AppReact);

// ReactDOM.render(<h1>Hello From React!</h1>, document.getElementById('app-react'));