import React from 'react';
import {StatusBar} from 'react-native';

import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

import Text from '../Text';
import games from '../../constants/gameData';

const LiveScreen = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content" />

      <Header>
        <Text large bold>
          Streaming
        </Text>
        <SearchContainer>
          <Search placeholder="Search....." placeholdertextColor="#838383" />
          <SearchIcon>
            <Icon name="search" size={24} color="#838383" />
          </SearchIcon>
        </SearchContainer>
      </Header>
    </Container>
  );
};

export default LiveScreen;

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
