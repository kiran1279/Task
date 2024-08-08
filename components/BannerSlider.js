import React, { useEffect, useRef, useState } from 'react';
import { View, Image, Dimensions, StyleSheet, Text } from 'react-native';
import { FlashList } from '@shopify/flash-list';

const { width } = Dimensions.get('window');

const BannerSlider = ({ images }) => {
    const flatListRef = useRef(null);
    const currentIndex = useRef(0);
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            currentIndex.current = (currentIndex.current + 1) % images?.length;
            flatListRef.current.scrollToIndex({
                index: currentIndex.current,
                animated: true,
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);


    const onViewableItemsChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            setActiveIndex(viewableItems[0].index);
        }
    }).current;

    const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;




    return (
        <View style={styles.container}>
            <FlashList
                ref={flatListRef}
                data={images}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Image source={{ uri: item.url }} style={styles.image} />
                )}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                estimatedItemSize={width}
                onViewableItemsChanged={onViewableItemsChanged}
            />
            <View style={styles.pagination}>
                {images.map((item, index) => (
                    <View
                        key={index}
                        style={[
                            styles.dot,
                            activeIndex === index ? styles.activeDot : styles.inactiveDot,
                        ]}
                    />
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: width,
        height: 100,
        borderRadius: 10,
        alignSelf: "center"
    },
    image: {
        width: width - 10,
        height: 100,
        resizeMode: 'cover',
        alignSelf: "center"
    },
    pagination: {
        position: 'absolute',
        bottom: 6,
        flexDirection: 'row',
        alignSelf: 'center',
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 3,
    },
    activeDot: {
        backgroundColor: '#000',
    },
    inactiveDot: {
        backgroundColor: '#888',
    },
});

export default BannerSlider;
