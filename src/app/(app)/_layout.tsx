import { Stack } from 'expo-router';
import React from 'react';

export default function AppLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="homeDeliver" />
            <Stack.Screen name="homeTrade" />
            <Stack.Screen name="registerDeliver" />
            <Stack.Screen name="registerBarter" />
            <Stack.Screen name="validateFolio" />
            <Stack.Screen name="deliverySummary" />
            <Stack.Screen name="barterSummary" />
            <Stack.Screen name="deliveryLoading" />
            <Stack.Screen name="validateLoading" />
        </Stack>
    );
}
