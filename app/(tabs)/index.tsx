import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const quickActions = [
    { icon: 'search', title: 'Find Hunt', route: '/(tabs)/hunts' },
    { icon: 'users', title: 'Join Team', route: '/(tabs)/teams' },
    { icon: 'map-marker-alt', title: 'Nearby', route: '/(tabs)/hunts' },
    { icon: 'star', title: 'Featured', route: '/(tabs)/hunts' },
  ];

  const stats = [
    { icon: 'trophy', title: 'Hunts Completed', value: '5' },
    { icon: 'users', title: 'Teams Joined', value: '3' },
    { icon: 'star', title: 'Rating', value: '4.8' },
    { icon: 'medal', title: 'Achievements', value: '12' },
  ];

  const renderQuickAction = ({ icon, title, route }: { 
    icon: string; 
    title: string; 
    route: string 
  }) => (
    <Link href={route as any} asChild>
      <TouchableOpacity style={styles.quickAction}>
        <View style={styles.quickActionIcon}>
          <FontAwesome5 name={icon} size={24} color="#f4511e" />
        </View>
        <Text style={styles.quickActionTitle}>{title}</Text>
      </TouchableOpacity>
    </Link>
  );

  const renderStat = ({ icon, title, value }: { icon: string; title: string; value: string }) => (
    <View style={styles.stat}>
      <View style={styles.statIcon}>
        <FontAwesome5 name={icon} size={24} color="#f4511e" />
      </View>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statTitle}>{title}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome}>Welcome to</Text>
        <Text style={styles.appName}>Scaventure</Text>
        <Text style={styles.tagline}>Your Next Adventure Awaits</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.quickActions}>
          {quickActions.map((action, index) => (
            <View key={index} style={styles.quickActionWrapper}>
              {renderQuickAction(action)}
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Stats</Text>
        <View style={styles.stats}>
          {stats.map((stat, index) => (
            <View key={index} style={styles.statWrapper}>
              {renderStat(stat)}
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Hunt</Text>
        <TouchableOpacity style={styles.featuredHunt}>
          <View style={styles.featuredContent}>
            <Text style={styles.featuredTitle}>Provo City Mystery</Text>
            <Text style={styles.featuredDescription}>
              Explore Provo City's hidden gems in this exciting adventure!
            </Text>
            <View style={styles.featuredMeta}>
              <View style={styles.metaItem}>
                <FontAwesome5 name="clock" size={14} color="#666" />
                <Text style={styles.metaText}>45 min</Text>
              </View>
              <View style={styles.metaItem}>
                <FontAwesome5 name="star" size={14} color="#FFC107" />
                <Text style={styles.metaText}>4.5</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 24,
    backgroundColor: '#f4511e',
  },
  welcome: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 8,
  },
  tagline: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  quickActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: -8,
  },
  quickActionWrapper: {
    width: '50%',
    padding: 8,
  },
  quickAction: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  quickActionIcon: {
    marginBottom: 8,
  },
  quickActionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  stats: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: -8,
  },
  statWrapper: {
    width: '50%',
    padding: 8,
  },
  stat: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  statIcon: {
    marginBottom: 8,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  statTitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  featuredHunt: {
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  featuredContent: {
    padding: 16,
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  featuredDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  featuredMeta: {
    flexDirection: 'row',
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  metaText: {
    marginLeft: 4,
    color: '#666',
  },
}); 