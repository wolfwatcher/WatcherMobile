import React from 'react';
import {Tabs} from 'expo-router';

const RegisterLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}>
      {/*{registerSteps.map(({name}) => (*/}
      {/*  <Tabs.Screen*/}
      {/*    key={name}*/}
      {/*    name={name}*/}
      {/*    options={{*/}
      {/*      href: null,*/}
      {/*    }}*/}
      {/*  />*/}
      {/*))}*/}
      <Tabs.Screen
        key={'birthdate'}
        name={'birthdate'}
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
};

export default RegisterLayout;
