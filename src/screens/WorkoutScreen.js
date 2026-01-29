import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Animated,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ExerciseCard = ({ exercise, index, character, isCompleted, onToggle }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setExpanded(!expanded)}
      activeOpacity={0.8}
    >
      <View style={[
        styles.exerciseCard,
        isCompleted && styles.completedCard,
      ]}>
        <LinearGradient
          colors={[
            isCompleted ? '#1a3d1a' : character.secondaryColor + '80',
            'transparent'
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.exerciseGradient}
        >
          {/* Exercise Number */}
          <View style={[
            styles.exerciseNumber,
            { backgroundColor: isCompleted ? '#4CAF50' : character.accentColor + '30' }
          ]}>
            <Text style={[
              styles.numberText,
              { color: isCompleted ? '#fff' : character.accentColor }
            ]}>
              {isCompleted ? '✓' : index + 1}
            </Text>
          </View>

          {/* Exercise Info */}
          <View style={styles.exerciseInfo}>
            <View style={styles.exerciseHeader}>
              <Text style={styles.exerciseIcon}>{exercise.icon}</Text>
              <View style={styles.exerciseTitleContainer}>
                <Text style={[
                  styles.exerciseName,
                  isCompleted && styles.completedText
                ]}>
                  {exercise.name}
                </Text>
                <Text style={styles.exerciseCategory}>{exercise.category}</Text>
              </View>
            </View>
            
            <View style={styles.repsContainer}>
              <Text style={[styles.repsText, { color: character.accentColor }]}>
                {exercise.reps}
              </Text>
            </View>

            {expanded && (
              <View style={styles.descriptionContainer}>
                <View style={[styles.descriptionLine, { backgroundColor: character.accentColor }]} />
                <Text style={styles.descriptionText}>{exercise.description}</Text>
              </View>
            )}
          </View>

          {/* Complete Button */}
          <TouchableOpacity
            style={[
              styles.completeButton,
              isCompleted && { backgroundColor: '#4CAF50' },
              !isCompleted && { borderColor: character.accentColor }
            ]}
            onPress={(e) => {
              e.stopPropagation();
              onToggle();
            }}
          >
            <Text style={[
              styles.completeIcon,
              !isCompleted && { color: character.accentColor }
            ]}>
              {isCompleted ? '✓' : '○'}
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
};

