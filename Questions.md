1. List.tsx, почему нужно экспортировать обычную функицю, и как перепсиать это на стрелочную функиц.
2. List.tsx, почему в стрелочной функции я вижу ошибку 'Cannot find name "T"'
3. List.tsx, почему пытаясь указать ReturnType как ReactNode я получаю ошибку "List cannot be used as JSX component" & "Its return type 'ReactNode' is not a valid JSX element." & "Type 'undefined' is not assignable to type 'Element | null'"
4. useActions.ts, (...UserActionCreators) Почему это работает внутри обьекта но
  не работает отдельно от него
5. Почему неполучается деструктурировать type & payload из action при создании редьюсера // потому что в одном из кейсов payload === udefined
6. useActions.ts правильно ли указан return type