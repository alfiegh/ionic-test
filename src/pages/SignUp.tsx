import React from 'react';
import {
  IonAvatar,
  IonContent,
  IonTitle,
  IonItem,
  IonLabel,
  IonInput,
  IonIcon,
  IonNavLink,
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonRouterLink,
} from '@ionic/react';
import avatar from '../assets/images/avatar.jpg';
import { mailOutline, lockClosedOutline, logoFacebook } from 'ionicons/icons';
import { Wrapper } from '../assets/Wrappers/signUp';

const SignUp: React.FC = () => {
  return (
    <Wrapper>
      <IonContent color='light'>
        <IonGrid>
          <IonRow className='avatar-row'>
            <IonCol className='avatar-col'>
              <IonAvatar className='avatar'>
                <img src={avatar} alt='' />
              </IonAvatar>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonTitle className='sign-in-title'>Sign in</IonTitle>
            </IonCol>
          </IonRow>
          <IonRow className='inputs'>
            <IonCol>
              <IonItem>
                <IonLabel className='input-label'>
                  <IonIcon
                    className='input-icon'
                    icon={mailOutline}
                    slot='start'
                  />
                  E-mail
                </IonLabel>
                <IonInput type='text'></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel className='input-label'>
                  <IonIcon
                    className='input-icon'
                    icon={lockClosedOutline}
                    slot='start'
                  />
                  Password
                </IonLabel>
                <IonInput type='password'></IonInput>
              </IonItem>
              <IonNavLink className='forgot-password'>
                forgot password?
              </IonNavLink>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonTitle className='sign-in-with'>Sign in with</IonTitle>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className='icon-wrapper'>
              <IonIcon className='social-icon' icon={logoFacebook} />
            </IonCol>
          </IonRow>
          <IonRow className='button-row'>
            <IonCol className='center'>
              <IonButton className='sign-up-button' fill='clear'>
                Sign Up
              </IonButton>
            </IonCol>
            <IonCol className='center'>
              <IonButton className='sign-in-button' fill='clear'>
                <IonRouterLink color='white' href='/movies-list'>
                  Sign In
                </IonRouterLink>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonRouterLink className='sign-up-footer'>
          Terms and conditions
        </IonRouterLink>
      </IonContent>
    </Wrapper>
  );
};

export default SignUp;
