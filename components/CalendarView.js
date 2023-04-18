import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import MealPlanDisplay from './MealPlanDisplay';
import WorkoutPlanDisplay from './WorkoutPlanDisplay';
import {SelectList} from 'react-native-dropdown-select-list';
import {fetchMeals, getDietaryQuery} from '../TheMealAPI';

const CalendarView = ({mealPlan, workoutPlan}) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedDiet, setSelectedDiet] = React.useState('');

  const handleDayPress = day => {
    setSelectedDay(day.dateString);
  };

  const getDay = () => new Date(selectedDay).getDay();

  const dietary = [
    {key: '1', value: 'All'},
    {key: '2', value: 'Vegan'},
    {key: '3', value: 'Vegetarian'},
  ];

  const renderSelectedDay = () => {
    if (selectedDay) {
      return (
        <View style={styles.selectedDayContainer}>
          <Text style={styles.day}>{mealPlan[getDay()].day}</Text>

          <WorkoutPlanDisplay workouts={workoutPlan[getDay()].workouts} />
        </View>
      );
    }
  };

  const renderDietaryList = () => {
    return (
      <View style={styles.dietary}>
        <SelectList
          setSelected={val => setSelectedDiet(val)}
          onSelect={() => {
            const query = getDietaryQuery(selectedDiet);
            fetchMeals(query).then(meals => {
              console.log('Meals', meals);
            });
          }}
          data={dietary}
          save="value"
          placeholder="Select diet"
        />
      </View>
    );
  };

  const renderMeals = () => {
    if (selectedDiet) {
      return (
        <View style={styles.selectedDayContainer}>
          <MealPlanDisplay meals={mealPlan[getDay()].meals} />
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={{
          [selectedDay]: {
            selected: true,
            disableTouchEvent: true,
            selectedDotColor: 'orange',
          },
        }}
      />
      {renderDietaryList()}
      {renderMeals()}
      {renderSelectedDay()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  selectedDayContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  selectedDayTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  day: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dietary: {
    width: 250,
    alignSelf: 'flex-end',
    marginHorizontal: 10,
  },
});

export default CalendarView;
