import React from 'react'

import './Landing.css'

export default class Landing extends React.Component {
  componentDidMount(){
    var text = document.getElementById('text');
    var newDom = '';
    var animationDelay = 6;
    for(let i = 0; i < text.innerText.length; i++)
    {
        newDom += '<span class="char">' + (text.innerText[i] === ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
    }
    text.innerHTML = newDom;
    var length = text.children.length;
    for(let i = 0; i < length; i++)
    {
        text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
    }
  }
  render(){
    return(
      <div>
        <div className="center">
          <h4 id="text">Hi, my name is Riccardo Donati
          and im a full stack developer.</h4>
        </div>
      </div>
    )
  }
}
