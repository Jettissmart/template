import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg, IonActionSheet, IonButton, IonFooter } from '@ionic/react';
import { camera, trash, close, documentAttach, clipboard, arrowUp } from 'ionicons/icons';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';


const Photo : React.FC<any> = (props:any) => {
  const { deletePhoto, photos, takePhoto } = usePhotoGallery();
  const [photoToDelete, setPhotoToDelete] = useState<UserPhoto>();
  const [photoToSubmit, setPhotoToSubmit] = useState<number>();
  const [page, setPage] = useState(0);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Photo Gallery</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Photo Gallery</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow>
            {photos.map((photo, index) => (
              <IonCol size="6" key={index}>
                <IonImg onClick={() => setPhotoToDelete(photo)} src={photo.webviewPath} />
                {console.log(photo.webviewPath)}
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
         
        <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={async() => takePhoto()}>
            <IonIcon icon={camera}></IonIcon>
          </IonFabButton>
        </IonFab>
         
        <IonActionSheet
          isOpen={!!photoToDelete}
          buttons={[
            {
            text: 'submit as tongue top',
            icon: arrowUp,
            role: 'selected',
            handler:()=>{ 
                //onsubmit=()=>{props.photos}
                //setPage(0);
                // setPhotoToSubmit();
              props.onSelected(0/*idx*/)
            }
          },
          {
            text: 'Delete',
            role: 'destructive',
            icon: trash,
            handler: () => {
              if (photoToDelete) {
                deletePhoto(photoToDelete);
                setPhotoToDelete(undefined);
              }
            }
          }, {
            text: 'Cancel',
            icon: close,
            role: 'cancel'
          }]}
          onDidDismiss={() => setPhotoToDelete(undefined)}
        />


      </IonContent>
    
    </IonPage>
  );
};

export default Photo;


