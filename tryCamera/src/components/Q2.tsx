import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent, IonProgressBar, IonLabel, IonButton, IonFooter, IonItem, IonList, IonGrid, IonRow, IonCol, IonCheckbox, IonSelect, IonSelectOption } from '@ionic/react';

import React from 'react';



const Q2: React.FC = () => {
    const symptoms=[
        { id: 1, symptom: "fever", level:"0"},
        { id: 2, symptom: "cough", level:"0"},
        { id: 3, symptom: "fatigue", level:"0"},
        { id: 4, symptom: "headache", level:"0"},
        { id: 5, symptom: "sore throat",level:"0" },
        { id: 6, symptom: "diarrhea", level:"0" },
        { id: 7, symptom: "vomiting", level:"0"},
        { id: 8, symptom: "muscle aches", level:"0"},
        { id: 9, symptom: "difficulty breathing", level:"0"},
        { id: 10, symptom: "loss of taste or smell", level:"0" },
        { id: 11, symptom: "runny nose", level:"0" },
        { id: 12, symptom: "new confusion", level:"0" },
        { id: 13, symptom: "chest pain", level:"0" },
        { id: 14, symptom: "feeling cold", level:"0" },
        { id: 15, symptom: "abdominal pain", level:"0" },
    ]
    return (
        <div style={{ margin: "1em" }}>
                        <IonProgressBar value={0.25}></IonProgressBar>
                        <IonHeader className="ion-text-center">

                            <h3>您有什麼症狀？</h3>
                            <h3>What are the symptoms you have? </h3>

                        </IonHeader>
                        <IonGrid>
      <IonCol>
            <IonList>
                    {/* {symptoms.map((id,symptom,level)=>
                    <IonItem key={id}>
                    <IonCheckbox></IonCheckbox><IonLabel>{symptom}</IonLabel>
                    </IonItem>
                    )} */}
                <IonItem key={0}>
                <IonLabel>headache</IonLabel>
                <IonSelect value="0">
                <IonSelectOption value="0">0 沒有</IonSelectOption>
                <IonSelectOption value="1">1 輕微</IonSelectOption>
                <IonSelectOption value="2">2 中等</IonSelectOption>
                <IonSelectOption value="3">3 嚴重</IonSelectOption>
                <IonSelectOption value="4">4 非常嚴重</IonSelectOption>
                </IonSelect>
                </IonItem>
               
            </IonList>
          
        
      </IonCol>
      <IonCol>
      <IonRow>ion-col</IonRow>
        <IonRow>ion-col</IonRow>
        <IonRow>ion-col</IonRow>
      </IonCol>
      </IonGrid>

        </div>
    )};


export default Q2;