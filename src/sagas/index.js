import { loadCryptoCurrencySaga } from './cryptocurrency';

export default function runSagas(sagaMiddleware) {
  sagaMiddleware.run(loadCryptoCurrencySaga);
}