import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
} from '@ionic/react';

import React from 'react'
import dayjs from 'dayjs'

function formatDate( isoString ) {
    return dayjs(isoString).format('DD MMM YYYY')
}

function BiorhythmCard( {targetName, targetDate} ) {
    return (
        <IonCard className="ion-text-center">
            <IonCardHeader>
              <IonCardTitle>{targetName}</IonCardTitle>
              <IonCardSubtitle>{formatDate(targetDate)}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <p>Physical: 83%</p>
              <p>Emotional: 50%</p>
              <p>Intellectual: 95%</p>
            </IonCardContent>
        </IonCard>
     );
};

export default BiorhythmCard;
