import * as React from 'react';
import { TextInput  } from 'react-native-paper';

const Login = () => {
    const [text, setText] = React.useState('');


  // const _handleMore = () => console.log('Shown more');

  return (
    <TextInput
      label="Email"
      value={text}
      onChangeText={text => setText(text)}
    />
  );
};

export default Login;