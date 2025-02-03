import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { AppConfig, processInitializer } from './ProcessInitializer.ts';
import { initializeApi } from './redux/api/axiosConfig.ts';
declare global {
    interface Window {
        config?: AppConfig
    }
}

initializeApi(processInitializer.getApi());

ReactDOM.createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</BrowserRouter>,
);
