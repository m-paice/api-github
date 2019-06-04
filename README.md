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

Parece um pouco o useState, porém ele não te devolve uma função para alterar o estado, e sim uma função de dispatch, que envia uma mensagem de como o estado deve ser alterado.

Aceita um redutor do tipo (state, action) => newState e retorna o estado atual emparelhado com um método dispatch (se você estiver familiarizado com o Redux, você já sabe como isso funciona).

```javascript
const [state, dispatch] = useReducer(reducer, initialArg);
```

## useContext

Aceita um objeto de contexto (o valor retornado de React.createContext) e retorna o valor atual do contexto. O valor de contexto atual é determinado pela prop value do<MyContext.Provider>mais próximo acima do componente de chamada na árvore.

```javascript
const value = useContext(MyContext);

```

### Referencia

> https://reactjs.org/docs/hooks-reference.html