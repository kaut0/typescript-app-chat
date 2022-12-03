import * as React from 'react';
import {getData} from '../../Api';
import {useNavigation} from '@react-navigation/native';

const useHome = (): any => {
  const navigation: any = useNavigation();
  const [conversation, setConversation] = React.useState<any | null>([]);
  const clickItem = (): void => {
    navigation.navigate('ChatScreen');
  };
  const getDataList = async (): Promise<void> => {
    const response = await getData();
    const result = response.data.results;
    if (response.status === 200) {
      setConversation(result);
    }
  };
  React.useEffect(() => {
    getDataList();
  }, []);
  return [conversation, clickItem];
};

export default useHome;
