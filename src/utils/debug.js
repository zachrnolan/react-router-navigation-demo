import * as env from '../../env'
export default function(label, value = '') {
  if (env.DEBUG) console.log(label, value)
}
