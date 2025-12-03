import { colors } from '@/constants';
import { StyleSheet } from 'react-native';

export const homeAdminStyles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.1)',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        paddingTop: 100,
        paddingRight: 20,
    },
    optionsContainer: {
        backgroundColor: colors.primary.normal,
        borderRadius: 8,
        padding: 0,
        width: 155,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    optionButton: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        alignItems: 'center'
    },
    separator: {
        height: 1,
        backgroundColor: 'rgba(255,255,255,0.3)',
        width: '100%'
    },
    optionText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 14,
    }
});
