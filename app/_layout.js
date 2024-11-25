import React from 'react';
import { Stack } from 'expo-router';

const _layout = () => {
    return (
        <Stack>
            <Stack.Screen name="index" options={{title:"Home"}} />
            <Stack.Screen name="about" options={{title:"About"}} />
        </Stack>
    );
};

export default _layout;