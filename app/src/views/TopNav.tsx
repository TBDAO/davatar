import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

// @ts-ignore
import pixelLogo from '../assets/logo.png';
import { spacing } from '../constants';
import useIsMoWeb from '../useIsMoWeb';
import ConnectWalletButton from './ConnectWalletButton';
import Typography from './Typography';

export default function TopNav() {
  const isMoWeb = useIsMoWeb();

  return (
    <View style={[styles.container, isMoWeb && styles.containerXS]}>
      <View style={styles.topNav}>
        <View>
          <View style={styles.headerContainer}>
            <Image style={styles.logo} source={pixelLogo} />

            {!isMoWeb && (
              <Typography fontWeight={600} style={styles.header}>
                davatar
              </Typography>
            )}
          </View>
        </View>

        <ConnectWalletButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 36,
    width: 36,
    marginRight: 8,
  },
  container: {
    backgroundColor: '#f8f8fe',
    width: '100%',
    height: '74px',
    // alignItems: 'center',
    position: 'absolute',
    paddingRight: spacing(4),
    paddingLeft: spacing(4),
  },
  containerXS: {
    paddingRight: spacing(3),
    paddingLeft: spacing(3),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonsContainers: {
    flexDirection: 'row',
  },
  header: {
    fontSize: 32,
    color: '#5b58eb',
  },
  topNav: {
    paddingTop: spacing(2),
    paddingBottom: spacing(2),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
