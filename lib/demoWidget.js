import React, {Component} from "react";

export class DemoWidget extends Component {
  render() {
    const populate = this.props.populate !== undefined ? this.props.populate : true;

    return (
      <div className="demo-container">
        <div { ...(populate ? {'data-title': "Welcome!", 'data-intro': "Hello World! 👋"} : {}) } className="card-demo" style={{width: '300px'}}>
          <div className="card shadow--md">
            <div className="card__image" { ...(populate ? {'data-intro': "Intro.js can highlight elements ✨" } : {})}>
              <img
                src="https://images.unsplash.com/photo-1506624183912-c602f4a21ca7?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
                alt="Image alt text"
                title="Logo Title Text 1"
              />
            </div>
            <div className="card__body" { ...(populate ? { 'data-title': "Farewell!", 'data-intro': "And this is the last step!" } : {})}>
              <h4 className="card-demo-link">
                <a href={void(0)} onClick={() => alert('You clicked on the link')} style={{cursor: "pointer"}}>Quaco Lighthouse</a>
              </h4>
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

