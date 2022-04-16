import {
  IonContent,
  IonIcon,
  IonPage,
  IonTabBar,
  IonTabButton,
  IonTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonToolbar,
} from '@ionic/react';

import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import TabBar from '../components/TabBar';

const MissionList: React.FC = () => {
  const [list, setList] = useState<any>();

  const url = 'https://swapi.dev/api/films';

  const getMovies = async () => {
    const response = await fetch(url);
    const { results } = await response.json();
    setList(results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  //   console.log(list);

  return (
    <IonPage>
      <TabBar />
      <IonContent>
        <MovieCard list={list} />
      </IonContent>
    </IonPage>
  );
};

export default MissionList;
