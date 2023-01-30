import { FlatList, Text, View, StyleSheet, Image } from "react-native";
const ProductItem = (props)=>{
    const item = props.item;
    return (
        <>
            <View style={style.allView}>
                <Image source={
                    require('../../../assets/favicon.png')
                }
                style={style.productImage}/>
                <Text style={style.styleText}>Ten: {item.name}</Text>
                <Text style={style.styleText}>Mo ta: {item.moTa}</Text>
            </View>
        </>
    );
}
const ProductList = (props) =>{
    const list = props.data || [];
    return (
        <FlatList
            data={list}
            renderItem={({item}) => <ProductItem item ={item}/>}
            keyExtractor={(item) => item.id}
        />
    );
};
export default ProductList;
const style = StyleSheet.create({
    allView:{
        marginTop:20,
        width:200,
    },
    productImage:{
        width: 50,
        height: 50,
        alignSelf: "flex-start"
    },
    styleText: {
        with: 100,
        fontSize: 17
    }
});