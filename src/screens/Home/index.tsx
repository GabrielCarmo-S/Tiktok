import React, { useEffect, useState } from 'react';
import { Text, View, FlatList, Dimensions } from 'react-native';
import Post from '../../components/Post';
import { API, graphqlOperation } from 'aws-amplify';

import { listPosts } from '../../graphql/queries';

const Home = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await API.graphql(graphqlOperation(listPosts));
        setPosts(response.data.listPosts.items);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPost();
  },[]);
  
  return (
    <View>
      <FlatList 
        data={posts}
        renderItem={({item}) => <Post post={item}/>}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height - 50}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
      />
    </View>
  );
};

export default Home;
