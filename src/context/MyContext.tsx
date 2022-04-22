import React from 'react';
import { ContextProps } from '../models/context';

export const MyContext = React.createContext<ContextProps>({ bankInputs: null });
