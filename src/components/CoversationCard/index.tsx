import {Avatar} from '@rneui/themed';
import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from './style';
const ConversationCard = ({
  title,
  desc,
  ...props
}: {
  title: string;
  desc: string;
  onClick: any;
}): JSX.Element => {
  return (
    <TouchableOpacity onPress={props.onClick} style={style.container}>
      <Avatar
        size={64}
        rounded
        source={{uri: 'https://source.unsplash.com/random'}}
      />
      <View style={style.textContainer}>
        <Text>{title}</Text>
        <Text>{desc}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ConversationCard;
