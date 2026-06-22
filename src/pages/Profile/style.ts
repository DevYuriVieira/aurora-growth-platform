import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: theme.colors.surface, 
    padding: 20 
  },
  center: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: theme.colors.surface 
  },
  avatar: { 
    width: 150, 
    height: 150, 
    borderRadius: 75, 
    backgroundColor: theme.colors.surfaceContainerHigh 
  },
  loader: { 
    marginVertical: 10 
  },
  name: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: theme.colors.onSurface, 
    marginTop: 15 
  },
  email: { 
    fontSize: 16, 
    color: theme.colors.onSurfaceVariant, 
    marginBottom: 30 
  },
  button: { 
    backgroundColor: theme.colors.primary, 
    paddingVertical: 12, 
    paddingHorizontal: 30, 
    borderRadius: 8, 
    marginVertical: 5, 
    width: '100%', 
    alignItems: 'center' 
  },
  buttonText: { 
    color: theme.colors.onPrimary || '#FFF', 
    fontSize: 16, 
    fontWeight: '600' 
  }
});