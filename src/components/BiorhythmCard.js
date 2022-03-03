import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
} from '@ionic/react';

import React from 'react';
import dayjs from 'dayjs';

import { calculateBiorhythms } from '../calculations';
import BiorhythmChart from './BiorhythmChart';
import './BiorhythmCard.css';

function formatDate( isoString ) {
    return dayjs(isoString).format('DD MMM YYYY')
}

function BiorhythmCard( {targetName, birthDate, targetDate} ) {
    const { physical, emotional, intellectual} =
        calculateBiorhythms(birthDate, targetDate)
    return (
        <IonCard className="biorhythm-card ion-text-center">
            <IonCardHeader>
              <IonCardTitle>Name: {targetName}</IonCardTitle>
              <IonCardSubtitle>Birth Date: {formatDate(birthDate)}</IonCardSubtitle>
              <IonCardSubtitle>Target Date: {formatDate(targetDate)}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
            <BiorhythmChart birthDate={birthDate} targetDate={targetDate}/>
              <p className='physical'>Physical: {(physical).toFixed(4)}</p>
              <p className='emotional'>Emotional: {(emotional).toFixed(4)}</p>
              <p className='intellectual'>Intellectual: {(intellectual).toFixed(4)}</p>
            </IonCardContent>
        </IonCard>
     );
};

export default BiorhythmCard;
