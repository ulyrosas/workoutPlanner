import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const MealPlanDisplay = ({meals}) => {
  const renderMeal = ({item: meal}) => (
    <View style={styles.meal}>
      <Text style={styles.mealType}>{meal.type}</Text>
      <Text style={styles.mealName}>{meal.name}</Text>
      <Text>Ingredients:</Text>
      <FlatList
        data={meal.ingredients}
        renderItem={({item: ingredient}) => <Text>- {ingredient}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <Text>Recipe:</Text>
      <Text>{meal.recipe}</Text>
      <Text>Nutrition:</Text>
      <Text>Calories: {meal.nutrition.calories} kcal</Text>
      <Text>Protein: {meal.nutrition.protein} g</Text>
      <Text>Carbs: {meal.nutrition.carbs} g</Text>
      <Text>Fats: {meal.nutrition.fats} g</Text>
      <Text>Fiber: {meal.nutrition.fiber} g</Text>
      <Text>Sugar: {meal.nutrition.sugar} g</Text>
      <Text>Vitamin C: {meal.nutrition.vitaminC} mg</Text>
      <Text>Iron: {meal.nutrition.iron} mg</Text>
    </View>
  );
  // const renderDay = ({item: meal}) => (
  //   <View style={styles.day}>
  //     <Text style={styles.dayName}>{meal.day}</Text>
  //     <FlatList
  //       data={meal.meals}
  //       renderItem={renderMeal}
  //       keyExtractor={(item, index) => index.toString()}
  //     />
  //   </View>
  // );

  return (
    <View>
      <Text style={styles.day}>Meals</Text>
      <FlatList
        data={meals}
        renderItem={renderMeal}
        horizontal={true}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  day: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dayName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
  },
  meal: {
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  mealType: {
    fontSize: 18,
  },
});

export default MealPlanDisplay;
