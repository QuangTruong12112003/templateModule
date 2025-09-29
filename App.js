import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  TouchableOpacity,
  Animated,
} from 'react-native';

import {
  ThemeProvider,
  Card,
  Button,
  List,
  ListItem,
  ToastProvider,
  theme,
} from 'vnmeid-ui';

import Icon from 'react-native-vector-icons/Feather';
import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <Card style={styles.sectionContainer} variant="outlined">
      <Text
        style={[
          styles.sectionTitle,
          {color: isDarkMode ? Colors.white : Colors.black},
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {color: isDarkMode ? Colors.light : Colors.dark},
        ]}>
        {children}
      </Text>
    </Card>
  );
};

// BottomBar component
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
    <Animated.View
      style={[
        styles.bottomBar,
        {
          shadowOpacity: elevationAnim.interpolate({
            inputRange: [0, 8],
            outputRange: [0.1, 0.3],
          }),
          elevation: elevationAnim,
        },
      ]}>
      {tabs.map((tab, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.tabItem, activeTab === index && styles.tabActive]}
          onPress={() => onPressTab(index)}>
          <Icon
            name={tab.icon}
            size={20}
            color={activeTab === index ? theme.colors.primary : '#666'}
          />
          <Text
            style={{
              color: activeTab === index ? theme.colors.primary : '#666',
            }}>
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </Animated.View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {label: 'Home', icon: 'home'},
    {label: 'Profile', icon: 'user'},
  ];

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ThemeProvider>
      <ToastProvider>
        <View style={backgroundStyle}>
          <StatusBar
            translucent
            backgroundColor="transparent"
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          />

          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={{paddingBottom: 100}}>
            <ImageBackground
              source={require('./assets/header-bg.png')}
              style={styles.headerWrapper}
              resizeMode="cover">
              <Text style={styles.headerTitle}>Welcome to React Native</Text>
              <Text style={styles.headerSubtitle}>
                Build UI faster with vnmeid-ui
              </Text>
            </ImageBackground>

            <SafeAreaView style={styles.bodyWrapper}>
              <View
                style={{
                  backgroundColor: isDarkMode ? Colors.black : Colors.white,
                }}>
                <Section title="Step One">
                  Edit <Text style={styles.highlight}>App.js</Text> to change
                  this screen and then come back to see your edits.
                </Section>
                <Section title="See Your Changes">
                  <ReloadInstructions />
                </Section>
                <Section title="Debug">
                  <DebugInstructions />
                </Section>
                <Section title="Learn More">
                  Read the docs to discover what to do next:
                </Section>
                <LearnMoreLinks />

                <Card
                  title="Quick Actions"
                  variant="elevated"
                  style={styles.card}>
                  <List>
                    <ListItem
                      title="Check Updates"
                      leftIcon={<Icon name="refresh-cw" size={16} />}
                      rightIcon={<Icon name="chevron-right" size={16} />}
                    />
                    <ListItem
                      title="View Docs"
                      leftIcon={<Icon name="book" size={16} />}
                      rightIcon={<Icon name="chevron-right" size={16} />}
                    />
                  </List>
                  <Button
                    title="Get Started"
                    variant="primary"
                    leftIcon={<Icon name="play" size={16} />}
                    onPress={() => setLoading(true)}
                    style={{marginTop: theme.spacing.md}}
                  />
                </Card>
              </View>
            </SafeAreaView>
          </ScrollView>

          {/* BottomBar */}
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
  headerWrapper: {
    height: 260,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight || 40,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 8,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#eee',
    textAlign: 'center',
  },
  bodyWrapper: {
    padding: 20,
    marginTop: -40,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: '#fff',
    paddingBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -3},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  sectionContainer: {
    marginTop: 24,
    padding: 16,
    borderRadius: 12,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 6,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
  },
  highlight: {
    fontWeight: '700',
    color: '#61dafb',
  },
  card: {
    marginTop: 20,
    marginHorizontal: 16,
  },
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
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
