import { IonButton, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonList, IonPage, IonProgressBar, IonRadio, IonRadioGroup, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';



const Q1: React.FC<any> = (props:any) => {
    const [selected, setSelected] = useState<string>('null');
    
    const optionQ1 = [
        { id: 1, text: "positive test result" },
        { id: 2, text: "negative test result" },
        { id: 3, text: "I have not received the test result yet" },
        { id: 4, text: "I did not take a test"},
    ]

    return (
        <div style={{ margin: "1em" }}>
            <IonProgressBar value={0}></IonProgressBar>
            <IonHeader className="ion-text-center" >

                <h3>你確診了2019新冠病毒嗎</h3>
                <h3>Are you tested positive COVID-19? </h3>

            </IonHeader>


            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }} >
                <IonGrid>
                    <IonList>
<<<<<<< HEAD
                        <IonRadioGroup value={selected} onIonChange={
                            (e:any) => {
                                props.onSubmit(selected);
                                setSelected(e.detail.value);
                            }
                        }>
=======
                        <IonRadioGroup value={selected} onIonChange={e => {
                            props.onSubmit(selected);
                        setSelected(e.detail.value);
                        }}>
>>>>>>> main
                        <IonItem>
                            <IonRadio slot="start" color="dark" value="positive"></IonRadio>
                            <IonLabel>
                                positive test result
                            </IonLabel>

                        </IonItem>
                        <IonItem>
                            <IonRadio slot="start" color="dark" value="negative"></IonRadio>
                            <IonLabel>
                                negative test result
                            </IonLabel>

                        </IonItem>
                        <IonItem>
                            <IonRadio slot="start" color="dark" value="waiting"></IonRadio>
                            <IonLabel>
                                I have not received the test result yet
                            </IonLabel>

                        </IonItem>
                        <IonItem>
                            <IonRadio slot="start" color="dark" value="take no test"></IonRadio>
                            <IonLabel>
                                I did not take a test
                            </IonLabel>

                        </IonItem>

                    </IonRadioGroup>

                </IonList>
            </IonGrid>

        </div>
                    </div >
    )};


export default Q1;
