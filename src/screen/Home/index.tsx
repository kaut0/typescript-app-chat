import * as React from 'react';
import {FlatList, Text, View} from 'react-native';
import {ConversationCard} from '../../components';
import style from './style';
import useHome from './useHome';

const Home = (): JSX.Element => {
  const [conversation, clickItem] = useHome();
  return (
    <View style={style.container}>
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
    </View>
  );
};

export default Home;
