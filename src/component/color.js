import React from 'react';
import ColorPicker from './colorpicker';

const Apps = () => {
  const colors = ["red", "green", "blue", "yellow", "purple","orange","violet","black","pink","skyblue","lightgreen","darkviolet","lightyellow","gray"];

  return (
    <div className="App">
      <ColorPicker colors={colors} />
    </div>
  );
};

export default Apps;
// echo "# Reacttask3" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Tanmayee12345/Reacttask3.git
// git push -u origin main