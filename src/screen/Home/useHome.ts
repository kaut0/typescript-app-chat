import * as React from 'react';
import {getData} from '../../Api';

const useHome = (): any => {
  const [conversation, setConversation] = React.useState<any | null>([]);
  const clickItem = (name: string, number: number): void => {
    console.log(name);
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
