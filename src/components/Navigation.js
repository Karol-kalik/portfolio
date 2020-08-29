import React from 'react';
import '../style/nav.css';
import '../phonStyle/nav.css';
import { NavLink } from 'react-router-dom';


class Navigation extends React.Component {
  state = {
    addClass: '',
    mailInfo: "mail info "
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        addClass: 'move'
      })

    }, 300);
  }
  handleEmailClick = () => {
    window.open('mailto:karol.wasik00@gmail.com');
  }
  handleEmailInfo = () => {
    this.setState({
      mailInfo: "mail info show"
    })
  }
  handleMouseOut = () => {
    this.setState({
      mailInfo: "mail info"
    })
  }
  render() {
    const { addClass } = this.state;
    return (
      <>
    <nav className={addClass} >

          <NavLink className="navigation" to="/"  exact  >Start</NavLink>
          <NavLink className="navigation" to="/portfolio" >Portfolio</NavLink>
          <NavLink className="navigation" to="/contact" >Kontakt</NavLink>
      <div className={this.state.mailInfo}>Napisz do mnie </div>
      <div><i onClick={this.handleEmailClick} onMouseMove={this.handleEmailInfo} onMouseOut={this.handleMouseOut} className="fas fa-envelope navMail"><span>Contact</span></i></div>
    </nav>
    </>
     );
  }
}


export default Navigation;