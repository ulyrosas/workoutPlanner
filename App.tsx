import React from 'react';
import {ScrollView, View} from 'react-native';
import CalendarView from './components/CalendarView';
import workoutPlan from './WorkoutPlan';
import mealPlan from './MealPlan';

const App = () => {
  return (
    <ScrollView>
      <View style={{flex: 1, marginTop: 42}}>
        <CalendarView mealPlan={mealPlan} workoutPlan={workoutPlan} />
      </View>
    </ScrollView>
  );
};

export default App;
