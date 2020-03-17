import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity
} from "react-native";

// components
import Header from "../components/Header";
import StyledInput from "../components/StyledInput";
import Title from "../components/Title";

// themes
import { CommonStyles } from "../themes";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={[CommonStyles.container, { paddingHorizontal: 30 }]}>
          <Header navigation={this.props.navigation} showBackButton={true} />
          <Title
            title={"Üye ol!"}
            content={
              "Essenjet’e üye olarak size özel kampanyalardan faydalanabilir, güvenli alışverişin keyfini çıkarabilirsiniz."
            }
          />
          <View style={{ marginTop: 46 }}>
            <StyledInput
              onChangeText={text => this.setState({ email: text })}
              placeholder="E-Posta Adresiniz"
              keyboardType="email-address"
            />
            <StyledInput
              onChangeText={text => this.setState({ password: text })}
              placeholder="Şifreniz"
              secureTextEntry
            />
          </View>
          <TouchableOpacity
            style={CommonStyles.fullButton}
            onPress={() => alert(JSON.stringify(this.state))}
          >
            <Text style={CommonStyles.fullButtonText}>Üye Ol</Text>
          </TouchableOpacity>

          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>
              Bir hesabınız yok mu?
              <Text
                onPress={() => this.props.navigation.navigate("login")}
                style={{ fontWeight: "bold" }}
              >
                {" "}
                Giriş Yap!
              </Text>
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  footerContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20
  },
  footerText: {
    fontSize: 15,
    letterSpacing: -0.24,
    color: Colors.extraLightBlack
  }
});
