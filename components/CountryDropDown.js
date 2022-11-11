import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { country } from "../api/api";
import { useGlobalContext } from "../api/context";

const CountryDropDown = () => {
  const { setCountry, darkTheme } = useGlobalContext();
  const [selected, setSelected] = React.useState("");

  return (
    <View style={{ color: "white", flexDirection: "row", alignItems: "center" }}>
      <TouchableOpacity>
        <SelectList
          setSelected={(val) => setSelected(val)}
          data={country}
          inputStyles={{ color: darkTheme ? "#f6f2e8" : "#191A19" }}
          dropdownTextStyles={{ color: darkTheme ? "#f6f2e8" : "#191A19" }}
          search={false}
          placeholder={"Country: India"}
          onSelect={() => setCountry(selected)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CountryDropDown;
