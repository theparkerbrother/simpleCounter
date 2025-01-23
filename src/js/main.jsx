import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Clock from './components/Clock';

let myVar = 0;
setInterval(() => {
  const first=Math.floor(myVar/1000);
  const second=Math.floor(myVar/100);
  const third=Math.floor(myVar/10);
  const fourth=Math.floor(myVar);

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Clock
        firstDigit={first}
        secondDigit={second}
        thirdDigit={third}
        fourthDigit={fourth}
      />
    </React.StrictMode>,
  );

  myVar++;
},100)


