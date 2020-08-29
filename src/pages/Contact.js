import React from 'react';
import '../style/contact.css';
import Avatar from '../image/Karol.jpg'

class Contact extends React.Component {
  state={
    imgMove:'avatar ',
    contactH1:'contactH1',
    contactIco:'tooltip contactIco',
  }
  componentDidMount(){
  setTimeout(() => {
    this.setState({
      imgMove: 'avatar move',
      contactH1:'contactH1 move',
      contactIco: 'contactIco move',
    })
  }, 500);
}

handleEmailClick = () => {
  window.open('mailto:karol.wasik00@gmail.com');
}
  render(){
  return (
    <>
      <div className="contactPage">
        <div className="contactLeft">
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
        </div>
      </div>
    </>)
    }
    }

    export default Contact;