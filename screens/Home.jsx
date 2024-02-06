import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Fontisto, Ionicons } from '@expo/vector-icons'
import styles from './home.style'
import { Welcome } from '../components'
import Carousel from '../components/home/Carousel'

const Home = () => {
  return (
    <SafeAreaView>

      <View style={styles.appBarWrapper}>
        <View style={styles.appBar}>

          <Ionicons name='location-outline' size={24} /> 

          <Text style={styles.location}>Trabzon</Text>

          <View style={{ alignItems: 'flex-end' }}>

            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>5</Text>
            </View>

            <TouchableOpacity>
              <Fontisto name='shopping-bag' size={24} />
            </TouchableOpacity>
            
          </View>


        </View>
      </View>

      <ScrollView>
        <Welcome />
        <Carousel />
      </ScrollView>

    </SafeAreaView>
  )
}

export default Home

