import { splitProps } from 'solid-js'

type EnsureKeys<
  ExpectedKeys extends (keyof Target)[],
  Target,
> = ExpectedKeys extends (keyof Target)[]
  ? [keyof Target] extends [ExpectedKeys[number]]
    ? unknown
    : `Missing required keys: ${Exclude<keyof Target, ExpectedKeys[number]>}`
  : never

export const createSplitProps =
  <Target extends Record<never, never>>() =>
  <Keys extends (keyof Target)[], Props extends Target = Target>(
    props: Props,
    keys: Keys & EnsureKeys<Keys, Target>,
  ) =>
    splitProps(props, keys)
