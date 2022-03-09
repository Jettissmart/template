import React, { useState } from 'react';
import { IonBackButton, IonButtons, IonHeader, IonPage, IonToolbar, IonTitle, IonContent, IonProgressBar, IonLabel, IonButton, IonFooter, IonItem, IonList, IonGrid, IonRow, IonCol, IonCheckbox } from '@ionic/react';
import { list } from 'ionicons/icons';
import Q1 from '../components/Q1';
import Q2 from '../components/Q2';
import Q3 from '../components/Q3';
import Photo from './Photo';
import Q4 from '../components/Q4';
import Q5 from '../components/Q5';
import Upload from '../components/Upload';

function Question() {
    const [currentQ, setCurrentQ] = useState(1);
    const optionQ1 = [
        { id: 1, text: "positive test result" },
        { id: 2, text: "negative test result" },
    ]

    
    const selected = () => {

    }
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
                    <IonTitle> Questionaire </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>

                {currentQ === 1 && <Q1/>}

                {currentQ === 2 && <Q2/>}
                {currentQ === 3 && <Q3/>}
                {currentQ === 4 && <Q4/>}

                {currentQ === 5 && <Q5/>}
                {currentQ === 6 && <Upload/>}


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
