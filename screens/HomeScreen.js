import {
  FlatList,
  InteractionManager,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Category from "../components/Category";
import { categories, restaurantData } from "../assets/data/data";
import SearchBar from "../components/SearchBar";
import Banner from "../components/Banner";
import OrderAgainContainer from "../components/OrderAgainContainer";
import DishComponentContainer from "../components/DishComponentContainer";
import FeaturedRestaurantsContainer from "../components/FeaturedRestaurantsContainer";
import RestaurantCard from "../components/RestaurantCard";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Restaurants */}

      <FlatList
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
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            {/* search bar */}
            <SearchBar />
            {/* categories */}
            <View style={styles.categories}>
              <FlatList
                data={categories}
                renderItem={({ item }) => <Category title={item.title} />}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
            {/* banners */}
            <Banner image={require("../assets/images/banner_1.jpg")} />
            <Banner image={require("../assets/images/banner_2.jpg")} />
            {/* order again */}
            <OrderAgainContainer />
            {/* dishes */}
            <DishComponentContainer />
            {/* Featured restaurants */}
            <FeaturedRestaurantsContainer />
            <Text style={styles.restaurantCardHeading}>
              {restaurantData.length * 30} restaurants around you
            </Text>
          </>
        }
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  categories: {
    flexDirection: "row",
    paddingVertical: 13,
    paddingLeft: 8,
  },
  restaurantCardHeading: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 15,
    marginVertical: 7,
  },
});
