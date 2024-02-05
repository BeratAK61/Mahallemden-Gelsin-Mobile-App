import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import styles from './welcome.style'
import { COLORS, SIZES } from '../../constants'
import { Feather,Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'



const Welcome = () => {

    const navigation  = useNavigation();

  return (
    <View>
        <View style={styles.container}>
         <Text style={styles.welcomeText(COLORS.black,SIZES.xSmall)}> 
            Evertything You Are Looking For
         </Text> 
         <Text style={styles.welcomeText(COLORS.primary,0)}> 
         Luxurious Furniture
         </Text> 
        </View>

        <View style={styles.searchContainer}>
            <TouchableOpacity >              
                {/* <Ionicons name='location-outline' size={24} style={styles.searchIcon} />  */}
                <Feather name='search' size={24} style={styles.searchIcon} />
            </TouchableOpacity>
            <View style={styles.searchWrapper}>
                <TextInput 
                    style={styles.searchInput}
                    value=""
                    onPressIn={()=>{
                        navigation.navigate("Search");
                    }}
                    placeholder='Ne aramıştınız?'
                />
            </View>
            <View>
                 <TouchableOpacity style={styles.searchBtn}>
                    <Ionicons name='camera-outline' size={SIZES.xLarge} color={COLORS.black}/>
                 </TouchableOpacity>            
            </View>
        </View>

         
 
 
    </View>
    
  )
}

export default Welcome