import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const WorkoutPlanDisplay = ({workouts}) => {
  const renderExercise = ({item: exercise}) => (
    <View style={styles.exercise}>
      <Text style={styles.exerciseName}>{exercise.name}</Text>
      <Text>Sets: {exercise.sets}</Text>
      <Text>Reps: {exercise.reps}</Text>
      <Text>Resistance: {exercise.resistance} lbs</Text>
    </View>
  );

  const renderWorkout = ({item: workout}) => (
    <View style={styles.workout}>
      <Text style={styles.workoutName}>{workout.name}</Text>
      <FlatList
        data={workout.exercises}
        renderItem={renderExercise}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );

  // const renderDay = ({item: day}) => (
  //   <View style={styles.day}>
  //     <FlatList
  //       data={day.workouts}
  //       renderItem={renderWorkout}
  //       keyExtractor={(item, index) => index.toString()}
  //     />
  //   </View>
  // );

  return (
    <View style={styles.container}>
      <Text style={styles.dayName}>Workouts</Text>
      <FlatList
        data={workouts}
        renderItem={renderWorkout}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 20, //No needed extra padding
  },
  day: {
    marginBottom: 20,
  },
  dayName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  workout: {
    marginBottom: 10,
  },
  workoutName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  exercise: {
    marginBottom: 5,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  exerciseName: {
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default WorkoutPlanDisplay;
