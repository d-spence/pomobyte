import { createContext, useReducer, useEffect } from 'react';
import { configReducer } from '../reducers/configReducer';
import { modalReducer } from '../reducers/modalReducer';
import { defaultConfig, defaultModal } from '../config/defaults';

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [config, configDispatch] = useReducer(configReducer, defaultConfig, () => {
    const localData = localStorage.getItem('config');
    return localData ? JSON.parse(localData) : defaultConfig;
  });
  const [modal, modalDispatch] = useReducer(modalReducer, defaultModal);

  useEffect(() => {
    localStorage.setItem('config', JSON.stringify(config));
  }, [config]);

  return (
    <AppContext.Provider value={{ config, configDispatch, modal, modalDispatch }}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
