import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Animated,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { characters } from '../data/workouts';

const { width, height } = Dimensions.get('window');

const CharacterCard = ({ character, isSelected, onSelect, index }) => {
  const [scaleAnim] = useState(new Animated.Value(1));

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={[
        styles.cardContainer,
        { transform: [{ scale: scaleAnim }] },
        isSelected && styles.selectedCard,
      ]}
    >
      <TouchableOpacity
        onPress={() => onSelect(character)}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={1}
      >
        <LinearGradient
          colors={[character.primaryColor, character.secondaryColor, '#0a0a0f']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.cardGradient}
        >
          {/* Decorative corner accents */}
          <View style={[styles.cornerAccent, styles.topLeft, { borderColor: character.accentColor }]} />
          <View style={[styles.cornerAccent, styles.topRight, { borderColor: character.accentColor }]} />
          <View style={[styles.cornerAccent, styles.bottomLeft, { borderColor: character.accentColor }]} />
          <View style={[styles.cornerAccent, styles.bottomRight, { borderColor: character.accentColor }]} />
          
          {/* Character Icon */}
          <View style={[styles.iconContainer, { backgroundColor: character.secondaryColor + '80' }]}>
            <Text style={styles.characterIcon}>{character.icon}</Text>
          </View>

          {/* Character Info */}
          <Text style={[styles.characterName, { color: character.accentColor }]}>
            {character.name}
          </Text>
          <Text style={styles.characterSubtitle}>{character.subtitle}</Text>
          
          <View style={styles.divider}>
            <View style={[styles.dividerLine, { backgroundColor: character.accentColor }]} />
            <Text style={styles.dividerEmoji}>{character.emoji}</Text>
            <View style={[styles.dividerLine, { backgroundColor: character.accentColor }]} />
          </View>

          <Text style={styles.characterDescription}>{character.description}</Text>

          {/* Selection indicator */}
          {isSelected && (
            <View style={[styles.selectedIndicator, { backgroundColor: character.accentColor }]}>
              <Text style={styles.selectedText}>✓ SELECTED</Text>
            </View>
          )}
        </LinearGradient>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default function CharacterSelectScreen({ navigation }) {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleSelect = (character) => {
    setSelectedCharacter(character);
  };

  const handleContinue = () => {
    if (selectedCharacter) {
      navigation.navigate('Calendar', { character: selectedCharacter });
    }
  };

  const characterList = Object.values(characters);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#0a0a0f', '#1a1a2e', '#0a0a0f']}
        style={styles.background}
      >
        {/* Animated background particles */}
        <View style={styles.particleContainer}>
          {[...Array(20)].map((_, i) => (
            <View
              key={i}
              style={[
                styles.particle,
                {
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  opacity: Math.random() * 0.3 + 0.1,
                  width: Math.random() * 3 + 1,
                  height: Math.random() * 3 + 1,
                },
              ]}
            />
          ))}
        </View>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>HERO WORKOUT</Text>
          <Text style={styles.headerSubtitle}>Choose Your Champion</Text>
          <View style={styles.headerLine} />
        </View>

        {/* Character Cards */}
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {characterList.map((character, index) => (
            <CharacterCard
              key={character.id}
              character={character}
              isSelected={selectedCharacter?.id === character.id}
              onSelect={handleSelect}
              index={index}
            />
          ))}
        </ScrollView>

        {/* Continue Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.continueButton,
              !selectedCharacter && styles.buttonDisabled,
              selectedCharacter && { backgroundColor: selectedCharacter.accentColor },
            ]}
            onPress={handleContinue}
            disabled={!selectedCharacter}
          >
            <LinearGradient
              colors={
                selectedCharacter
                  ? [selectedCharacter.accentColor, selectedCharacter.primaryColor]
                  : ['#333', '#222']
              }
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.buttonGradient}
            >
              <Text style={[
                styles.continueText,
                selectedCharacter && { color: '#0a0a0f' }
              ]}>
                {selectedCharacter ? 'BEGIN TRAINING' : 'SELECT A HERO'}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
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
  particleContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  particle: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: '900',
    color: '#fff',
    letterSpacing: 8,
    textShadowColor: 'rgba(255, 215, 0, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 20,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#888',
    letterSpacing: 4,
    marginTop: 8,
    textTransform: 'uppercase',
  },
  headerLine: {
    width: 60,
    height: 2,
    backgroundColor: '#FFD700',
    marginTop: 15,
    borderRadius: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  cardContainer: {
    marginBottom: 20,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
  },
  selectedCard: {
    transform: [{ scale: 1.02 }],
  },
  cardGradient: {
    padding: 25,
    borderRadius: 20,
    position: 'relative',
    overflow: 'hidden',
  },
  cornerAccent: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderWidth: 2,
  },
  topLeft: {
    top: 10,
    left: 10,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  topRight: {
    top: 10,
    right: 10,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
  },
  bottomLeft: {
    bottom: 10,
    left: 10,
    borderRightWidth: 0,
    borderTopWidth: 0,
  },
  bottomRight: {
    bottom: 10,
    right: 10,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 15,
  },
  characterIcon: {
    fontSize: 40,
  },
  characterName: {
    fontSize: 28,
    fontWeight: '800',
    textAlign: 'center',
    letterSpacing: 2,
  },
  characterSubtitle: {
    fontSize: 14,
    color: '#aaa',
    textAlign: 'center',
    letterSpacing: 3,
    marginTop: 5,
    fontStyle: 'italic',
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 15,
  },
  dividerLine: {
    height: 1,
    width: 50,
    opacity: 0.5,
  },
  dividerEmoji: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  characterDescription: {
    fontSize: 14,
    color: '#ccc',
    textAlign: 'center',
    lineHeight: 22,
  },
  selectedIndicator: {
    position: 'absolute',
    top: 15,
    right: 15,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
  },
  selectedText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#0a0a0f',
    letterSpacing: 1,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    paddingTop: 10,
  },
  continueButton: {
    borderRadius: 30,
    overflow: 'hidden',
  },
  buttonGradient: {
    paddingVertical: 18,
    alignItems: 'center',
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  continueText: {
    fontSize: 16,
    fontWeight: '800',
    color: '#666',
    letterSpacing: 3,
  },
});
