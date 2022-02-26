import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonInput,
  IonItem,
  IonLabel,
  IonDatetime,
} from '@ionic/react';
import React, {useState} from 'react';

import BiorhythmCard from './components/BiorhythmCard';

function App() {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
          <IonItem>
            <IonLabel position='stacked'>Name</IonLabel>
            <IonInput value={name} onIonChange={(event) => setName(event.detail.value)}/>
          </IonItem>
          <IonItem>
            <IonLabel position='stacked'>Date of Birth</IonLabel>
            <IonDatetime
              displayFormat='DD MMM YYYY'
              onIonChange={(event) => setBirthDate(event.detail.value)}
            />
          </IonItem>
          <BiorhythmCard targetName={name} targetDate={birthDate}/>
      </IonContent>
    </IonApp>
  );
}

export default App;
