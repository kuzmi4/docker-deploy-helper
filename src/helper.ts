import Compose from 'docker-compose'




export const pullOne = (name: string, project: string = 'default') => Compose.pullOne(name, { composeOptions: ['-p', project], cwd: '/project' })
export const upOne = (name: string, project: string = 'default') => Compose.upOne(name, { composeOptions: ['-p', project], cwd: '/project' })