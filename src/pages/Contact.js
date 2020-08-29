import React from 'react';
import '../style/contact.css';
import '../phonStyle/contact.css'
import Avatar from '../image/Karol.jpg'

class Contact extends React.Component {
  state = {
    btnMove: "contactBtn",
    btnContext: "Kontakt",
    contactBoxMove: "contactBox",
    infoBoxMove: "",
    isShow: false,
  };
  handleEmailClick = () => {
    window.open("mailto:karol.wasik00@gmail.com");
  };

  handleShowInfo = () => {
    if(!this.state.isShow){
      this.setState({
        btnMove: "contactBtn move",
        btnContext: <i className="fas fa-play"></i>,
        contactBoxMove: "contactBox show move",
        infoBoxMove: " move",
        isShow: true,
      });
    } else {
      this.setState({
        btnMove: "contactBtn",
        btnContext: "Kontakt",
        contactBoxMove: "contactBox show",
        infoBoxMove: "",
        isShow: false,
      });
    }
  };
  componentDidMount() {
      setTimeout(() => {
        this.setState({
          contactBoxMove: "contactBox show",
        });
      }, 300);
  }
  render() {
    return (
      <>
        <div className="contactPage">
          <div className={this.state.contactBoxMove}>
            <div className="portfolioImg">
              <img src={Avatar} alt="avatar" />
            </div>
            <div className="contactInfo">
              <h1>Karol Wąsik</h1>
              <p>Cześć nazywam się Karol i jestem Frontend Developerem</p>
            </div>
            <div className={this.state.btnMove} onClick={this.handleShowInfo}>
              {this.state.btnContext}
            </div>
            <div className={"infoBox mail " + this.state.infoBoxMove} onClick={this.handleEmailClick}>
              <span><i className="fas fa-envelope"> Gmail</i></span>
            </div>
            <div className={"infoBox github" + this.state.infoBoxMove}>
            <a href="https://github.com/Karol-kalik" target="_blank" rel="noopener noreferrer">
              <span><i className="fab fa-github "> GitHub</i></span>

            </a>
            </div>
            <div className={"infoBox linkedin" + this.state.infoBoxMove}>
            <a href="https://www.linkedin.com/in/karol-wąsik-33059719a/" target="_blank" rel="noopener noreferrer">
              <span><i className="fab fa-linkedin "> Linkedin</i></span>

            </a>
            </div>
          </div>

          {/* <div className="contactLeft">
        <span className="tooltip">
          <img className={this.state.imgMove} alt="avatar" src={Avatar}/>
          <span className="tooltiptext contactAvatar"> Karol Wąsik</span>
        </span>
        </div>
        <div className="contactRight">
        <h1 className={this.state.contactH1}>Napisz do mnie <span role="img" aria-label="Keyboard">⌨️</span> </h1>
        <span className="tooltip">
          <i onClick={this.handleEmailClick}className={"fas fa-envelope " +  this.state.contactIco}  ></i>
          <span className="tooltiptext contactTip"> karol.wasik00@gmail.com</span>
        </span>
        <span className="tooltip">
        <a href="https://github.com/Karol-kalik" target="_blank" rel="noopener noreferrer">
          <i className={"fab fa-github " + this.state.contactIco}></i>
        </a>
        <span style={{marginLeft: "-1vw"}} className="tooltiptext contactTip"> github.com/Karol-kalik</span>
        </span>
        <span className="tooltip">
        <a href="https://www.linkedin.com/in/karol-wąsik-33059719a/" target="_blank" rel="noopener noreferrer">
          <i className={"fab fa-linkedin "+ this.state.contactIco}></i>
        </a>
        <span style={{marginLeft: "-1.5vw"}} className="tooltiptext contactTip"> linkedin / karol-wąsik</span>
        </span>
        </div> */}
        </div>
      </>
    );
  }
}

    export default Contact;