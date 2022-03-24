// WIP
type TupleToObject<T extends readonly any[]> = {[key in T]: key}
const tuple2 = ['tesla', 'model 3', 'model X', 'model Y'] as const
const a: TupleToObject<typeof tuple2> = {}