export default function WorkoutScreen({ route, navigation }) {
  const { character, workout } = route.params;
  const [completedExercises, setCompletedExercises] = useState(new Set());

  const toggleExercise = (index) => {
    const newCompleted = new Set(completedExercises);
    if (newCompleted.has(index)) {
      newCompleted.delete(index);
    } else {
      newCompleted.add(index);
    }
    setCompletedExercises(newCompleted);
  };

  const progress = (completedExercises.size / workout.exercises.length) * 100;
  const allCompleted = completedExercises.size === workout.exercises.length;

  const getIntensityColor = (intensity) => {
    switch (intensity) {
      case 'Light': return '#4ECDC4';
      case 'Moderate': return '#45B7D1';
      case 'Heavy': return '#F39C12';
      case 'High': return '#E74C3C';
      case 'Intense': return '#9B59B6';
      case 'Maximum': return '#FF4757';
      default: return '#666';
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[character.secondaryColor, '#0a0a0f', '#0a0a0f']}
        style={styles.background}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={[styles.backText, { color: character.accentColor }]}>← Calendar</Text>
          </TouchableOpacity>
          
          <View style={styles.headerContent}>
            <Text style={styles.dayLabel}>{workout.dayName.toUpperCase()}</Text>
            <Text style={[styles.workoutTitle, { color: character.accentColor }]}>
              {workout.workoutName}
            </Text>
            <View style={styles.headerMeta}>
              <View style={[styles.intensityBadge, { backgroundColor: getIntensityColor(workout.intensity) }]}>
                <Text style={styles.intensityText}>{workout.intensity}</Text>
              </View>
              <Text style={styles.durationText}>⏱️ {workout.estimatedDuration}</Text>
            </View>
          </View>
        </View>

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressLabel}>PROGRESS</Text>
            <Text style={styles.progressPercent}>{Math.round(progress)}%</Text>
          </View>
          <View style={styles.progressBar}>
            <View 
              style={[
                styles.progressFill, 
                { 
                  width: `${progress}%`,
                  backgroundColor: allCompleted ? '#4CAF50' : character.accentColor 
                }
              ]} 
            />
          </View>
          <Text style={styles.progressCount}>
            {completedExercises.size} of {workout.exercises.length} exercises completed
          </Text>
        </View>

        {/* Motivational Quote */}
        <View style={styles.quoteContainer}>
          <Text style={styles.quoteText}>"{workout.motivationalQuote}"</Text>
        </View>

        {/* Exercise List */}
        <ScrollView 
          style={styles.exerciseList}
          contentContainerStyle={styles.exerciseListContent}
          showsVerticalScrollIndicator={false}
        >
          {workout.exercises.map((exercise, index) => (
            <ExerciseCard
              key={index}
              exercise={exercise}
              index={index}
              character={character}
              isCompleted={completedExercises.has(index)}
              onToggle={() => toggleExercise(index)}
            />
          ))}

          {/* Completion Message */}
          {allCompleted && (
            <View style={styles.completionContainer}>
              <LinearGradient
                colors={[character.primaryColor + '40', character.secondaryColor + '60']}
                style={styles.completionGradient}
              >
                <Text style={styles.completionEmoji}>🏆</Text>
                <Text style={[styles.completionTitle, { color: character.accentColor }]}>
                  WORKOUT COMPLETE!
                </Text>
                <Text style={styles.completionText}>
                  You've completed today's training session.
                </Text>
                <Text style={styles.completionQuote}>
                  {character.name} would be proud.
                </Text>
              </LinearGradient>
            </View>
          )}

          {/* Tips Section */}
          <View style={styles.tipsContainer}>
            <Text style={styles.tipsTitle}>💡 Training Tips</Text>
            <View style={styles.tipsList}>
              <Text style={styles.tipItem}>• Warm up for 5-10 minutes before starting</Text>
              <Text style={styles.tipItem}>• Rest 60-90 seconds between sets</Text>
              <Text style={styles.tipItem}>• Focus on form over speed</Text>
              <Text style={styles.tipItem}>• Stay hydrated throughout</Text>
              <Text style={styles.tipItem}>• Cool down and stretch after completing</Text>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
  backButton: {
    marginBottom: 15,
  },
  backText: {
    fontSize: 16,
    fontWeight: '600',
  },
  headerContent: {
    alignItems: 'center',
  },
  dayLabel: {
    fontSize: 12,
    color: '#666',
    letterSpacing: 4,
    marginBottom: 5,
  },
  workoutTitle: {
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: 2,
    textAlign: 'center',
  },
  headerMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    gap: 15,
  },
  intensityBadge: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 15,
  },
  intensityText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#fff',
    letterSpacing: 1,
  },
  durationText: {
    fontSize: 14,
    color: '#888',
  },
  progressContainer: {
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  progressLabel: {
    fontSize: 12,
    color: '#666',
    letterSpacing: 2,
  },
  progressPercent: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '700',
  },
  progressBar: {
    height: 8,
    backgroundColor: '#222',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  progressCount: {
    fontSize: 12,
    color: '#666',
    marginTop: 6,
    textAlign: 'center',
  },
  quoteContainer: {
    paddingHorizontal: 30,
    marginBottom: 15,
  },
  quoteText: {
    fontSize: 14,
    color: '#888',
    fontStyle: 'italic',
    textAlign: 'center',
    lineHeight: 22,
  },
  exerciseList: {
    flex: 1,
  },
  exerciseListContent: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  exerciseCard: {
    marginBottom: 12,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#151520',
    borderWidth: 1,
    borderColor: '#252535',
  },
  completedCard: {
    borderColor: '#2d5a2d',
  },
  exerciseGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  exerciseNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  numberText: {
    fontSize: 16,
    fontWeight: '800',
  },
  exerciseInfo: {
    flex: 1,
  },
  exerciseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  exerciseIcon: {
    fontSize: 20,
    marginRight: 10,
  },
  exerciseTitleContainer: {
    flex: 1,
  },
  exerciseName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  exerciseCategory: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  repsContainer: {
    marginTop: 8,
  },
  repsText: {
    fontSize: 18,
    fontWeight: '800',
    letterSpacing: 1,
  },
  descriptionContainer: {
    marginTop: 12,
  },
  descriptionLine: {
    height: 2,
    width: 30,
    marginBottom: 8,
    borderRadius: 1,
  },
  descriptionText: {
    fontSize: 13,
    color: '#999',
    lineHeight: 20,
  },
  completeButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    marginLeft: 10,
  },
  completeIcon: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
  },
  completionContainer: {
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 20,
    overflow: 'hidden',
  },
  completionGradient: {
    padding: 30,
    alignItems: 'center',
  },
  completionEmoji: {
    fontSize: 50,
    marginBottom: 15,
  },
  completionTitle: {
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: 3,
    marginBottom: 10,
  },
  completionText: {
    fontSize: 16,
    color: '#aaa',
    textAlign: 'center',
  },
  completionQuote: {
    fontSize: 14,
    color: '#888',
    fontStyle: 'italic',
    marginTop: 10,
  },
  tipsContainer: {
    backgroundColor: '#151520',
    borderRadius: 16,
    padding: 20,
    marginTop: 10,
  },
  tipsTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 15,
  },
  tipsList: {
    gap: 8,
  },
  tipItem: {
    fontSize: 14,
    color: '#888',
    lineHeight: 20,
  },
});
