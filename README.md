# React Hooks

A funcionalidade de Hooks trazida a partir da `versão 16.7.0` do React visa basicamente oferecer formas de trabalharmos com estado e outras API's sem a necessidade de ter uma classe.

## useState

Retorna um valor com estado e uma função para atualizá-lo.

```javascript
const [count, setCount] = useState(0);
```

## useEffect

Aceita uma função que contém código imperativo, possivelmente efetivo.

A função transmitida useEffectserá executada `após a renderização ser confirmada na tela.`

```javascript
useEffect(() => console.log(`New count ${count}`), [count]);
```

## useReducer

Aceita um redutor do tipo (state, action) => newState e retorna o estado atual emparelhado com um método dispatch (se você estiver familiarizado com o Redux, você já sabe como isso funciona).

```javascript
const [state, dispatch] = useReducer(reducer, initialArg);
```

### Referencia

> https://reactjs.org/docs/hooks-reference.html