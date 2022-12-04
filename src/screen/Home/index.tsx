import {Button} from '@rneui/themed';
import * as React from 'react';
import {FlatList, Text, View} from 'react-native';
import {ConversationCard} from '../../components';
import {useAppDispatch, useAppSelector} from '../../redux/Hooks';
import {increment} from '../../redux/Reducer/counterReducer';
import style from './style';
import useHome from './useHome';

const Home = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector(state => state.counter.value);
  const [conversation, clickItem] = useHome();
  return (
    <View style={style.container}>
      <Text>{counter}</Text>
      <FlatList
        data={conversation}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{marginTop: 10}} />}
        renderItem={({item}) => (
          <ConversationCard
            title={item.name}
            desc={item.url}
            onClick={clickItem}
          />
        )}
      />
      <Button
        onPress={() => dispatch(increment())}
        buttonStyle={{
          width: 50,
          height: 50,
          borderRadius: 25,
        }}
        containerStyle={{
          position: 'absolute',
          bottom: 50,
          right: 20,
        }}
        icon={{
          name: 'home',
          type: 'font-awesome',
          size: 15,
          color: 'white',
        }}
      />
    </View>
  );
};

export default Home;
