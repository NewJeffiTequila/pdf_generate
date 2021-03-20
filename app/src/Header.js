import * as React from 'react';
import { Appbar } from 'react-native-paper';

const Header = (props) => {
  const _goBack = () => console.log('Went back');


  // const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title={props.title} subtitle={props.subtitle} />
    </Appbar.Header>
  );
};

export default Header;