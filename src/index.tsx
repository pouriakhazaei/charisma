import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {StrictMode} from "react";

import "Assets/Styles/globals.scss";
import {store} from "Redux/Store";
import App from "Pages/App";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>
);