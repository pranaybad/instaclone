import React from 'react'
import { View, Text, SafeAreaView ,StyleSheet, ScrollView} from 'react-native'
import { BottomSheet } from 'react-native-elements/dist/bottomSheet/BottomSheet'
import BottomTabs, { bottomTabsIcons } from '../componets/home/BottomTabs'
import Header from '../componets/home/Header'
import Post from '../componets/home/Post'
import Stories from '../componets/home/Stories'
import { POSTS } from '../data/posts'

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header/>
            <Stories/>
            <ScrollView>
                {POSTS.map((post,index)=>(
                     <Post post={post} key={index} />
                )
                )}
           
            </ScrollView>
            <BottomTabs icons={bottomTabsIcons} />
        </SafeAreaView>
            
        
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: "black",
        flex:1,
    },
})

export default HomeScreen
