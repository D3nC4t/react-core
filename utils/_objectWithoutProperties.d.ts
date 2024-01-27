export default function _objectWithoutProperties<Obj extends object, ExcludeKeys extends keyof Obj>(source: Obj, excluded: ExcludeKeys[]): Omit<Obj, ExcludeKeys>;
