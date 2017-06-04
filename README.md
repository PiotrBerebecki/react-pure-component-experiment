# React renderig experiments

## Notes

- To avoid re-rendering use `shouldComponentUpdate` lifecycle hook or `React.PureComponent` which undertakes shallow comparison of props and state.
- When rendering lists don't invoke `uuid()` or `Math.random()` to generate the `key`. Keys should be stable and predictable. Otherwise new component will be created on each render. `shouldComponentUpdate` will not be invoked.
