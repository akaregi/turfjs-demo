// NOTE: `yarn add @turf/turf` しかやってないけど普通にインポートできる
// NOTE: 雑に @turf/turf をインポートするとバンドルが重くなる
//       e.g. full: 550 KiB, minified: 9 KiB
import distance from '@turf/distance'
import { point } from '@turf/helpers'

const from = point([-75.343, 39.984])
const to   = point([-75.534, 39.123])

// NOTE: options 部分を分離すると型検査で死ぬ 何故
const vec = distance(from, to, { units: 'kilometers' })

console.log(vec)
