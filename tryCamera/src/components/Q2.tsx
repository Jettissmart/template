import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent, IonProgressBar, IonLabel, IonButton, IonFooter, IonItem, IonList, IonGrid, IonRow, IonCol, IonCheckbox, IonSelect, IonSelectOption } from '@ionic/react';

import React from 'react';



const Q2: React.FC = () => {
    const symptoms=[
        { id: 1, symptom: "cough", level:"0"},
        { id: 2, symptom: "runny nose", level:"0" },
        { id: 3, symptom: "headache", level:"0"},
        { id: 4, symptom: "sore throat",level:"0" },
        { id: 5, symptom: "muscle aches", level:"0" },
        { id: 6, symptom: "vomiting", level:"0" },
        { id: 7, symptom: "diarrhea", level:"0" },
        { id: 8, symptom: "abdominal pain", level:"0" },
    ]
    return (
        <div style={{ margin: "1em" }}>
                        <IonProgressBar value={0.25}></IonProgressBar>
                        <IonHeader className="ion-text-center">

                            <h3>您有什麼症狀？</h3>
                            <h3>What are the symptoms you have? </h3>
                            <h5>程度0分是沒有症狀，4分為最嚴重</h5>
                        </IonHeader>
                        <IonGrid>
      <IonCol>
            <IonList>
                    {symptoms.map((symptom)=>
                    <IonItem key={symptom.id}>
                    <IonLabel>{symptom.symptom}</IonLabel>
                    <IonSelect value={symptom.level}>
                    <IonSelectOption value="0">0 沒有</IonSelectOption>
                    <IonSelectOption value="1">1 輕微</IonSelectOption>
                    <IonSelectOption value="2">2 中等</IonSelectOption>
                    <IonSelectOption value="3">3 嚴重</IonSelectOption>
                    <IonSelectOption value="4">4 非常嚴重</IonSelectOption>
                    </IonSelect>
                    </IonItem>
                    )}
               
               
            </IonList>
          
        
      </IonCol>
    
      </IonGrid>

        </div>
    )};


export default Q2;