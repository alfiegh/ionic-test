import React from 'react';
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonPage,
  IonTitle,
  IonRouterLink,
  IonImg,
  IonHeader,
  IonToolbar,
  IonList,
  IonAvatar,
  IonLabel,
  IonItem,
} from '@ionic/react';

const MovieCard: React.FC<{ list: [] }> = ({ list }) => {
  console.log(list);

  if (list === undefined) {
    return (
      <IonPage>
        <IonContent>
          <IonTitle>Loading...</IonTitle>
        </IonContent>
      </IonPage>
    );
  }

  return (
    <IonContent fullscreen>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>List of Star Wars movies</IonTitle>
        </IonToolbar>
      </IonHeader>
      {list &&
        list.map((item) => {
          const { episode_id, title, director, opening_crawl } = item;
          return (
            <IonRouterLink key={episode_id} href={`/detail-view/${episode_id}`}>
              {/* <IonList>
                <IonItem>
                  <IonAvatar slot='start'>
                    <IonImg
                      src={require(`../assets/images/episode-${episode_id}.jpg`)}
                      alt={title}
                    />
                  </IonAvatar>
                  <IonLabel>
                    <h2>{title}</h2>
                    <h3>Directed by: {director}</h3>
                  </IonLabel>
                </IonItem>
              </IonList> */}
              <IonCard style={{ padding: '1rem' }}>
                <IonCardHeader>
                  <IonImg
                    src={require(`../assets/images/episode-${episode_id}.jpg`)}
                    alt={title}
                    style={{ padding: '2rem' }}
                  />

                  <IonCardTitle>{title}</IonCardTitle>
                  <IonCardSubtitle>Directed by: {director}</IonCardSubtitle>
                </IonCardHeader>
              </IonCard>
            </IonRouterLink>
          );
        })}
    </IonContent>
  );
};

export default MovieCard;
