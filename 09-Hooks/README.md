Use of Some hooks in react =>

1. useState ->  It is used to change the state from one state to other. 
Ex - Notication badge change when message came.

2. UseEffect -> It is used to give another path without disturbing the previous one.
Ex - Truck cover the full width of road and there is no space to move forwward then you create a side line .

3. useRef -> It is used to select any element in React instead of using DOM.
Ex - Selecting the element in react instead of using dom structure like document.queryselector.

4. useContext -> It is used to get the access of a global value in function.
Ex - Like a function fetch a variable that is globally initiated.

5. useReducer -> It is used to handle the complex function in website.
Ex - Like manageing a local storage or you are authenticated or not.

6. useMemo and useCallback -> It is used to optimise the  flow of a function.

useState – state ko manage karne ke liye.

useEffect – side effects handle karne ke liye (jaise API call, DOM manipulation, event listener).

useContext – global state ko consume karne ke liye without prop drilling.

useReducer – complex state management ke liye (Redux jaisa chhota version).

useRef – mutable values hold karne ke liye jo re-render trigger na karein, ya DOM access karne ke liye.

useMemo & useCallback – optimization ke liye, unnecessary re-renders avoid karne ke liye.