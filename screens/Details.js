import axios from "axios";
import React, { Component } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { Card } from "react-native-elements";
export default class DetailsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {},
      imagePath: "",
      url: `http://localhost:5000/planet?name=${this.props.navigation.getParam("star_name")}`,
    };
  }

  componentDidMount() {
    this.getDetails();
  }
  getDetails = () => {
    const { url } = this.state;
    axios
      .get(url)
      .then((response) => {
        this.setDetails(response.data.data);
      })
      .catch((error) => {
        Alert.alert(error.message);
      });
  };

  setDetails = (planetDetails) => {
    this.setState({
      details: planetDetails,
    });
  };

  render() {
    const { details } = this.state;
    if (details.specifications) {
      return (
        <View style={styles.container}>
          <Card title={details.Star_name}>
            <View>
              <Text style={styles.cardItem}>{`Name : ${details.Star_name}`}</Text>
              <Text style={styles.cardItem}>{`Gravity : ${details.Gravity}`}</Text>
              <Text style={styles.cardItem}>{`Mass : ${details.Mass}`}</Text>
              <Text style={styles.cardItem}>{`Radius : ${details.Radius}`}</Text>
            </View>
            <View style={[styles.cardItem, { flexDirection: "column" }]}>
              <Text>{details.specifications ? `Specifications : ` : ""}</Text>
              {details.specifications.map((item, index) => (
                <Text key={index.toString()} style={{ marginLeft: 50 }}>
                  {item}
                </Text>
              ))}
            </View>
          </Card>
        </View>
      );
    }
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardItem: {
    marginBottom: 10,
  },
});
