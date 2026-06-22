import React, { useEffect, useRef } from 'react';
import { Animated, Text, View } from 'react-native';
import { styles } from './styles';

export interface ProgressBarProps {
  progress: number;
  height?: number;
  showLabel?: boolean;
}

export function ProgressBar({
  progress,
  height = 10,
  showLabel = true,
}: ProgressBarProps) {
  const animatedWidth = useRef(new Animated.Value(0)).current;
  const clampedProgress = Math.min(100, Math.max(0, progress));

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: clampedProgress,
      duration: 600,
      useNativeDriver: false,
    }).start();
  }, [clampedProgress, animatedWidth]);

  return (
    <View style={styles.wrapper}>
      <View style={[styles.track, { height }]}>
        <Animated.View
          style={[
            styles.fill,
            {
              height,
              width: animatedWidth.interpolate({
                inputRange: [0, 100],
                outputRange: ['0%', '100%'],
              }),
            },
          ]}
        />
      </View>
      {showLabel && <Text style={styles.label}>{clampedProgress}%</Text>}
    </View>
  );
}