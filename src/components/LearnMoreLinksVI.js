import React, {Fragment} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Linking,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import openURLInBrowser from 'react-native/Libraries/Core/Devtools/openURLInBrowser';

const links = [
  {
    id: 1,
    title: 'vnmeid-cli',
    link: 'https://www.npmjs.com/package/vnmeid-cli',
    description:
      'Thư viện công cụ dòng lệnh MEID giúp khởi tạo dự án nhanh chóng',
  },
  {
    id: 2,
    title: 'vnmeid-ui',
    link: 'https://www.npmjs.com/package/vnmeid-ui',
    description: 'Thư viện component MEID đẹp và tiện lợi cho dự án của bạn',
  },
  {
    id: 3,
    title: 'vnmeid-services',
    link: 'https://www.npmjs.com/package/vnmeid-services',
    description: 'Thư viện tích hợp các dịch vụ cho ứng dụng MEID của bạn',
  },
];

const LinkList = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const openLink = (url) => {
  if (__DEV__) {
    openURLInBrowser(url); 
  } else {
    Linking.openURL(url);   
  }
};

  return (
    <View style={styles.container}>
      {links.map(({id, title, link, description}) => (
        <Fragment key={id}>
          <View
            style={[
              styles.separator,
              {
                backgroundColor: isDarkMode ? Colors.dark : Colors.light,
              },
            ]}
          />
          <TouchableOpacity
            accessibilityRole="button"
            onPress={() => openLink(link)}
            style={styles.linkContainer}>
            <Text style={styles.link}>{title}</Text>
            <Text
              style={[
                styles.description,
                {color: isDarkMode ? Colors.lighter : Colors.dark},
              ]}>
              {description}
            </Text>
          </TouchableOpacity>
        </Fragment>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    marginBottom: 40,
    paddingHorizontal: 24,
  },
  linkContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  link: {
    flex: 2,
    fontSize: 16,
    fontWeight: '400',
    color: Colors.primary,
  },
  description: {
    flex: 3,
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 15,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
  },
});

export default LinkList;
