import React from 'react';
import {StatusBar} from 'react-native';

import styled from 'styled-components';

import Text from '../Text';
import categoryList from '../../constants/categories';

export default function HomeScreen() {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Header>
        <Text large>
          Hello {''}
          <Text large heavy>
            DesignIntoCode{' '}
          </Text>
          {'\n'}
          <Text large heavy>
            Best games for today
          </Text>
        </Text>
        <Avatar source={require('../../assets/avatar.webp')} />
      </Header>

      <Categories horizontal={true} showsHorizontalScrollIndicator={false}>
        {categoryList.map((category, index) => {
          return (
            <Category key={index}>
              <CategoryName>{category} </CategoryName>
            </Category>
          );
        })}
      </Categories>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #343434;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 16px 32px 0 32px;
`;

const Avatar = styled.Image`
  width: 40px;
  height: 40px;
`;

const Categories = styled.ScrollView`
  margin-top: 32px;
  flex-grow: 0;
`;

const Category = styled.TouchableOpacity`
  align-items: center;
  margin: 0 16px;
  height: 32px;
`;

const CategoryName = styled(Text)`
  color: ${(props) => (props.selected ? '#819ee5' : '#9a9a9a')};
  font-weight: ${(props) => (props.selected ? '700' : '500')};
`;
