import { Stack } from 'expo-router';
import React from 'react';

export default function AppLayout() {
    return (
        <Stack screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
            <Stack.Screen name="homeDeliver" />
            <Stack.Screen name="homeTrade" />

            <Stack.Screen
                name="registerDeliver"
                options={{ animation: 'slide_from_bottom' }}
            />
            <Stack.Screen
                name="registerBarter"
                options={{ animation: 'slide_from_bottom' }}
            />
            <Stack.Screen
                name="validateFolio"
                options={{ animation: 'slide_from_bottom' }}
            />

            <Stack.Screen
                name="deliverySummary"
                options={{ animation: 'fade' }}
            />
            <Stack.Screen
                name="barterSummary"
                options={{ animation: 'fade' }}
            />

            <Stack.Screen
                name="deliveryLoading"
                options={{ animation: 'fade', gestureEnabled: false }}
            />
            <Stack.Screen
                name="validateLoading"
                options={{ animation: 'fade', gestureEnabled: false }}
            />
        </Stack>
    );
}
