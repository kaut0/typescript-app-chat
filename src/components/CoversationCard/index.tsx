import {Avatar} from '@rneui/themed';
import * as React from 'react';
import {View, Text} from 'react-native';
import style from './style';
const ConversationCard = ({
  title,
  desc,
  ...props
}: {
  title: string;
  desc: string;
}): JSX.Element => {
  return (
    <View style={style.container}>
      <Avatar
        size={64}
        rounded
        source={{uri: 'https://source.unsplash.com/random'}}
      />
      <View style={style.textContainer}>
        <Text>{title}</Text>
        <Text>{desc}</Text>
      </View>
    </View>
  );
};

export default ConversationCard;
