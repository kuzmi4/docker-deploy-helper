import Compose from 'docker-compose'
import { resolve } from 'path/posix';


export const pullOne = (name: string) => Compose.pullOne(name, { config: (resolve(__dirname, '../config/docker-compose.yml')) })
export const upOne = (name: string) => Compose.upOne(name, { config: (resolve(__dirname, '../config/docker-compose.yml')) })