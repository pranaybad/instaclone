import React from 'react'
import { View, Text,Image,StyleSheet, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'

const postFooterIcon = [
    {
        name:'Like',
        imageUrl:'https://img.icons8.com/fluency-systems-regular/60/ffffff/like',
        likedImageUrl:'https://img.icons8.com/ios-glyphs/90/fa314a/like'
    },
    {
        name:'Comment',
        imageUrl:'https://img.icons8.com/material-outlined/60/ffffff/speech',
        
    },
    {
        name:'Share',
        imageUrl:'https://img.icons8.com/fluency-systems-regular/60/ffffff/paper-plane',
        // imageUrl:'https://icons8.com/icon/z7KxBHO2PxRR/paper-plane'
        
    },
    {
        name:'Save',
        imageUrl:'https://img.icons8.com/fluency-systems-regular/60/ffffff/save',
        
    },
]

const Post = ({post}) => {
    return (
        <View style={{marginBottom:30}}>
            <Divider width={1} orientation="vertical" />
            <PostHeader post ={post} />
            <PostImage post = {post}/>
            <View style={{marginHorizontal:15,marginTop:10}}>
            <PostFooter />
            <Likes post={post} />
            <Caption post={post} />
            <CommentSecttion post={post} />
            <Comments post={post} />
            </View>
           
        </View>
    )
}

const PostHeader = ({post})=>(
    <View style={{
    flexDirection:"row",
    justifyContent:"space-between",
    margin:5,
    alignItems:"center"
    }}>
        <View style={{
        flexDirection:"row",
        alignItems:"center"}}>
            <Image source= {{uri: post.profile_picture}} style={styles.story} />
            <Text style={{
            color:"white",
             marginLeft:5,
             fontWeight:"700"
             }}>{post.user}</Text>
        </View>
        <View>
            <Text style={{color:"white",fontWeight:"900"}}>...</Text>
        </View>
    </View>
)

const PostImage = ({post}) =>(
 <View 
    style={{
    width:'100%',
    height:400,
    }}
    >

   
    <Image
     source={{uri: post.imageUrl}} 
     style={{height:"100%", resizeMode:"cover"}}
    />
 </View>

)

const PostFooter = ()=>(

    <View style={{flexDirection:'row'}}>
    <View style={styles.leftFooterIconContainer}>
    <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcon[0].imageUrl}/>
    <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcon[1].imageUrl}/>
    <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcon[2].imageUrl}/>
    </View>

    <View style={{flex:1,alignItems:'flex-end'}}>
        <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcon[3].imageUrl}/>
    </View>
    </View>

)

const Caption = ({post})=>(
   <View style={{marginTop:5}}>
        <Text style={{color:"white"}}>
       <Text style={{fontWeight:"600"}}> {post.user}</Text>
       <Text> {post.caption}</Text>
    </Text>
   </View>
)

const CommentSecttion=({post})=>(
    <View style={{marginTop:5}}>
        {!!post.comments.length && (
        <Text style={{color:"gray"}}>
        View{post.comments.length > 1 ? ' all' : ''} {post.comments.length}{' '}
        {post.comments.length > 1 
        ? 'comments' : 'comment'}</Text>
        )}
    </View>
)

const Comments = ({post})=>(
    <>
    {post.comments.map((comment,index)=>(
        <View key={index} style={{flexDirection:"row",marginTop:5}}>
            <Text style={{color:"white"}}>
                <Text style={{fontWeight:"600"}}>{comment.user}</Text>{' '}
                {comment.comment}
            </Text>
        </View>
    ))}
     </>
)

const Icon = ({imgStyle,imgUrl})=>(
    <TouchableOpacity>
        <Image style={imgStyle} source={{uri:imgUrl}}/>
    </TouchableOpacity>
)

const Likes = ({post})=>(
   <View style={{flexDirection:"row",marginTop:4}}>
        <Text style={{color:"white",fontWeight:'600'}}>
            {post.likes} likes</Text>
   </View>
)

const styles = StyleSheet.create({
    story:{
        width:35,
        height:35,
        borderRadius:50,
        marginLeft:6,
        borderWidth:1.6,
        borderColor:"#ff8502"
    },

    footerIcon:{
        width:33,
        height:33,
    },
    leftFooterIconContainer:{
        flexDirection:"row",
        width:"32%",
        justifyContent:"space-between",
    }
})

export default Post
