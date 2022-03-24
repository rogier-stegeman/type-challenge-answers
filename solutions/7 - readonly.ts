type MyReadonly<T> = ReturnType<<K extends keyof T>() => {readonly [key in K]: T[key]}>
