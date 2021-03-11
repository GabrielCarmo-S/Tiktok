import React from 'react';
import { Text, View } from 'react-native';
import Post from '../../components/Post';

const post1 = {
  id: 'p1',
  videoUri: 'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4',
  user: {
    id: 'u1',
    username: '@gabrielcarmo-s',
    imageUri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu8GrR4JDZhoglUgxri3V6xJFfm60u95UEcA&usqp=CAU'
  },
  description: 'kkkkkkkkkkkkkkkkkkkkkk',
  songName: 'NF - The Search',
  songImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu8GrR4JDZhoglUgxri3V6xJFfm60u95UEcA&usqp=CAU',
  likes: 153,
  comments: 12,
  shares: 44
};

const Home = () => {
  return (
    <View>
      <Post post={post1}/>
    </View>
  );
};

export default Home;
