import {View, Text} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Card} from 'react-native-paper';
import {ScrollView} from 'react-native';

export default function Article() {
  return (
    <View style={{marginLeft: 18, marginTop: 20}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
        }}>
        <Text style={{fontSize: 18, color: 'black'}}>Article</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 5,
          }}>
          <Text style={{fontSize: 16, color: '#FF7F33', marginBottom: 2}}>
            lihat semua
          </Text>
          <Ionicons name="arrow-forward" size={18} color={'#FF7F33'} />
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{paddingVertical: 10, marginTop: 10}}>
        {Array.from(Array(5)).map((_, index) => (
          <Card
            key={index}
            style={{width: 230, marginRight: 15, overflow: 'hidden'}}>
            <Card.Cover
              style={{height: 150, objectFit: 'cover', borderRadius: 0}}
              source={{
                uri: 'https://sman1sleman.sch.id/wp-content/uploads/2023/05/KAMPANYE-PEMILAHAN-SAMPAH_STICKER-1080x640.png',
              }}
            />
            <Card.Content>
              <Text
                style={{
                  marginTop: 10,
                  fontWeight: 'bold',
                  fontSize: 18,
                  color: 'black',
                }}>
                5 tips to clean your home easily
              </Text>
              <Text style={{marginTop: 10, color: 'black'}}>
                This is description for card article, you can edit it as you
                want
              </Text>
            </Card.Content>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}
