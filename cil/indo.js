// Preserving the original Map constructor
const nativeMap = Map;

// Example of overriding Map (not recommended unless necessary)
class CustomMap extends Map {
  // Extend or modify functionalities here
  customMethod() {
    console.log("This is a custom method.");
  }
}

// Usage example
let myCustomMap = new CustomMap();
myCustomMap.set('key1', 'value1');
myCustomMap.customMethod(); // Outputs: This is a custom method.
console.log(myCustomMap.get('key1')); // Outputs: value1

// If you need to use the original Map
let myNativeMap = new nativeMap();
myNativeMap.set('key2', 'value2');
console.log(myNativeMap.get('key2')); // Outputs: value2
