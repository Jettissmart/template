import { IonButton, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonProgressBar, IonRadio, IonRadioGroup, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';



const Q1: React.FC = () => {
    const [selected,setSelected] = useState<string>('null');
    return (
        <div style={{ margin: "1em" }}>
                        <IonProgressBar value={0}></IonProgressBar>
                        <IonHeader className="ion-text-center" >

                            <h3>請提交舌面照片</h3>
                            <h3>Please upload a photo of your tongue </h3>

                        </IonHeader>
                        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }} >
                           <IonButton>choose photo from gallery</IonButton>
                           <IonButton>choose photo from gallery</IonButton>

                        </div>
                    </div>
    )};


export default Q1;
