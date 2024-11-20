import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useRouter } from 'expo-router';

export default function AddListingDetails() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backArrow}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Add Listing Details</Text>
      </View>

      {/* Form Content */}
      <View style={styles.form}>
        {/* Title */}
        <Text style={styles.label}>Listing Title</Text>
        <TextInput style={styles.input} placeholder="Enter title" />

        {/* Description */}
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Enter description"
          multiline
          numberOfLines={4}
        />

        {/* Publish Button */}
        <TouchableOpacity
          style={styles.publishButton}
          onPress={() => console.log('Publish Listing')}
        >
          <Text style={styles.publishText}>Publish</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backArrow: {
    fontSize: 24,
    marginRight: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#159636',
  },
  form: {
    flex: 1,
    marginTop: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  publishButton: {
    backgroundColor: '#159636',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  publishText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});