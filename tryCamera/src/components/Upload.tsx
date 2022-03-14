import { IonButton, IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonProgressBar, IonRadio, IonRadioGroup, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { isPropertySignature, setConstantValue } from 'typescript';
import { usePhotoGallery } from '../hooks/usePhotoGallery';
<<<<<<< HEAD
import Photo from '../pages/photo';
=======
import Photo from '../pages/Photo';
import { selectImage } from '@beenotung/tslib/file'
import { compressMobilePhoto, dataURItoBlob } from '@beenotung/tslib/image'
>>>>>>> main


// const [page, setPage] = useState(0);

const Upload: React.FC<any> = (props:any) => {
    const [page, setPage] = useState(0);
    const [image, setImage] = useState("");
    const { deletePhoto, photos, takePhoto } = usePhotoGallery();
    const choosePhoto = () => {
        setPage(1)
    }

    //     const openCamera =()=>{
    //        return(
    //            <IonPage>
    // <Photo/>

    //            </IonPage>
    //         )
    //     }
    return (
        <div style={{ margin: "1em" }}>
            {page === 0 &&
                <><IonProgressBar value={1}></IonProgressBar><IonHeader className="ion-text-center">

                    <h3>請上載舌面及舌底照片</h3>
                    <h5>(供中醫師作望診之用)</h5>
                    <h3>Please upload two photos of your tongue </h3>

                </IonHeader><div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                        <IonButton onClick={choosePhoto}> 上載舌面照片</IonButton>

                        {/* {if (idx >0){<img photos></img>

                        }
                        } */}
                      {
                      image !="" && <img src={JSON.stringify(photos)}></img>}

                    </div></>
            }

            {page == 1 && <Photo onSelected={(idx: number) => 
                {
                setPage(0);
                
               setImage("your tongue photo");
               const photo = photos
               
            }
                }/>}
        </div>
    )
};


export default Upload;
