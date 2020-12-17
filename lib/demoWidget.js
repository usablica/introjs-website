import React, {Component} from "react";

export class DemoWidget extends Component {
  render() {
    return (
      <div className="demo-container">
        <div data-title="Welcome!" data-intro="Hello World! 👋" className="card-demo" style={{width: '300px'}}>
          <div className="card shadow--md">
            <div className="card__image" data-intro="Intro.js can highlight on elements">
              <img
                src="https://images.unsplash.com/photo-1506624183912-c602f4a21ca7?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                alt="Image alt text"
                title="Logo Title Text 1"
              />
            </div>
            <div className="card__body" data-title="Farewell!" data-intro="And this is the last step!">
              <h4>Quaco Lighthouse</h4>
              <small>
                The Quaco Head Lighthouse is a well maintained lighthouse close to St.
                Martins. It is a short, beautiful walk to the lighthouse along the
                seashore.
              </small>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

