import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { generateMonthWorkouts, generateDailyWorkout } from '../data/workouts';

const { width } = Dimensions.get('window');
const CELL_SIZE = (width - 60) / 7;

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function CalendarScreen({ route, navigation }) {
  const { character } = route.params;
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const monthWorkouts = useMemo(() => {
    return generateMonthWorkouts(character.id, currentYear, currentMonth);
  }, [character.id, currentYear, currentMonth]);

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const navigateMonth = (direction) => {
    if (direction === 'prev') {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    }
  };

  const isToday = (day) => {
    return (
      day === today.getDate() &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear()
    );
  };

  const handleDayPress = (day) => {
    const selectedDate = new Date(currentYear, currentMonth, day);
    const workout = generateDailyWorkout(character.id, selectedDate);
    navigation.navigate('Workout', { character, workout, date: selectedDate.toISOString() });
  };

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

  const renderCalendarDays = () => {
    const cells = [];
    
    // Empty cells for days before the first day of month
    for (let i = 0; i < firstDayOfMonth; i++) {
      cells.push(<View key={`empty-${i}`} style={styles.dayCell} />);
    }

    // Day cells
    for (let day = 1; day <= daysInMonth; day++) {
      const workout = monthWorkouts[day - 1];
      const dayIsToday = isToday(day);
      const intensityColor = getIntensityColor(workout?.intensity);

      cells.push(
        <TouchableOpacity
          key={day}
          style={[
            styles.dayCell,
            dayIsToday && [styles.todayCell, { borderColor: character.accentColor }],
          ]}
          onPress={() => handleDayPress(day)}
        >
          <Text style={[styles.dayNumber, dayIsToday && { color: character.accentColor }]}>
            {day}
          </Text>
          <View style={[styles.intensityDot, { backgroundColor: intensityColor }]} />
        </TouchableOpacity>
      );
    }

    return cells;
  };

  // Today's workout preview
  const todayWorkout = useMemo(() => {
    return generateDailyWorkout(character.id, today);
  }, [character.id]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[character.secondaryColor, '#0a0a0f', '#0a0a0f']}
        style={styles.background}
      >
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Text style={[styles.backText, { color: character.accentColor }]}>← Back</Text>
          </TouchableOpacity>
          <View style={styles.headerInfo}>
            <Text style={styles.characterLabel}>{character.icon} {character.name}</Text>
            <Text style={[styles.headerTitle, { color: character.accentColor }]}>
              TRAINING CALENDAR
            </Text>
          </View>
        </View>

        <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
          {/* Month Navigation */}
          <View style={styles.monthNav}>
            <TouchableOpacity onPress={() => navigateMonth('prev')} style={styles.navButton}>
              <Text style={[styles.navArrow, { color: character.accentColor }]}>‹</Text>
            </TouchableOpacity>
            <View style={styles.monthInfo}>
              <Text style={styles.monthText}>{MONTHS[currentMonth]}</Text>
              <Text style={styles.yearText}>{currentYear}</Text>
            </View>
            <TouchableOpacity onPress={() => navigateMonth('next')} style={styles.navButton}>
              <Text style={[styles.navArrow, { color: character.accentColor }]}>›</Text>
            </TouchableOpacity>
          </View>

          {/* Day Headers */}
          <View style={styles.weekDays}>
            {DAYS.map((day) => (
              <View key={day} style={styles.weekDayCell}>
                <Text style={styles.weekDayText}>{day}</Text>
              </View>
            ))}
          </View>

          {/* Calendar Grid */}
          <View style={styles.calendarGrid}>
            {renderCalendarDays()}
          </View>

          {/* Legend */}
          <View style={styles.legend}>
            <Text style={styles.legendTitle}>Intensity Levels</Text>
            <View style={styles.legendItems}>
              {['Light', 'Moderate', 'Heavy', 'High', 'Intense', 'Maximum'].map((level) => (
                <View key={level} style={styles.legendItem}>
                  <View style={[styles.legendDot, { backgroundColor: getIntensityColor(level) }]} />
                  <Text style={styles.legendText}>{level}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Today's Workout Preview */}
          <View style={styles.todayPreview}>
            <LinearGradient
              colors={[character.primaryColor + '40', character.secondaryColor + '60']}
              style={styles.previewGradient}
            >
              <View style={styles.previewHeader}>
                <Text style={styles.previewLabel}>TODAY'S MISSION</Text>
                <View style={[styles.intensityBadge, { backgroundColor: getIntensityColor(todayWorkout.intensity) }]}>
                  <Text style={styles.intensityText}>{todayWorkout.intensity}</Text>
                </View>
              </View>
              <Text style={[styles.previewTitle, { color: character.accentColor }]}>
                {todayWorkout.workoutName}
              </Text>
              <Text style={styles.previewSubtitle}>
                {todayWorkout.dayName} • {todayWorkout.estimatedDuration}
              </Text>
              <Text style={styles.previewExercises}>
                {todayWorkout.exercises.length} exercises ready
              </Text>

              <TouchableOpacity
                style={[styles.startButton, { backgroundColor: character.accentColor }]}
                onPress={() => handleDayPress(today.getDate())}
              >
                <Text style={styles.startButtonText}>START WORKOUT →</Text>
              </TouchableOpacity>

              <Text style={styles.quote}>"{todayWorkout.motivationalQuote}"</Text>
            </LinearGradient>
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
    marginBottom: 10,
  },
  backText: {
    fontSize: 16,
    fontWeight: '600',
  },
  headerInfo: {
    alignItems: 'center',
  },
  characterLabel: {
    fontSize: 14,
    color: '#888',
    letterSpacing: 2,
    marginBottom: 5,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '800',
    letterSpacing: 4,
  },
  scrollView: {
    flex: 1,
  },
  monthNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  navButton: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navArrow: {
    fontSize: 40,
    fontWeight: '300',
  },
  monthInfo: {
    alignItems: 'center',
  },
  monthText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    letterSpacing: 2,
  },
  yearText: {
    fontSize: 14,
    color: '#666',
    letterSpacing: 3,
  },
  weekDays: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  weekDayCell: {
    width: CELL_SIZE,
    alignItems: 'center',
  },
  weekDayText: {
    fontSize: 12,
    color: '#666',
    fontWeight: '600',
    letterSpacing: 1,
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
  },
  dayCell: {
    width: CELL_SIZE,
    height: CELL_SIZE,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  todayCell: {
    borderWidth: 2,
    borderRadius: CELL_SIZE / 2,
  },
  dayNumber: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  intensityDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginTop: 4,
  },
  legend: {
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 15,
  },
  legendTitle: {
    fontSize: 12,
    color: '#666',
    letterSpacing: 2,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  legendItems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    marginBottom: 8,
  },
  legendDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 6,
  },
  legendText: {
    fontSize: 12,
    color: '#888',
  },
  todayPreview: {
    margin: 20,
    borderRadius: 20,
    overflow: 'hidden',
  },
  previewGradient: {
    padding: 25,
  },
  previewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  previewLabel: {
    fontSize: 12,
    color: '#888',
    letterSpacing: 3,
  },
  intensityBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  intensityText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#fff',
    letterSpacing: 1,
  },
  previewTitle: {
    fontSize: 26,
    fontWeight: '800',
    letterSpacing: 1,
  },
  previewSubtitle: {
    fontSize: 14,
    color: '#aaa',
    marginTop: 5,
  },
  previewExercises: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  startButton: {
    marginTop: 20,
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  startButtonText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#0a0a0f',
    letterSpacing: 2,
  },
  quote: {
    fontSize: 14,
    color: '#888',
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 20,
    lineHeight: 22,
  },
});
