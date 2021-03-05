import { useState } from 'react';


function App() {

  const [color1, setColor1] = useState('#8E2DE2');
  const [color2, setColor2] = useState('#4A00E0');

  const handleChangeComplete1 = (color) => {
    setColor1(color)
  };
  const handleChangeComplete2 = (color) => {
    setColor2(color)
  };

  return (
    <div className="wrapper" style={{ backgroundImage: `linear-gradient(to right,${color1},${color2}` }}>
      < h1 className="title" > Linear Gradient</h1 >
      <h3 className="subtitle">Pick Your colors</h3>
      <div className="colors">
        <input type="color" value={color1} onChange={e => handleChangeComplete1(e.target.value)} />
        <input type="color" value={color2} onChange={e => handleChangeComplete2(e.target.value)} />
      </div>
      <h3 className="subtitle">CSS Code</h3>
      <p className="code">background-image : linear-gradient(to right,{color1},{color2});</p>
      <button className="btn" onClick={() => navigator.clipboard.writeText(`background-image : linear-gradient(to right,${color1},${color2})`)} >Click to Copy</button>
    </div >
  );
}

export default App;
