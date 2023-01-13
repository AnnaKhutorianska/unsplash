import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Button,
} from "react-native";
import Constants from "expo-constants";
import { DataTable } from "react-native-paper";
import { SCREENS } from "../constants/screens";

const investmentProjects = [
  {
    name: "Mainston",
    id: 1,
    profit: [
      {
        id: 1,
        cases: 20,
        money: 26000,
        probability: 0.3,
      },
      {
        id: 2,
        cases: 30,
        money: 30000,
        probability: 0.5,
      },
      {
        id: 3,
        cases: 10,
        money: 20000,
        probability: 0.2,
      },
    ],
  },
  {
    name: "Boodl",
    id: 2,
    profit: [
      {
        id: 1,
        cases: 30,
        money: 35000,
        probability: 0.5,
      },
      {
        id: 2,
        cases: 20,
        money: 25000,
        probability: 0.3,
      },
      {
        id: 3,
        cases: 10,
        money: 15000,
        probability: 0.2,
      },
    ],
  },
];

const { width } = Dimensions.get("window");

export const Investment = ({ navigation }) => {
  const [projects, setProjects] = useState(investmentProjects);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [isShownResult, setIsShownResult] = useState(false);
  const [comparisonRes, setComparisonRes] = useState([]);
  const [isAllowedToCompare, setIsAllowedToCompare] = useState(false)

  const countBestProfit = () => {
    const filteredProjects = projects.filter((project) =>
      selectedBrands.includes(project.id)
    );

    const meanExpectedValue = filteredProjects.map((project) => {
      return {
        ...project,
        mean: project.profit.reduce((sum, count) => {
          sum += count.money * count.probability;
          return sum;
        }, 0),
      };
    });

    const levelOfRisk = filteredProjects.map((project, index) => {
      const count = project.profit.reduce((sum, profitItem) => {
        sum +=
          Math.pow(profitItem.money - meanExpectedValue[index].mean, 2) *
          profitItem.probability;
        return sum;
      }, 0);

      return { ...project, risk: Math.sqrt(count) };
    });

    const variationCoefficient = filteredProjects.map((project, index) => ({
      ...project,
      variation: levelOfRisk[index].risk / meanExpectedValue[index].mean,
    }));

    return [meanExpectedValue, levelOfRisk, variationCoefficient];
  };

  const handleClickComparison = () => {
    if(selectedBrands.length >= 2) {
      setIsShownResult(true);
      setComparisonRes(countBestProfit());
      setIsAllowedToCompare(false)
      return;
    }
 
    setIsAllowedToCompare(true)
  };

  const renderBrands = ({ item, index }) => {
    const { name, id, profit } = item;
    const isSelected = selectedBrands.filter((i) => i === id).length > 0;

    return (
      <TouchableOpacity
        onPress={() => {
          if (isSelected) {
            setSelectedBrands((prev) => prev.filter((i) => i !== id));
          } else {
            setSelectedBrands((prev) => [...prev, id]);
          }
        }}
        style={[styles.item, isSelected && { backgroundColor: "#eaf4f4" }]}
      >
        <Text>{name}</Text>
        <DataTable style={styles.tableContainer}>
          <DataTable.Header style={styles.tableHeader}>
            <DataTable.Title>Сase</DataTable.Title>
            <DataTable.Title>Profit</DataTable.Title>
          </DataTable.Header>
          {profit.map((profitItem) => (
            <DataTable.Row key={profitItem.id}>
              <DataTable.Cell>{profitItem.cases}</DataTable.Cell>
              <DataTable.Cell>{profitItem.money}</DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {!isShownResult && (
        <Text style={styles.select}>Select projects to compare</Text>
      )}
      {!isShownResult && (
        <FlatList
          style={styles.list}
          data={projects}
          renderItem={renderBrands}
          numColumns={1}
          scrollEnabled={false}
        />
      )}
      {isAllowedToCompare && <Text>Projects should be selected</Text>}
      {!isShownResult && (
        <Button title="Compare" onPress={() => handleClickComparison()} />
      )}
      {isShownResult && (
        <View>
          <Text>Average expected value of profit on projects</Text>
          <Text>
            {comparisonRes[0].map((averageRes) => (
              <Text>
                {averageRes.name} - {averageRes.mean}
              </Text>
            ))}
          </Text>
          <Text>Level of risk</Text>
          <Text>
            {comparisonRes[1].map((averageRes) => (
              <Text>
                {averageRes.name} - {Math.round(averageRes.risk)}
              </Text>
            ))}
          </Text>
          <Text>Coefficient of variation</Text>
          <Text>
            {comparisonRes[2].map((averageRes) => (
              <Text>
                {averageRes.name} - {averageRes.variation}
              </Text>
            ))}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,

    backgroundColor: "#f0efeb",

    padding: 8,
    alignItems: "center",
  },
  select: {
    alignSelf: "flex-start",
  },
  list: {
    flexGrow: 0,
  },
  item: {
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #adb5bd",
    margin: 2,
    minWidth: 250,
    // minHeight: 40,
  },

  tableContainer: {
    padding: 15,
  },

  tableHeader: {
    backgroundColor: "#dee2e6",
    color: "black",
  },
});
