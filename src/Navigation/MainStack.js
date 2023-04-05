import React from 'react';

import FlashLoader from '../Screen/Auth/FlashLoader';
import Welcome from '../Welcome/Welcome';
// import LiveChatSdk from '../LiveChatSdk/LiveChatSdk';

// import TabRoutes from './TabRoutes';

const MainStack = (Stack, loactionStatus) => {


  return (
    <>
      {!loactionStatus && <Stack.Screen name="FlashLoader" component={FlashLoader} />}


      <Stack.Screen name="Tabs" component={Welcome} />


    </>
  );
};

export default MainStack;
