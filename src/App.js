import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { assertTSBooleanKeyword } from '@babel/types';

const alanKey =
  'c1771b9fd7cf212cb2814dff9109847e2e956eca572e1d8b807a3e2338fdd0dc/stage';

const App = () => {
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command }) => {
        if (command === 'testCommand') {
          alert(' code executed ');
        }
      },
    });
  }, []);

  return <div>app</div>;
};

export default App;
