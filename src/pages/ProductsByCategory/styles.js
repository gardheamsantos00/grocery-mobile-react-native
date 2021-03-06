import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';
import { darken } from 'polished';
import LottieView from 'lottie-react-native';

import emptyBox from '../../assets/animations/emptyBox.json';
import colors from '../../styles/colors.js';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const ListContainer = styled.View`
  padding: 5px;
  flex: 1;
`;

export const ProductList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})``;

export const Product = styled.View`
  background: ${colors.white};
  border-radius: 4px;
  padding: 10px;
  flex: 0.5;
  align-items: center;
  margin: 3px 3px 3px 3px;
`;

export const ImageContainer = styled.TouchableOpacity``;

export const ProductImage = styled.Image.attrs({ resizeMode: 'contain' })`
  width: 140;
  height: 140;
  margin-bottom: 5px;
`;

export const ProductTitle = styled.Text`
  margin: 5px 0;
  font-weight: bold;
`;

export const ProductInfoContainer = styled.View`
  align-self: stretch;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 8px;
`;

export const ProductUnit = styled.Text`
  color: ${colors.black};
`;

export const ProductPrice = styled.Text`
  color: ${colors.red};
`;

export const AddButton = styled(BaseButton)`
  background: ${colors.primary};
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
`;

export const ProductAmount = styled.View`
  padding: 10px;
  background: ${darken(0.03, colors.primary)};

  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const ProductAmountText = styled.Text`
  color: ${colors.white};
  font-size: 12px;
  margin: 0px 4px 0px 10px;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  font-size: 12px;
  color: ${colors.white};
`;

export const NoProducts = styled.View``;

export const AnimationContainer = styled.View`
  flex: 1;
`;

export const EmptyBoxAnimation = styled(LottieView).attrs({
  resizeMode: 'cover',
  source: emptyBox,
  autoPlay: true,
  loop: false,
})`
  height: 100%;
`;

export const NoProductsTextContainer = styled.View``;

export const NoProductsText = styled.Text`
  text-align: center;
  align-self: center;
  font-size: 20px;
  font-family: 'CerebriSans-ExtraBold';
`;

export const NoProductsSubText = styled.Text`
  text-align: center;
  align-self: center;
  font-size: 14px;
  font-family: 'CerebriSans-Regular';
`;
