import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { restaurantData } from "../assets/data/data";
import Banner from "../components/Banner";
import DishesListContainer from "../components/DishesListContainer";
import FeaturedRestaurantsContainer from "../components/FeaturedRestaurantsContainer";
import RestaurantCard from "../components/RestaurantCard";
import BannerSlider from "../components/BannerSlider";
import { FlashList } from "@shopify/flash-list";
import axios from "axios";
import {
  FontAwesome,
  MaterialCommunityIcons,
  Feather,
  Ionicons,
} from "@expo/vector-icons";
const HomeScreen2 = () => {

  const images = [
    { url: 'https://img.freepik.com/free-vector/flat-design-food-sale-banner_23-2149108165.jpg' },
    { url: 'https://img.freepik.com/free-vector/pizza-restaurant-landing-page-template_23-2148605544.jpg?t=st=1723054196~exp=1723057796~hmac=7e23cb2465ff3631c1231962fa40302aef19045b572496896d59d4d6e7bb7481&w=996' },
    { url: 'https://img.freepik.com/free-vector/delicious-fast-food-banner-with-discount_23-2149113472.jpg?t=st=1723054092~exp=1723057692~hmac=ee46ec44586072c149da367aa9d93f6e74e3533a939028fa751fbff0d431078a&w=1060' },
    { url: 'https://img.freepik.com/free-vector/flat-design-food-sale-banner-with-special-offer_23-2149113276.jpg?t=st=1723054047~exp=1723057647~hmac=2c4c2cb0d56fcd1be89438410ad0a9f114878825e1ba5affe2cb4843e88739cc&w=1060' },
  ];

  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);

  const loadMoreData = () => {
    fetchImageList()

  }

  const fetchFruits = async () => {
    try {
      const response = await fetch(`https://pixabay.com/api/?key=45336467-bce332e8e7714c1d3ae1dd802&image_type=photo&per_page=20&page=1`);
      const data = await response.json();
      setData(data.hits);
      console.log(data.hits.length, data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchImageList = async () => {
    try {
      const response = await fetch(`https://pixabay.com/api/?key=45336467-bce332e8e7714c1d3ae1dd802&image_type=photo&per_page=200&page=${page}`);
      const data = await response.json();

      if (data.hits.length === 0) {
        setHasMore(false);
      } else {
        if (page > 1) {
          setData(prevData => [...prevData, ...data.hits]);
        }
        setPage(page + 1);

      }

      console.log(data.hits.length, data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchFruits();
  }, []);

  const renderImage = ({ item }) => (
    <View style={styles.item}>

      <View style={styles.cardContainer}>
        <Image
          style={styles.image}
          source={{ uri: item.webformatURL }}
        />
        <View style={{ position: "absolute", top: 10, right: 5, backgroundColor: "rgba(42, 147, 74, 0.9)", padding: 5, borderRadius: 10 }}>
          <Text style={styles.views}>{item?.views} Views</Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.actions}>
            <View style={{ flexDirection: "row" }}>
              <Feather name="heart" size={20} color="#FC7D86" />
              <Text style={styles.likes}>{item?.likes} Likes</Text>
            </View>
            <TouchableOpacity>
              <FontAwesome name="mail-forward" size={20} color="#000" />

            </TouchableOpacity>
          </View>
        </View>
      </View>

    </View>
  );


  return (
    <SafeAreaView style={styles.container}>
      <FlashList
        data={data}
        renderItem={renderImage}
        keyExtractor={item => item.id.toString()}
        onEndReached={loadMoreData}
        estimatedItemSize={320}
        onEndReachedThreshold={0.5}
        horizontal={false}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default HomeScreen2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    paddingTop: Platform.OS === "android" ? 50 : 0,
  },
  categories: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingLeft: 14,
  },
  restaurantCardHeading: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 12,
    marginBottom: 2,
  },
  image: {
    width: '100%',
    height: 300,
  },
  item: {
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardContainer: {
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 1,
  },
  infoContainer: {
    padding: 10,
  },
  views: {
    fontSize: 12,
    color: '#fff',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  likes: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5
  },
});
