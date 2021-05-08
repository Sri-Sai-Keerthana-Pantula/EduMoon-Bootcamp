import React from "react";

class Header extends React.Component {

  state = {term:''};

  onInputChange = (event) => {
    // console.log(event)
    this.setState({term:event.target.value});
    // console.log(this.state.term)
  }

  onFormSubmit = (event) => {
    event.preventDefault(); // to prevent the page reload
    this.props.onFormSubmit(this.state.term);
    this.setState({term:""});
  }


  render() {
    return (
      <div className="header">
        <div className="header__left">
          <i className="material-icons">menu</i>
          <img
            src="https://www.youtube.com/about/static/svgs/icons/brand-resources/YouTube-logo-full_color_light.svg?cache=72a5d9c"
            alt="Youtube-logo"
          />
        </div>
        <div className="header__search">
          <form onSubmit={this.onFormSubmit}>
            <input type="text" placeholder="Search" value={this.state.term} onChange={this.onInputChange} />
            <button>
              <i className="material-icons">search</i>
            </button>
          </form>
        </div>
        <div className="header__icons">
          <i className="material-icons">videocam</i>
          <i className="material-icons">apps</i>
          <i className="material-icons">notifications</i>
          <i className="material-icons">account_circle</i>
        </div>
      </div>
    );
  }
}

export default Header;