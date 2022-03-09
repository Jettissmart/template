import { IonButton, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonProgressBar, IonRadio, IonRadioGroup, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';




const Upload: React.FC = () => {
    const [selected,setSelected] = useState<string>('null');
//     const openCamera =()=>{
//        return(
//            <IonPage>
// <Photo/>
       
//            </IonPage>
//         )
//     }
    return (
        <div style={{ margin: "1em" }}>
                        <IonProgressBar value={1}></IonProgressBar>
                        <IonHeader className="ion-text-center" >

                            <h3>請上載舌面及舌底照片</h3>
                            <h5>(供中醫師作望診之用)</h5>
                            <h3>Please upload two photos of your tongue </h3>

                        </IonHeader>
                        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }} >
                           <IonButton href="/photo"> 上載舌面照片</IonButton>
                           <IonButton>上載舌底照片</IonButton>

                        </div>
                    </div>
    )};


export default Upload;
