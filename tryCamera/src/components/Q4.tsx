import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent, IonProgressBar, IonLabel, IonButton, IonFooter, IonItem, IonList, IonGrid, IonRow, IonCol, IonCheckbox, IonItemGroup, IonSelectOption, IonSelect } from '@ionic/react';

import React from 'react';



const Q4: React.FC = () => {
    const gISymptoms = [

        { id: 1, symptom: "cough", level: 0 },
        { id: 2, symptom: "runny nose", level: 0 },
        { id: 3, symptom: "headache", level: 0 },
        { id: 4, symptom: "sore throat", level: 0 },
        { id: 5, symptom: "muscle aches", level: 0 },

        { id: 6, symptom: "vomiting", level: 0 },
        { id: 7, symptom: "diarrhea", level: 0 },
        { id: 8, symptom: "abdominal pain", level: 0 },

        { id: 9, symptom: "difficulty breathing", level: 0 },
        { id: 10, symptom: "chest pain", level: 0 },
        { id: 11, symptom: "loss of taste or smell", level: 0 },
        { id: 12, symptom: "new confusion", level: 0 },


        { id: 14, symptom: "fatigue", level: 0 },
        { id: 15, symptom: "feeling cold", level: 0 },

    ]
    return (
        <div style={{ margin: "1em" }}>
            <IonProgressBar value={0.5}></IonProgressBar>
            <IonHeader className="ion-text-center">

                <h3>詳細身體狀況？</h3>
                <h3>More information about your health </h3>

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
                            <IonLabel>體溫</IonLabel>
                            <IonSelect value="0">
                                <IonSelectOption value="0">35.8-37.2&#8451; 沒有發燒</IonSelectOption>
                                <IonSelectOption value="1">37.3-38&#8451; 低燒</IonSelectOption>
                                <IonSelectOption value="2">38.1-39&#8451; 中燒</IonSelectOption>
                                <IonSelectOption value="3">39.1-41&#8451;或以上 高燒</IonSelectOption>
                                <IonSelectOption value="4">41.1&#8451;或以上 超高燒</IonSelectOption>
                            </IonSelect>
                        </IonItem>


                        <IonItem key={1}>
                            <IonLabel>痰多少</IonLabel>
                            <IonSelect value="0">
                                <IonSelectOption value="0">沒有痰</IonSelectOption>
                                <IonSelectOption value="1">稀痰少</IonSelectOption>
                                <IonSelectOption value="2">稀痰多</IonSelectOption>
                                <IonSelectOption value="3">膿痰少</IonSelectOption>
                                <IonSelectOption value="4">膿痰多</IonSelectOption>
                            </IonSelect>
                        </IonItem>

                        <IonItem key={2}>
                            <IonLabel>可否咳出痰</IonLabel>
                            <IonSelect value="0">
                                <IonSelectOption value="0">沒有痰</IonSelectOption>
                                <IonSelectOption value="1">可咳出來</IonSelectOption>
                                <IonSelectOption value="2">咳不出來</IonSelectOption>
                            </IonSelect>
                        </IonItem>


                        <IonItem key={3}>
                            <IonLabel>痰顏色</IonLabel>
                            <IonSelect value="0">
                                <IonSelectOption value="0">沒有痰</IonSelectOption>
                                <IonSelectOption value="1">白色</IonSelectOption>
                                <IonSelectOption value="2">黃色</IonSelectOption>
                                <IonSelectOption value="3">綠色</IonSelectOption>
                                <IonSelectOption value="4">痰中帶血</IonSelectOption>
                            </IonSelect>
                        </IonItem>

                        <IonItem key={4}>
                            <IonLabel>發冷</IonLabel>
                            <IonSelect value="0">
                                <IonSelectOption value="0">沒有</IonSelectOption>
                                <IonSelectOption value="1">有</IonSelectOption>
                            </IonSelect>
                        </IonItem>

                        <IonItem key={5}>
                            <IonLabel>疲累</IonLabel>
                            <IonSelect value="0">
                                <IonSelectOption value="0">沒有</IonSelectOption>
                                <IonSelectOption value="1">有</IonSelectOption>
                            </IonSelect>
                        </IonItem>

                    </IonList>
                </IonCol>
            </IonGrid>
        </div>
    )
};


export default Q4;