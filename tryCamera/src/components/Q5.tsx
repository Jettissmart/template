import { IonButton, IonContent, IonHeader, IonImg, IonPage, IonProgressBar, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';



const Q4: React.FC = () => {
    return (
        <div style={{ margin: "1em" }}>
                        <IonProgressBar value={0.75}></IonProgressBar>
                        <IonHeader className="ion-text-center" >

                            <h3>請提供您的舌圖 <br />
                                讓我們更準確地掌握閣下的體質。</h3>
                            <h3>Please provide two photos of your tongue. </h3>

                        </IonHeader>

                        <div style={{ display: "block", textAlign: "center", flexWrap: "wrap", margin: "0.5em" }} >

                            <div>1. One of the top of your tongue: open your mouth and stick out the tongue 
                             <div style={{display:"flex",justifyContent: "center" }}><img src="/assets/image/tongue-top.jpeg" style={{width:"5em"}}></img></div>
                             </div>
                             <br/> 
                           
                            <div>2. One of the bottom of your tongue: place the tip of your tongue against the roof of your mouth and open your jaw 
                            <div style={{display:"flex",justifyContent: "center" }}><img src="/assets/image/tongue-bottom.jpeg" style={{width:"5em"}}></img></div>
                            </div>

                            <div style={{ display: "inline-block", textAlign: "left"}}>
                                <ol>Guideline:
                                    <li>On extension of you tongue it should be done naturally without excessive force.</li>
                                    <li>You should face the natural sunlight when you take the picture.</li>
                                    <li>DO NOT take picture after eating or drinking colored food as it may put on artificial color on your tongue</li>
                                </ol>

                            </div>
                        </div>
                    </div>
    )};


export default Q4;
