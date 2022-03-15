import React from 'react';
import { IonAvatar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonChip, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';
import { pin, settings } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader >
        <IonToolbar >
        <IonTitle>我的報告</IonTitle>
          {/* <IonTitle>My Profile</IonTitle> */}
          <IonIcon icon={settings} slot="end" />
        </IonToolbar>
      </IonHeader>

      <IonHeader>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>
              <IonItem lines='none'>
                <IonAvatar slot="start">
                  <img src="/assets/image/avatar-icon.jpeg" />
                </IonAvatar>
                <IonLabel>陳大明</IonLabel>
              </IonItem>
            </IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonGrid>
              <IonRow>
                <IonCol size='4'>
                  預防茶療：
                </IonCol>
                <IonCol>
                  黨參、杞子
                </IonCol>
              </IonRow>

              <IonRow>
                <IonCol size='4'>
                  治療用藥：
                </IonCol>
                <IonCol>
                  不適合使用蓮花清瘟膠囊
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>

        <p style={{ display: "flex", justifyContent: "center" }}>
          <IonChip color='secondary'>
            <IonLabel>陽虛體質</IonLabel>
          </IonChip>
          <IonChip color='tertiary'>
            <IonLabel>忌吃生冷</IonLabel>
          </IonChip>
          <IonChip color='tertiary'>
            <IonLabel>忌吃煎炸</IonLabel>
          </IonChip>
          <IonChip color='tertiary'>
            <IonLabel>忌吃辛辣</IonLabel>
          </IonChip>
        </p>

        {/* </IonContent> */}

      </IonHeader>

      <IonContent>
      <IonCard>
          <IonItem>
            <IonIcon icon={pin} slot="start" />
            <IonLabel>2022-03-16報告記錄</IonLabel>
            <IonButton fill="outline" slot="end">View</IonButton>
          </IonItem>

          <IonCardContent>
            快測檢測陽性
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonItem>
            <IonIcon icon={pin} slot="start" />
            <IonLabel>2022-03-14報告記錄</IonLabel>
            <IonButton fill="outline" slot="end">View</IonButton>
          </IonItem>

          <IonCardContent>
            快測檢測陰性
          </IonCardContent>
        </IonCard>

       </IonContent>
    </IonPage>
  );
};

export default Tab3;
