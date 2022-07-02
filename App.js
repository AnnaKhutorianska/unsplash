import { StyleSheet, Text, View } from 'react-native';
import Navigate from './src/navigation/navigate';
import { Provider } from 'react-redux';

import store from './src/stores/store';

function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Navigate />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default App;
