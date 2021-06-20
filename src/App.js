import React, { useState, useEffect } from 'react';
import './App.css';
import data from "./intents.json";
import Typography from '@material-ui/core/Typography';
import Intent from './components/Intent/Intent';
import Selected from './components/Selected/Selected';

function App() {

  const [intents] = useState(data);
  const [selectedMessages, setSelectedMessages] = useState({});
  
  useEffect(() => {
    let tempData = {}
    data.forEach(d => tempData[d.name] = [])
    setSelectedMessages(tempData)
  },[])

  const handleSelectMessage = (text, intentId) => {
    const tempIntents = [...intents];
    const tempSelected = { ...selectedMessages };
    tempIntents.forEach(intent => {
      if (intent.id === intentId) {
        tempSelected[intent.name] = tempSelected.hasOwnProperty(intent.name) ? tempSelected[intent.name] : [];
        if (!tempSelected[intent.name].includes(text)) {
          tempSelected[intent.name].push(text);
        }else{
          tempSelected[intent.name] = tempSelected[intent.name].filter(msg => msg !== text);
        }
      }
    })
    setSelectedMessages(tempSelected);
  }

  return (
    <div id="app-container">
      <Typography variant="h2" gutterBottom>
      Intent selection wizard
      </Typography>
    <div id="content">
      <div id="intent-content-section">
        {
          intents?.map(intent => {
            return (
              <React.Fragment key={intent.id} >
                <Intent
                  intent={intent}
                  handleSelectMessage={handleSelectMessage}
                />
              </React.Fragment>
            )
          })
        }
      </div>
      <div id="selected-intent-section">
        <Selected selectedMessages={selectedMessages} />
      </div>
    </div>
    </div>
  );
}

export default App;
