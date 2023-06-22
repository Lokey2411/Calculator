import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import CalculateButton from "./Calculate";

const line = [
	[1, 2, 3, "+", "-"],
	[4, 5, 6, "*", "/"],
	[7, 8, 9, 0, "="],
];

const Line = ({ item, onPressButton }) => {
	return (
		<View style={styles.line}>
			<CalculateButton
				onPressButton={onPressButton}
				item={item[0]}
			/>
			<CalculateButton
				onPressButton={onPressButton}
				item={item[1]}
			/>
			<CalculateButton
				onPressButton={onPressButton}
				item={item[2]}
			/>
			<CalculateButton
				onPressButton={onPressButton}
				item={item[3]}
			/>
			<CalculateButton
				onPressButton={onPressButton}
				item={item[4]}
			/>
		</View>
	);
};

const CalculateTable = ({ onPressButton }) => {
	return (
		<View style={styles.container}>
			<Line
				item={line[0]}
				onPressButton={onPressButton}
			/>
			<Line
				item={line[1]}
				onPressButton={onPressButton}
			/>
			<Line
				item={line[2]}
				onPressButton={onPressButton}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
	line: {
		flexDirection: "row",
	},
});

export default CalculateTable;
