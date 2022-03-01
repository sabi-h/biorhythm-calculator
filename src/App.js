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

import { useLocalStorage } from './hooks';

import BiorhythmCard from './components/BiorhythmCard';

function App() {
  const [name, setName] = useLocalStorage('name', 'Sabi');
  const [birthDate, setBirthDate] = useLocalStorage(
    'birth date' , new Date('1990-01-01').toISOString()
  );
  const [targetDate, setTargetDate] = useState(new Date().toISOString());
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
              value = {birthDate}
              displayFormat='DD MMM YYYY'
              onIonChange={(event) => setBirthDate(event.detail.value)}
            />
          </IonItem>
          <IonItem>
            <IonLabel position='stacked'>Traget Date</IonLabel>
            <IonDatetime
              value = {targetDate}
              displayFormat='DD MMM YYYY'
              onIonChange={(event) => setTargetDate(event.detail.value)}
            />
          </IonItem>
          <BiorhythmCard
            targetName={name}
            birthDate={birthDate}
            targetDate={targetDate}
          />
      </IonContent>
    </IonApp>
  );
}

export default App;
