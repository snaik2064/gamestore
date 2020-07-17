import React from 'react';
import {StatusBar} from 'react-native';

import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

import Text from '../Text';

const GameScreen = ({route, navigation}) => {
  const {game} = route.params;

  const renderStars = () => {
    let stars = [];

    for (let s = 1; s <= 5; s++) {
      stars.push(
        <Icon
          key={s}
          name="star"
          size={16}
          style={{marginRight: 5}}
          color={Math.floor(game.rating) >= s ? '#819ee5' : '#434958'}
        />,
      );
    }

    return <Stars>{stars}</Stars>;
  };

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
      <GameStatusContainer>
        {renderStars()}

        <Text heavy color="#9a9a9a">
          {game.rating}
        </Text>
        <Text bold color="#9a9a9a">
          {game.category[0]}
        </Text>
        <Text bold color="#9a9a9a">
          {game.age}
        </Text>
        <Text bold color="#9a9a9a">
          Game of the day
        </Text>
      </GameStatusContainer>
      <ScreenShotsContainer>
        <ScreenShots horizontal showsHorizontalScrollIndicator={false}>
          {game.screenshots.map((screenshot, index) => {
            return (
              <ScreenShotContainer key={index}>
                <ScreenShot source={screenshot} />
              </ScreenShotContainer>
            );
          })}
        </ScreenShots>
      </ScreenShotsContainer>
      <Description medium color="#9a9a9a">
        {game.description}
      </Description>
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

const GameStatusContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 16px;
`;

const Stars = styled.View`
  flex-direction: row;
`;

const ScreenShotsContainer = styled.View`
  margin: 8px 0;
`;

const ScreenShotContainer = styled.View`
  padding: 16px;
  shadow-color: #000000;
  shadow-offset: 1px 1px;
  shadow-opacity: 0.5;
  shadow-radius: 5px;
`;

const ScreenShots = styled.ScrollView``;

const ScreenShot = styled.Image`
  height: 200px;
  width: 300px;
  border-radius: 12px;
`;

const Description = styled(Text)`
  position: relative;
  margin: 0 16px;
  line-height: 22px;
`;
