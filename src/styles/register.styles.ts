import { StyleSheet } from 'react-native';
import { colors } from '@/constants';

export const registerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },

 
  header: {
    paddingHorizontal: 20,
    paddingTop: 56,
    paddingBottom: 12,
    backgroundColor: colors.white,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

 
  content: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },

  
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.texts.dark,
    marginBottom: 8,
    marginTop: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.texts.normal,
    lineHeight: 22,
    marginBottom: 24,
  },

 
  totalGenerated: {
    fontSize: 26,
    fontWeight: '400',
    color: colors.texts.dark,
    marginBottom: 32,
  },
  totalAmount: {
    fontSize: 26,
    fontWeight: '700',
    color: colors.primary.normal,
  },


  plasticsContainer: {
    gap: 24,
  },


  plasticRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },


  plasticInfo: {
    flex: 1,
  },
  plasticName: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.texts.dark,
    marginBottom: 4,
  },
  plasticPrice: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.texts.normal,
  },


  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: colors.primary.light,
  },


  counterButton: {
    width: 32,
    height: 32,
    borderRadius: 4,
    backgroundColor: colors.primary.normal,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterButtonPressed: {
    opacity: 0.8,
  },


  quantity: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.primary.normal,
    minWidth: 30,
    textAlign: 'center',
  },

  
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingBottom: 40,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
});