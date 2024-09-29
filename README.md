# Guard

React Guard Components to cut down ternary operators.

## NullGuard

Render children components when data is not nullable.

`Default`

```tsx
function App() {
  const { data, isFetching } = useApi();

  return (
    <NullGuard data={data}>
      {function (data) {
        // ... Children components
      }}
    </NullGuard>
  );
}

export default App;
```

`Fallback`

- Render fallback components when data is nullable.

```tsx
function Fallback() {
  return <p>Loading...</p>;
}
function App() {
  const { data, isFetching } = useApi();

  return (
    <NullGuard data={data} fallback={<Fallback />}>
      {function (data) {
        // ... Children components
      }}
    </NullGuard>
  );
}

export default App;
```

## WhenGuard

`Default`

Render children components when props is true.

```tsx
function App() {
  const { data, isFetching } = useApi();

  return (
    <WhenGuard when={!isFetching}>
      {function () {
        // ... Children components when `isFetching` is false.
      }}
    </WhenGuard>
  );
}

export default App;
```

`Fallback`

- Render fallback components when when is false.

```tsx
function Fallback() {
  return <p>Not Ready</p>;
}
function App() {
  const { data, isFetching } = useApi();

  return (
    <WhenGuard when={!isFetching} fallback={<Fallback />}>
      {function () {
        // ... Children components when `isFetching` is false.
      }}
    </WhenGuard>
  );
}

export default App;
```
