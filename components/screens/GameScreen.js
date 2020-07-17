import React from 'react';
import {StatusBar} from 'react-native';

import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

import Text from '../Text';

const GameScreen = ({route, navigation}) => {
  const {game} = route.params;
  return (
    <GameContainer>
      <StatusBar barStyle="light-content" />
      <GameArtContainer>
        <GameArt source={game.cover} />
        <BackButton onPress={() => navigation.goBack()}>
          <Icon name="times" size={30} color="#343434" />
        </BackButton>
      </GameArtContainer>
      <GameInfoContainer>
        <GameTumbContainer>
          <GameThumb source={game.cover} />
        </GameTumbContainer>
        <GameInfo>
          <Text heavy medium>
            {game.title}
          </Text>
          <Text color="#9a9a9a">{game.teaser}</Text>
        </GameInfo>
        <Download>
          <Icon name="download" size={30} color="#ffffff" />
        </Download>
      </GameInfoContainer>
    </GameContainer>
  );
};

export default GameScreen;

const GameContainer = styled.View`
  background-color: #343434;
  flex: 1;
`;

const GameArtContainer = styled.View`
  position: relative;
`;

const GameArt = styled.Image`
  height: 350px;
  width: 100%;
  border-bottom-right-radius: 32px;
  border-bottom-left-radius: 32px;
`;

const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 30px;
  left: 10px;
`;

const GameInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px 0;
  margin: 8px 16px;
`;

const GameTumbContainer = styled.View`
  shadow-color: #000000;
  shadow-offset: 1px 1px;
  shadow-opacity: 0.5;
  shadow-radius: 2px;
`;

const GameThumb = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 16px;
`;

const GameInfo = styled.View`
  width: 0;
  flex-grow: 1;
  margin: 0 8px 0 16px;
`;

const Download = styled.View`
  background-color: #819ee5;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;
