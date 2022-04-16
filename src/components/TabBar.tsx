import React from 'react';
import {
  IonIcon,
  IonTitle,
  IonMenuButton,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonButtons,
} from '@ionic/react';
import {
  optionsOutline,
  gridOutline,
  cameraOutline,
  videocamOutline,
  logInOutline,
  chatboxEllipsesOutline,
} from 'ionicons/icons';
import { menuController } from '@ionic/core';
import avatar from '../assets/images/avatar.jpg';
import { Link } from 'react-router-dom';

const TabBar: React.FC = () => {
  const openMenu = async () => {
    await menuController.open();
  };
  return (
    <>
      <IonMenu side='start' contentId='main-content'>
        <IonHeader className='ion-no-border'>
          <IonToolbar>
            <img
              style={{
                padding: '7rem',
                borderRadius: '50%',
              }}
              src={avatar}
              alt='avatar'
            />
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList style={{ paddingLeft: '3rem' }} lines='none'>
            <Link to='/movies-list' style={{ textDecoration: 'none' }}>
              <IonItem>
                <IonIcon slot='start' icon={videocamOutline} />
                <IonLabel>Movies</IonLabel>
              </IonItem>
            </Link>
            <Link to='/sign-up' style={{ textDecoration: 'none' }}>
              <IonItem>
                <IonIcon slot='start' icon={logInOutline} />
                <IonLabel>Sign-In</IonLabel>
              </IonItem>
            </Link>
            <IonItem>
              <IonIcon slot='start' icon={gridOutline} />
              <IonLabel>Dashboard</IonLabel>
            </IonItem>
            <IonItem>
              <IonIcon slot='start' icon={cameraOutline} />
              <IonLabel>Photos</IonLabel>
            </IonItem>
            <IonItem>
              <IonIcon slot='start' icon={chatboxEllipsesOutline} />
              <IonLabel>Chat</IonLabel>
            </IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      <div id='main-content'>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton autoHide={false} onClick={openMenu}></IonMenuButton>
          </IonButtons>
          <IonButtons slot='primary'>
            <IonButton>
              <IonIcon slot='icon-only' icon={optionsOutline} />
            </IonButton>
          </IonButtons>

          <IonTitle style={{ textAlign: 'center' }}>Logo</IonTitle>
        </IonToolbar>
      </div>
    </>
  );
};

export default TabBar;
