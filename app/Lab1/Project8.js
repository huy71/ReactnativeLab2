import React from "react";
import {
  SectionList,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
} from "react-native";

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  name: {
    fontSize: 16,
  },
  separator: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: 1,
  },
  sectionHeader: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "rgb(170, 170, 170)",
  },
});

const groupPeopleByLastName = (data) => {
  const groupedData = data.reduce((accumulator, item) => {
    const group = item.name.last[0].toUpperCase();

    if (accumulator[group]) {
      accumulator[group].data.push(item);
    } else {
      accumulator[group] = {
        title: group,
        data: [item],
      };
    }
    return accumulator;
  }, {});

  const sections = Object.keys(groupedData).map((key) => groupedData[key]);

  return sections.sort((a, b) => {
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
    return 0;
  });
};

export default () => {
  return (
    <SafeAreaView>
      <SectionList
        sections={groupPeopleByLastName(PEOPLE)}
        keyExtractor={(item) => `${item.name.first}-${item.name.last}`}
        renderSectionHeader={({ section }) => (
          <View style={styles.sectionHeader}>
            <Text>{section.title}</Text>
          </View>
        )}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.name}>
              {item.name.first} {item.name.last}
            </Text>
          </View>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

const PEOPLE = [
  {
    name: {
      title: "Ms",
      first: "Maeva",
      last: "Scott",
    },
  },
  {
    name: {
      title: "Mr",
      first: "Mohamoud",
      last: "Faaij",
    },
  },
    {
      name: {
        title: "Ms",
        first: "Maëlle",
        last: "Henry",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Liam",
        last: "Anderson",
      },
    },
    {
      name: {
        title: "Ms",
        first: "Ava",
        last: "Reynolds",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Noah",
        last: "Zimmerman",
      },
    },
    {
      name: {
        title: "Mrs",
        first: "Emma",
        last: "Bennett",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Elijah",
        last: "Chambers",
      },
    },
    {
      name: {
        title: "Ms",
        first: "Isabella",
        last: "Nguyen",
      },
    },
    {
      name: {
        title: "Mr",
        first: "James",
        last: "Patel",
      },
    },
    {
      name: {
        title: "Mrs",
        first: "Sophia",
        last: "Khan",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Lucas",
        last: "Freeman",
      },
    },
    {
      name: {
        title: "Ms",
        first: "Olivia",
        last: "Rodriguez",
      },
    },
    {
      name: {
        title: "Mr",
        first: "Benjamin",
        last: "Garcia",
      },
    },  
];
