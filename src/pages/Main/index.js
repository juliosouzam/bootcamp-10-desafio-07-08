import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Icons from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import { addToCartRequest } from '../../store/modules/cart/actions';

import {
  Container,
  ProductList,
  ProductItem,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductButton,
  ProductTotal,
  ProductButtonText,
  ProductTotalText,
} from './styles';

import { formatPrice } from '../../util/format';

export default function Main() {
  const [products, setProducts] = useState([]);
  const amountTotal = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      setProducts(response.data);
    }

    loadProducts();
  }, []);

  function renderItem({ item }) {
    return (
      <ProductItem key={item.id}>
        <ProductImage source={{ uri: item.image }} />
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPrice>{formatPrice(item.price)}</ProductPrice>
        <ProductButton onPress={() => handleAddToCart(item)}>
          <ProductTotal>
            <Icons name="add-shopping-cart" size={22} color="#fff" />
            <ProductTotalText>{amountTotal[item.id] || 0}</ProductTotalText>
          </ProductTotal>
          <ProductButtonText>Adicionar</ProductButtonText>
        </ProductButton>
      </ProductItem>
    );
  }

  function handleAddToCart({ id }) {
    dispatch(addToCartRequest(id));
  }

  return (
    <Container>
      <ProductList
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={renderItem}
      />
    </Container>
  );
}
