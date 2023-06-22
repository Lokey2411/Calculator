import { Text, View, TouchableOpacity } from "react-native";

const CalculateButton = ({ item, onPressButton }) => {
  return (
    <TouchableOpacity
      style={{
        width: "15%",
        height: 50,
        backgroundColor: "gray",
        margin: 1,
      }}
      onPress={() => {
        onPressButton(item);
      }}
    >
      <Text
        style={{
          textAlign: "center",
          width: "100%",
          margin: "auto",
          lineHeight: 50,
        }}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
};
export default CalculateButton;
