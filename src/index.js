import React from 'react';
import { render } from 'react-dom';
import Hello from "./components/Hello.tsx";

const rootElement = document.getElementById('react-app');

render(<Hello compiler="TypeScript" framework="React" />, rootElement);