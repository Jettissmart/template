import { IonButton, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonProgressBar, IonRadio, IonRadioGroup, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';



const Q1: React.FC = () => {
    const [selected,setSelected] = useState<string>('null');
    return (
        <div style={{ margin: "1em" }}>
                        <IonProgressBar value={0}></IonProgressBar>
                        <IonHeader className="ion-text-center" >

                            <h3>你確診了2019新冠病毒嗎</h3>
                            <h3>Are you tested positive COVID-19? </h3>

                        </IonHeader>


                        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }} >
                           <IonList>
                               <IonRadioGroup value={selected} onIonChange={e=> setSelected(e.detail.value)}>
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
                          

                        </div>
                    </div>
    )};


export default Q1;
