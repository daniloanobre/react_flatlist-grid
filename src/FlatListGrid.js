import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";

class FlatListGrid extends React.Component {
  state = {
    data: [
      { id: "00", name: "Relâmpago McQueen" },
      { id: "01", name: "Agente Tom Mate" },
      { id: "02", name: "Danlo Assis" },
      { id: "03", name: "Fernando Hugo" },
      { id: "04", name: "Doc Hudson" },
      { id: "05", name: "Denise Nobre" },
      { id: "06", name: "Cruz Ramirez" }
    ]
  };

  render() {
    const columns = 2;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={createRows(this.state.data, columns)}
          keyExtractor={item => item.id}
          numColumns={columns}
          renderItem={({ item }) => {
            if (item.empty) {
              return <View style={[styles.item, styles.itemEmpty]} />;
            }
            return (
              <View style={styles.item}>
                <Text style={styles.text}>{item.name}</Text>
              </View>
            );
          }}
        />
      </SafeAreaView>
    );
  }
}

createRows = (data, columns) => {
    const rows = Math.floor(data.length / columns);
    let lastRowElements = data.length - rows * columns;

    while (lastRowElements !== columns) {
      data.push({
        id: `empty-${lastRowElements}`,
        name: `empty-${lastRowElements}`,
        empty: true
      });
      lastRowElements += 1;
    }
    return data;
  }

const styles = StyleSheet.create({
  container: {
    paddingTop: 21
  },
  item: {
    alignItems: 'center',
    backgroundColor: '#B09191',
    flexGrow: 1,
    margin: 4,
    padding: 20,
    flexBasis: 0
  },
  itemEmpty: {
    backgroundColor: "transparent"
  },
  text: {
    color: '#333333'
  }
});
export default FlatListGrid;