import {
  IonContent,
  IonImg,
  IonItem,
  IonPage,
  IonTitle,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonRouterLink,
  IonButton,
} from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TabBar from '../components/TabBar';

const DetailView: React.FC = () => {
  const [details, setDetails] = useState<any>();
  const params: { id: string } = useParams();

  const fixOrder = (number: string) => {
    switch (number) {
      case '1':
        return '4';
      case '2':
        return '5';
      case '3':
        return '6';
      case '4':
        return '1';
      case '5':
        return '2';
      case '6':
        return '3';
    }
  };
  let url = `https://swapi.dev/api/films/${fixOrder(params.id)}/`;

  const getDetails = async () => {
    const response = await fetch(url);
    const results = await response.json();
    setDetails(results);
  };
  useEffect(() => {
    getDetails();
  }, []);

  console.log(details);

  if (details === undefined) {
    return (
      <IonPage>
        <TabBar />
        <IonContent>
          <IonTitle>Loading...</IonTitle>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonPage>
      <TabBar />
      {details && (
        <IonContent>
          <IonCard>
            <IonCardHeader>
              <IonImg
                src={require(`../assets/images/episode-${details.episode_id}.jpg`)}
                alt={details.title}
              />

              <IonCardTitle>{details.title}</IonCardTitle>
              <IonCardSubtitle>Director: {details.director}</IonCardSubtitle>
              <IonCardSubtitle>Producer: {details.producer}</IonCardSubtitle>
              <IonCardSubtitle>
                Released: {details.release_date}
              </IonCardSubtitle>
              <IonCardSubtitle>
                Characters in movie: {details.characters.length}
              </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>{details.opening_crawl}</IonCardContent>
          </IonCard>
          <IonRouterLink
            color='white'
            href='/movies-list'
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <IonButton color='light' shape='round'>
              Go back
            </IonButton>
          </IonRouterLink>
        </IonContent>
      )}
    </IonPage>
  );
};

export default DetailView;
