import styled from 'styled-components/native';
import { darken, lighten } from 'polished';

export const Container = styled.View`
  flex: 1;
  justify-content: center;

  background: #191920;
`;

export const ProductList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: true,
})`
  margin-top: 20px;
`;

export const ProductItem = styled.View`
  background: #fff;
  width: 270px;
  border-radius: 4px;

  margin: 0 auto 10px;
`;

export const ProductImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 150px;
  height: 150px;
  margin: 0 auto;
`;

export const ProductTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  margin: 5px;
`;

export const ProductPrice = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin: 0 5px;
`;

export const ProductButton = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background: #7159c1;
  margin: 5px;
  border-radius: 4px;
  height: 40px;
`;

export const ProductButtonText = styled.Text`
  flex: 1;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
`;

export const ProductTotal = styled.View`
  height: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${darken(0.03, '#7159c1')};
  padding: 0 10px;
  border-radius: 4px;
`;

export const ProductTotalText = styled.Text`
  color: #fff;
  margin: 0 8px;
`;

export const Loading = styled.View`
  background: ${lighten(0.1, '#7159c1')};
`;
