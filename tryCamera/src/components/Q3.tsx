import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent, IonProgressBar, IonLabel, IonButton, IonFooter, IonItem, IonList, IonGrid, IonRow, IonCol, IonCheckbox, IonSelect, IonSelectOption } from '@ionic/react';

import React from 'react';



const Q3: React.FC = () => {
    const symptoms=[
        { id: 9, symptom: "difficulty breathing", level:0 },
        { id: 10, symptom: "chest pain", level:0 },
        { id: 11, symptom: "loss of taste or smell", level:0 },
        { id: 12, symptom: "new confusion", level:0 },
    ]
    return (
        <div style={{ margin: "1em" }}>
                        <IonProgressBar value={0.25}></IonProgressBar>
                        <IonHeader className="ion-text-center">

                            <h3>您有什麼症狀？(其他症狀）</h3>
                            <h3>What are the symptoms you have? </h3>

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


export default Q3;