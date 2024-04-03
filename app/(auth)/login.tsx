import "../../global.css"
import React from 'react';
import {Page, Text} from '@/components';
import {WatcherIcon} from '@/assets/icons';

import {LoginForm, SocialNetworkGroup} from "@/components/Forms";

const LoginScreen = () => {
    return (
        <Page className="items-center justify-center w-full h-full">
            <WatcherIcon className="mb-12" />
            <LoginForm className="mb-16" />
            <Text className="font-avenir-black text-lg mb-8">
                Connectez-vous avec
            </Text>
            <SocialNetworkGroup />
        </Page>
    );
};

export default LoginScreen;
