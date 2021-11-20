import React,{useState} from 'react'
import { View, Text, TouchableOpacity,Image,StyleSheet } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'


export const bottomTabsIcons=[
    {
        name:'Home',
        active:'https://img.icons8.com/fluency-systems-filled/144/ffffff/home',
        inactive:
        'https://img.icons8.com/fluency-systems-filled/48/ffffff/home'
    },
    {
        name:'Search',
        active:'https://img.icons8.com/fluency-systems-filled/144/ffffff/search',
        inactive:
        'https://img.icons8.com/2266EE/search'
    },
    {
        name:'Reels',
        active:'https://img.icons8.com/fluency-systems-filled/144/ffffff/home',
        inactive:
        'https://img.icons8.com/fluency-systems-filled/48/ffffff/home'
    },
    {
        name:'Shop',
        active:'https://img.icons8.com/fluency-systems-filled/144/ffffff/home',
        inactive:
        'https://img.icons8.com/fluency-systems-filled/48/ffffff/home'
    },
]


const BottomTabs = ({icons}) => {
    const [activeTab , setActiveTab] = useState('Home')

    const Icon = ({icon})=>(
        <TouchableOpacity onPress={()=> setActiveTab(icon.name)}>
            <Image source={{uri: icon.inactive}} style={styles.icon}/>
        </TouchableOpacity>
    )
   return(
       <View style={styles.container}>
           {icons.map((icon, index)=>(
               <Icon key={index} icon={Icon} />
           ))}
       </View>
   )
}
const styles= StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:'space-around'
    },
    icon:{
        width:300,
        height:90,
    }
})
export default BottomTabs
