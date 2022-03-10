import { IonButton, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonProgressBar, IonRadio, IonRadioGroup, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { isDoStatement } from 'typescript';
import { usePhotoGallery } from '../hooks/usePhotoGallery';
import Photo from '../pages/photo';



const Upload: React.FC = () => {
    const [selected,setSelected] = useState<string>('null');
    const [showPhoto,setShowPhoto] = useState(0);
    const { deletePhoto, photos, takePhoto } = usePhotoGallery();
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
                        {
                            showPhoto === 0 &&  <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }} >
                            <IonButton onClick={()=>{ setShowPhoto(1) }}> 上載舌面照片</IonButton>
                            <IonButton>上載舌底照片</IonButton>
                        
                            { photos.length > 0 && <img src={photos[0].webviewPath}/> }
                        
                            
                         </div>
                        }

                        {showPhoto === 1 && <Photo onSubmit={()=>{
                            setShowPhoto(0);
                        }}/>}
                       
                    </div>
    )};


export default Upload;
