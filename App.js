import React, {useState} from 'react';
import {
  View,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {ThemeProvider, ToastProvider, theme} from 'vnmeid-ui';
import HomeScreen from './src/screen/HomeSceen';
import VNMEIDUIScreen from './src/screen/VNMEIDUIScreen';

const BottomBar = ({tabs, activeTab, setActiveTab}) => {
  const [elevationAnim] = useState(new Animated.Value(4));

  const onPressTab = index => {
    setActiveTab(index);
    Animated.sequence([
      Animated.timing(elevationAnim, {
        toValue: 8,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(elevationAnim, {
        toValue: 4,
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start();
  };

  return (
    <Animated.View style={styles.bottomBar}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.tabItem, activeTab === index && styles.tabActive]}
          onPress={() => onPressTab(index)}>
          <Text style={{fontSize: 22}}>
            {tab.icon} {/* emoji */}
          </Text>
          <Text
            style={{
              color: activeTab === index ? theme.colors.primary : '#666',
              marginTop: 2,
              fontSize: 12,
              fontWeight: activeTab === index ? '600' : '400',
            }}>
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </Animated.View>
  );
};

const App = () => {
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {label: 'Trang chủ', icon: '🏠'},
    {label: 'VNMEID-UI', icon: '🎨'},
  ];

  return (
    <ThemeProvider>
      <ToastProvider>
        <View style={{flex: 1}}>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle="dark-content"
          />

          {activeTab === 0 ? (
            <HomeScreen />
          ) : (
            <VNMEIDUIScreen setLoading={setLoading} />
          )}

          <BottomBar
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </View>
      </ToastProvider>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -3},
    shadowRadius: 6,
    shadowOpacity: 0.1,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
