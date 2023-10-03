
import { StyleSheet,  View } from 'react-native';

import RootStack from './navigation/RoolStack';



export default function App() {
  return (
    
<RootStack></RootStack>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
