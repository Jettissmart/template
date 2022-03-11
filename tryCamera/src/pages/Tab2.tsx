import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg, IonActionSheet } from '@ionic/react';
import { camera, trash, close, phoneLandscape } from 'ionicons/icons';
import { usePhotoGallery, UserPhoto } from '../hooks/usePhotoGallery';

const Tab2: React.FC = () => {
  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contact us</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">聯絡我們</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
        健康熊貓
           線上中醫診所藥房
           專注於內科調理
          <IonRow>
          遙距診症
          <IonCol >
                透過WhatsApp診症，中醫師利用舌象診症，線上開出處方，方便慢病或長期調理患者診後調理及復康，省卻診所等候時間。
                新增服務：
                即日送藥，針對感冒急症等，快速有效紓緩2019新冠病毒確診症狀
              </IonCol>
          
          </IonRow>
          <IonRow>
          個人茶療
          <IonCol >
                透過問卷了解個人身體狀況及生活習慣導致的體質，適合長期調理輕症人士、亞健康人士，中藥茶包味道可口，中醫為每個人處方配製。
                客製化日常養生茶療，調節你偏頗的體質，達至健康。
                診後療效跟進，重視茶療效果。
              </IonCol>

          </IonRow>
          <IonRow>
          中藥沖劑零售
          <IonCol >
          適合需使用中藥長期調理的人，掌握適合自己服用的中藥沖劑，對於症狀較複雜的人，中藥沖劑療效更佳。
                
              </IonCol>
          
          </IonRow>
          
        </IonGrid>

        {/* <IonFab vertical="bottom" horizontal="center" slot="fixed">
          <IonFabButton onClick={() => takePhoto()}>
            <IonIcon icon={phoneLandscape}></IonIcon>
          </IonFabButton>
        </IonFab>

        <IonActionSheet
          isOpen={!!photoToDelete}
          buttons={[{
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
        /> */}
        <div>WhatsApp聯絡中醫：</div>

         <div className="ion-text-center">健康熊貓有限公司 版權所有</div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
