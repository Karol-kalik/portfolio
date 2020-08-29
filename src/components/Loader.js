import React from 'react';
import '../style/loading.css';
import $ from 'jquery';

$(window).on('load', () => {
  setTimeout(() => {
    $('.wrapper').addClass('done');
    $('.lds-roller').addClass('done');
  }, 1500);

})

const Loader = () => {
  return (
    <>
     <div className="wrapper"></div>
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
    </>
  )
}
export default Loader;