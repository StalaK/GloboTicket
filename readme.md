React Native tutorial from Pluralsight

# Notes

## Linking
Linking removed in later versions. Can use `npx react-native-asset` instead to bundle assets

## Setting up routing

```console
npm install @react-navigation/native @react-navigation/stack
```

```console
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

## Routing
StackNavigator contains list of `<Stack.Screen>`
Each `Stack.Screen` has a `name` prop.
Navigate to the screen with `navigation.navigate(' ** <Stack.Screen> name prop **');`

The component on the target screen must take the `navigation` object as a prop
```Example
const Contact = ({navigation}) => {
    ...
}
```

# API Requests
In a functional component, use the useEffect React hook to fetch data during the componentDidMount lifecycle. The second param needs to be an empty array to stop multiple function calls/errors to occur. Need to investigate this in more detail
```Example from News.js
  useEffect(() => { getNews(); }, []);
```
