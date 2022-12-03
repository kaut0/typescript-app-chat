import * as React from 'react';
import {Text, View, FlatList} from 'react-native';
import {Bubble, GiftedChat, Time} from 'react-native-gifted-chat';

const ChatScreen = (): JSX.Element => {
  const [messages, setMessages] = React.useState<any>([]);
  console.log(messages, 'ini messages');
  React.useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developerkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = React.useCallback((messages: any = []) => {
    setMessages((previousMessages: any) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);
  const renderBubble = (props: any): JSX.Element => {
    return (
      <Bubble
        {...props}
        textStyle={{
          right: {
            color: 'white',
          },
        }}
        wrapperStyle={{
          left: {
            backgroundColor: 'gray',
            borderRadius: 6,
          },
          right: {
            backgroundColor: 'blue',
            borderRadius: 6,
          },
        }}
      />
    );
  };
  const renderTime = (props: any): JSX.Element => {
    return (
      <Time
        {...props}
        containerStyle={{
          left: {alignSelf: 'flex-end', flex: 1},
          right: {alignSelf: 'flex-end', maxWidth: 400},
        }}
        timeTextStyle={{
          left: {
            color: 'white',
            fontSize: 10,
            fontFamily: 'Rubik',
            textAlign: 'right',
          },
          right: {
            color: 'white',
            fontSize: 10,
            fontFamily: 'Rubik',
            textAlign: 'left',
          },
        }}
      />
    );
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      renderTime={renderTime}
    />
  );
};

export default ChatScreen;
