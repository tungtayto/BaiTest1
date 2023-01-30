import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button, TextInput } from 'react-native';
import ProductList from './src/screens/ProductList';
import { useState } from 'react';

export default function App() {
  const [status , setStatus] = useState(false);
  const list = [
    {id: 1, name: 'tung', moTa: 'deptrai'},
    {id: 2, name: 'hao', moTa: 'xautrai'},
    {id: 3, name: 'trung', moTa: 'xinhtrai'},
  ]

  return (
    <ScrollView>
      <>
      <View style={styles.container}>
      <Text style={styles.fontText}>Ho Ten: Kieu Thanh Tung</Text>
      <Text style={styles.fontText}>MSV: PH27675</Text>
      <Button
        title='Thêm mới'
        onPress={() => setStatus(true)}/>
        {
          status
          ?  <> 
                <TextInput
                  style={styles.input}
                  placeholder="Họ tên"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Mô tả"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Link ảnh"
                />
                <Button
                  style={styles.nutbam}
                  title='Hủy'
                  onPress={() => setStatus(false)}
                />
                <Button
                  style={styles.nutbam}
                  title='Lưu'
                  // onPress={() => }
                />
              </>
          :null
        }
        <ProductList
        data = {list}/>
    </View>
      </>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    marginTop: 50,
    marginLeft: 10,
    
  },
  fontText: {
    fontSize: 20,
  },
  newGiaoDien: {
    backgroundColor: '#fff',
    width: 100,
    height: 300,
    fontSize: 20,
  },
  input: {
    height: 40,
    width: 300,
    marginLeft: 12,
    margin:5,
    borderWidth: 1,
    padding: 10,
  },
});
