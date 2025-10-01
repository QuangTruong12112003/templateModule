import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from 'react-native';
import {Card, Button, List, ListItem, Spacer, theme} from 'vnmeid-ui';

const VNMEIDUIScreen = ({setLoading}) => {
  return (
    <ScrollView style={{flex: 1}}>
      {/* Header Background */}
      <ImageBackground
        source={require('../../assets/header-bg.png')}
        style={styles.headerWrapper}
        resizeMode="cover">
        <Text style={styles.headerTitle}>🎨 VNMEID UI Showcase</Text>
        <Text style={styles.headerSubtitle}>
          ✨ Khám phá các component đẹp và tiện lợi
        </Text>
      </ImageBackground>

      {/* Body content */}
      <SafeAreaView style={styles.bodyWrapper}>
        {/* Quick Actions */}
        <Card title="⚡ Quick Actions" variant="elevated" style={styles.card}>
          <List>
            <ListItem
              title="🔄 Check Updates"
              subtitle="Get the latest version"
            />
            <ListItem title="📖 View Docs" subtitle="Read usage guide & API" />
          </List>

          <Spacer size="md" />

          <Button
            title="▶️ Get Started"
            variant="primary"
            onPress={() => setLoading(true)}
            fullWidth
          />
        </Card>


        {/* Extra Section */}
        <Card title="🎨 UI Showcase" variant="outlined" style={[styles.card, { marginBottom: 40 }]}>
          <List>
            <ListItem
              title="📝 Form Components"
              subtitle="Inputs, sliders, pickers"
            />
            <ListItem title="🧭 Navigation" subtitle="Header, TabBar, List" />
            <ListItem title="📊 Feedback" subtitle="Toast, Loading, Progress" />
          </List>

          <Spacer size="md" />

          <Button
            title="✨ Explore Components"
            variant="secondary"
            onPress={() => console.log('Explore')}
            fullWidth
          />
        </Card>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    height: 260,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 8,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#8e8989ff',
    textAlign: 'center',
  },
  bodyWrapper: {
    flex: 1,
    padding: 20,
    marginTop: -40, // kéo body lên overlay header
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: theme.colors.background.primary,
    paddingBottom: 40,
  },
  card: {
    marginTop: 20,
    padding:20,
    backgroundColor: theme.colors.background.paper,
    borderRadius: theme.borderRadius.lg,
    marginHorizontal: 16, // 👈 thêm dòng này
    ...theme.shadows.md,
  },
});

export default VNMEIDUIScreen;
