import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  useColorScheme,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Card, theme} from 'vnmeid-ui';
import LinkList from '../components/LearnMoreLinksVI';

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

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ScrollView style={{flex: 1}}>
      <ImageBackground
        source={require('../../assets/header-bg.png')}
        style={styles.headerWrapper}
        resizeMode="cover">
        <Text style={styles.headerTitle}>🚀 Chào mừng đến với MEID</Text>
        <Text style={styles.headerSubtitle}>
          ✨ Xây dựng UI nhanh hơn với vnmeid-ui
        </Text>
      </ImageBackground>

      <SafeAreaView style={styles.bodyWrapper}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="🛠️ Bước Một">
            Chỉnh sửa file <Text style={styles.highlight}>App.js</Text> để thay
            đổi màn hình này và sau đó quay lại để xem kết quả.
          </Section>
          <Section title="🔄 Xem Thay Đổi">
            <ReloadInstructions />
          </Section>
          <Section title="🐞 Gỡ Lỗi">
            <DebugInstructions />
          </Section>
          <Section title="📚 Tìm Hiểu Thêm">
            Đọc tài liệu để khám phá những gì bạn có thể làm tiếp theo:
          </Section>
        </View>
        <LinkList />
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
    color: '#8e8989ff',
    textAlign: 'center',
  },
  bodyWrapper: {
    flex: 1,
    padding: 20,
    marginTop: -40,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: theme.colors.background.primary,
    paddingBottom: 40,
    overflow: 'hidden', // thêm dòng này
  },
  sectionContainer: {
    marginTop: 24,
    padding: 16,
    marginHorizontal: 16,
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
});

export default HomeScreen;
