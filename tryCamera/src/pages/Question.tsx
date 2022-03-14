import React, { useState } from 'react';
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent, IonProgressBar, IonLabel, IonButton, IonFooter, IonItem, IonList, IonGrid, IonRow, IonCol, IonCheckbox } from '@ionic/react';
import { list } from 'ionicons/icons';
import Q1 from '../components/Q1';
import Q2 from '../components/Q2';
import Q3 from '../components/Q3';

import Q4 from '../components/Q4';
import Q5 from '../components/Q5';
import Upload from '../components/Upload';

function Question() {
    // const [formData, setFormData] = useState<Array>([])
    const [currentQ, setCurrentQ] = useState(1);
    
    const lastPage = () => {
        if (currentQ - 1 > 0) {
            setCurrentQ(currentQ - 1);
        }
    }
    const nextPage = () => {
        if (currentQ + 1 < 7) {
            setCurrentQ(currentQ + 1);
        }

    }
    
    return (
        <IonPage>
            <IonHeader collapse="condense">
                <IonToolbar>
                    <IonButtons slot="start" >
                        <IonBackButton defaultHref="/tabs/tab1" />
                    </IonButtons>
                    <IonTitle> Questionnaire </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>

                {currentQ === 1 && <Q1 onSubmit={(answer:string)=>{
                    setFormData(
                        {
                            ...formData,
                            covid19_test:answer /*positive,-ve,waiting,take no test */
                        }
                    )
                }}/>}

                {currentQ === 2 && <Q2 onSubmit={(symptom:any)=>{

                    // const d = {
                    //     symptom:'s1',
                    //     level:0
                    // }
                    //const d = {s1:0}
                    //symptom = {cough:0}
                    /*{
                        covid19_test:"positive",
                        cough:0
                    }*/
                    setFormData({
                        ...formData,
                        ...symptom //{cough:0}
                    });
                    //{"runny nose":1}
                    /*{
                        covid19_test:"positive",
                        cough:0,
                        "runny nose":1
                    }*/

                    
                }}/>}
                {currentQ === 3 && <Q3/>}
                {currentQ === 4 && <Q4/>}

                {currentQ === 5 && <Q5/>}
                {currentQ === 6 && <Upload onSubmit={()=>{}}/>}

                 {/*TODO: next page*/}
            </IonContent>
            <IonFooter>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>

                    <IonButton color="secondary" onClick={lastPage}>Previous</IonButton>
                    <IonButton color="secondary" onClick={nextPage}>Next</IonButton>

                </div>

            </IonFooter>


        </IonPage>
    );
};

export default Question;
