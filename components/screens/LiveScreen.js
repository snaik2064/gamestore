import React from 'react';
import {Animated, StatusBar} from 'react-native';

import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

import Text from '../Text';
import games from '../../constants/gameData';

const LiveScreen = () => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Container>
      <StatusBar barStyle="light-content" />

      <Header>
        <Text large bold>
          Streaming
        </Text>
        <SearchContainer>
          <Search placeholder="Search....." placeholderTextColor="#838383" />
          <SearchIcon>
            <Icon name="search" size={24} color="#838383" />
          </SearchIcon>
        </SearchContainer>
      </Header>
      <AnimatedContainer
        style={{
          opacity: fadeAnim,
        }}>
        <SectionContainer>
          <Text medium bold>
            Popular Games
          </Text>
          <PopularGames horizontal showHorizontalScrollIndicator={false}>
            {games.map((game, index) => {
              return (
                <PopularGameContainer key={index}>
                  <PopularGame source={game.cover} />
                </PopularGameContainer>
              );
            })}
          </PopularGames>
        </SectionContainer>
      </AnimatedContainer>
      <SectionContainer>
        <LiveGamesTitle>
          <Text medium bold>
            Live Now
          </Text>
          <Text bold color="#819ee5">
            View All
          </Text>
        </LiveGamesTitle>
      </SectionContainer>

      <LiveGames
        data={games}
        keyExtractor={(item) => String(item.id)}
        renderItem={({item}) => (
          <LiveGameContainer>
            <LiveGame source={item.cover} />
            <LiveGameOver>
              <LiveGameTitle>
                <Text small bold>
                  {item.title}
                </Text>
              </LiveGameTitle>
              <LiveGameBadge>
                <Text small bold>
                  Live
                </Text>
              </LiveGameBadge>
            </LiveGameOver>
          </LiveGameContainer>
        )}
      />
    </Container>
  );
};

export default LiveScreen;

const AnimatedContainer = styled(Animated.View)``;

const Container = styled.SafeAreaView`
  background-color: #343434;
  flex: 1;
`;

const Header = styled.View`
  margin: 32px 16px 0 16px;
`;

const SearchContainer = styled.View`
  position: relative;
  margin: 23px 8px;
  background-color: #404040;
  border-radius: 100px;
  justify-content: center;
`;

const Search = styled.TextInput`
  padding: 16px 64px 16px 32px;
  color: #c6c6c6;
`;

const SearchIcon = styled.TouchableOpacity`
  position: absolute;
  right: 16px;
`;

const SectionContainer = styled.View`
  margin: 0 16px;
`;

const PopularGames = styled.ScrollView`
  margin: 16px 0 16px -16px;
`;

const PopularGameContainer = styled.View`
  width: 80px;
  margin: 0 16px;
`;

const PopularGame = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 12px;
`;

const LiveGamesTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const LiveGames = styled.FlatList`
  flex: 1;
  margin: 16px 16px 0 16px;
`;

const LiveGameContainer = styled.View`
  position: relative;
`;

const LiveGame = styled.Image`
  width: 100%;
  height: 275px;
  margin-bottom: 16px;
  border-radius: 12px;
`;

const LiveGameOver = styled.View`
  position: absolute;
  flex-direction: row;
  align-items: center;
  top: 8px;
  right: 16px;
`;

const LiveGameTitle = styled.View`
  background-color: #819ee5;
  border-radius: 4px;
  padding: 2px 8px;
  margin-right: 4px;
`;

const LiveGameBadge = styled.View`
  background-color: #e54949;
  border-radius: 4px;
  padding: 2px 2px;
`;
