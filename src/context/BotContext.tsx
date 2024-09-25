import { createContext, useReducer, useMemo, Dispatch, ReactNode } from 'react';
import { reducer } from './reducer/botReducer';
import { botState } from './state/botState';

interface Props {
    children: ReactNode
}
// Create the context with initial undefined values to be provided later
export const BotContext = createContext<any>(undefined);
/**
 * Create the Bot provider to get the state
 * @param param0 
 * @returns 
 */
export const BotProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer<any>(reducer, botState);
/**
 * I will use the useMemo hook to optimize performance by avoiding unnecessary recalculations 
 * or re-creations of objects/functions on every render.
 */
  const value = useMemo(() => ({ state, dispatch }), [state]);
// @ts-ignore
  return <BotContext.Provider value={value}>{children}</BotContext.Provider>;
};