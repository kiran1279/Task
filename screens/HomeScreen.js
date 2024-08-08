import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { restaurantData } from "../assets/data/data";
import Banner from "../components/Banner";
import DishesListContainer from "../components/DishesListContainer";
import FeaturedRestaurantsContainer from "../components/FeaturedRestaurantsContainer";
import RestaurantCard from "../components/RestaurantCard";
import BannerSlider from "../components/BannerSlider";
import { FlashList } from "@shopify/flash-list";

const HomeScreen = () => {

  const images = [
    { url: 'https://img.freepik.com/free-vector/flat-design-food-sale-banner_23-2149108165.jpg' },
    { url: 'https://img.freepik.com/free-vector/pizza-restaurant-landing-page-template_23-2148605544.jpg?t=st=1723054196~exp=1723057796~hmac=7e23cb2465ff3631c1231962fa40302aef19045b572496896d59d4d6e7bb7481&w=996' },
    { url: 'https://img.freepik.com/free-vector/delicious-fast-food-banner-with-discount_23-2149113472.jpg?t=st=1723054092~exp=1723057692~hmac=ee46ec44586072c149da367aa9d93f6e74e3533a939028fa751fbff0d431078a&w=1060' },
    { url: 'https://img.freepik.com/free-vector/flat-design-food-sale-banner-with-special-offer_23-2149113276.jpg?t=st=1723054047~exp=1723057647~hmac=2c4c2cb0d56fcd1be89438410ad0a9f114878825e1ba5affe2cb4843e88739cc&w=1060' },
  ];

  return (
    <SafeAreaView style={styles.container}>

      <FlashList
        data={restaurantData}
        renderItem={({ item }) => (
          <RestaurantCard
            image={item.image}
            restaurant={item.restaurant}
            duration={item.duration}
            distance={item.distance}
            bill={item.bill}
            rating={item.rating}
            discount={item.discount}
            isVeg={item.isVeg}
            totalOrder={item.totalOrder}
            cuisines={item.cuisines}
          />
        )}
        estimatedItemSize={100}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <Banner
              image={{ uri: "https://northeastlive.s3.amazonaws.com/media/uploads/2023/09/zomata.png" }} />
            <DishesListContainer />
            <BannerSlider images={images} />
            <FeaturedRestaurantsContainer />
            <Text style={styles.restaurantCardHeading}>
              Restaurants around you
            </Text>
          </>
        }
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

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
});
