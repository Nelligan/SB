import {useContext } from 'react'
import { BotContext } from '../BotContext'
/**
 * This will return the BotContext when I use this custom hook 
 * @returns 
 */
const useBotContext = () => {
 
  return useContext(BotContext)
}

export default useBotContext